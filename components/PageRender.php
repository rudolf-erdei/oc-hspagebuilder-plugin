<?php namespace Holisun\HsPageBuilder\Components;

use Cms\Classes\ComponentBase;
use Holisun\HSPageBuilder\Models\Page;

/**
 * PageRender Component
 *
 * @link https://docs.octobercms.com/4.x/extend/cms-components.html
 */
class PageRender extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Page Render',
            'description' => 'Renders a page created with the visual builder.'
        ];
    }

    /**
     * @link https://docs.octobercms.com/4.x/element/inspector-types.html
     */
    public function defineProperties()
    {
        return [
            'slug' => [
                'title'       => 'Page Slug',
                'description' => 'The URL slug for the builder page',
                'default'     => '{{ :slug }}',
                'type'        => 'string'
            ]
        ];
    }

    public function onRun()
    {
        // Fetch the slug from the component properties (mapped from the URL)
        $slug = $this->property('slug');
        \Log::error("Slug: ".$slug);

        // Query the database for the matching page
        $this->page['pageData'] = $pageData = Page::where('slug', $slug)->first();

        // If no page is found, return a 404 to prevent a blank screen
        if (!$pageData) {
            $this->setStatusCode(404);
            return $this->controller->run('404');
        }

        // Set the CMS page title dynamically based on the builder page
        $this->page->title = $pageData->title;
    }
}
