<?php namespace Holisun\HsPageBuilder\Controllers;

use Backend\Behaviors\FormController;
use Backend\Behaviors\ListController;
use BackendMenu;
use Backend\Classes\Controller;
use Holisun\HSPageBuilder\Models\Page;

/**
 * Pages Backend Controller
 *
 * @link https://docs.octobercms.com/4.x/extend/system/controllers.html
 */
class Pages extends Controller
{
    public $implement = [
        FormController::class,
        ListController::class,
    ];

    /**
     * @var string formConfig file
     */
    public $formConfig = 'config_form.yaml';

    /**
     * @var string listConfig file
     */
    public $listConfig = 'config_list.yaml';

    /**
     * @var array required permissions
     */
    public $requiredPermissions = ['holisun.hspagebuilder.pages'];

    /**
     * __construct the controller
     */
    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('Holisun.HsPageBuilder', 'hspagebuilder', 'pages');
    }

    public function save($id)
    {
        $page = Page::find($id);
        $data = input();

        // GrapesJS sends 'gjs-html', 'gjs-css', and 'gjs-components'
        $page->html = $data['gjs-html'];
        $page->css = $data['gjs-css'];
        $page->builder_state = json_encode($data['gjs-components']);
        $page->save();

        return response()->json(['message' => 'Saved successfully']);
    }

    /**
     * Catches the Save request from GrapesJS
     */
    public function savebuilder($id)
    {
        $page = Page::findOrFail($id);

        // GrapesJS sends data as a JSON payload
        $payload = request()->getContent();
        // 2. Decode it into a usable PHP array
        $data = json_decode($payload, true);

        $page->html = $data['html'] ?? '';
        $page->css = $data['css'] ?? '';

        // Save the raw JSON state so the builder can reload the blocks later
        if (isset($data['builder_state'])) {
            $page->builder_state = json_encode($data['builder_state']);
        }

        $page->save();

        return response()->json(['message' => 'Successfully saved!']);
    }

    /**
     * Catches the Load request when you open the update page
     */
    public function loadbuilder($id)
    {
        $page = Page::findOrFail($id);
        // If the page is brand new, return an empty JSON object {}
        if (!$page->builder_state) {
            return response()->json(new \stdClass());
        }

        // Decode the state and return it directly to GrapesJS
        $state = json_decode($page->builder_state, true);

        return response()->json($state);
    }
}
