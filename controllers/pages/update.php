<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>

<div id="gjs" style="height:0; overflow:hidden;"></div>
<script>
    const editor = grapesjs.init({
    container: '#gjs',
    height: '90vh',
    width: 'auto',

    canvas: {
        scripts: [
            'https://cdn.tailwindcss.com',
        ],
        styles: [
            'https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.min.css'
        ]
    },
    storageManager: {
        type: 'remote',
        stepsBeforeSave: 1,
        options: {
            remote: {
                urlStore: '<?= Backend::url("holisun/hspagebuilder/pages/savebuilder/" . $formModel->id) ?>',
                urlLoad: '<?= Backend::url("holisun/hspagebuilder/pages/loadbuilder/" . $formModel->id) ?>',
                contentTypeJson: true,
                fetchOptions: {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': '<?= Session::token() ?>'
                    }
                },

                onStore: (data, editor) => {
                    return {
                        builder_state: data,         // The massive JSON object you saw
                        html: editor.getHtml(),      // Extract the raw HTML
                        css: editor.getCss()         // Extract the raw CSS
                    };
                },

                onLoad: (result) => {
                    return result;
                }
            }
        }
    }
});
</script>
<script src="<?= url('/plugins/holisun/hspagebuilder/assets/js/editor.js') ?>"></script>
