const blockManager = editor.BlockManager;

// ============================================
// DAISYUI BASIC ELEMENTS
// ============================================

// DaisyUI Button
blockManager.add('daisy-button', {
    label: 'Primary Button',
    category: 'DaisyUI Elements',
    content: '<button class="btn btn-primary">Click Me</button>',
});

// DaisyUI Card
blockManager.add('daisy-card', {
    label: 'Card',
    category: 'DaisyUI Elements',
    content: `
    <div class="card w-100 bg-base-100 shadow-xl">
      <figure><img src="https://placehold.co/400x225" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  `,
});

// DaisyUI Hero Section
blockManager.add('daisy-hero', {
    label: 'Hero Section',
    category: 'DaisyUI Layouts',
    content: `
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  `,
});

// ============================================
// CONTAINERS & LAYOUT
// ============================================

// Container
blockManager.add('container', {
    label: 'Container',
    category: 'Containers & Layout',
    content: `<div class="container mx-auto px-4 py-4" data-gjs-droppable="true"></div>`,
});

// Section
blockManager.add('section', {
    label: 'Section',
    category: 'Containers & Layout',
    content: `<section class="py-12 px-4" data-gjs-droppable="true"></section>`,
});

// Grid Container
blockManager.add('grid-container', {
    label: 'Grid Container',
    category: 'Containers & Layout',
    content: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-gjs-droppable="true"></div>`,
});

// 2 Column Layout
blockManager.add('columns-2', {
    label: '2 Columns',
    category: 'Containers & Layout',
    content: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div data-gjs-droppable="true" class="p-4"></div>
      <div data-gjs-droppable="true" class="p-4"></div>
    </div>`,
});

// 3 Column Layout
blockManager.add('columns-3', {
    label: '3 Columns',
    category: 'Containers & Layout',
    content: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div data-gjs-droppable="true" class="p-4"></div>
      <div data-gjs-droppable="true" class="p-4"></div>
      <div data-gjs-droppable="true" class="p-4"></div>
    </div>`,
});

// 4 Column Layout
blockManager.add('columns-4', {
    label: '4 Columns',
    category: 'Containers & Layout',
    content: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div data-gjs-droppable="true" class="p-4"></div>
      <div data-gjs-droppable="true" class="p-4"></div>
      <div data-gjs-droppable="true" class="p-4"></div>
      <div data-gjs-droppable="true" class="p-4"></div>
    </div>`,
});

// Flex Row
blockManager.add('flex-row', {
    label: 'Flex Row',
    category: 'Containers & Layout',
    content: `<div class="flex flex-row gap-4" data-gjs-droppable="true"></div>`,
});

// Flex Column
blockManager.add('flex-col', {
    label: 'Flex Column',
    category: 'Containers & Layout',
    content: `<div class="flex flex-col gap-4" data-gjs-droppable="true"></div>`,
});

// ============================================
// BASIC ELEMENTS
// ============================================

// Button Secondary
blockManager.add('daisy-button-secondary', {
    label: 'Secondary Button',
    category: 'Basic Elements',
    content: '<button class="btn btn-secondary">Secondary</button>',
});

// Button Accent
blockManager.add('daisy-button-accent', {
    label: 'Accent Button',
    category: 'Basic Elements',
    content: '<button class="btn btn-accent">Accent</button>',
});

// Button Ghost
blockManager.add('daisy-button-ghost', {
    label: 'Ghost Button',
    category: 'Basic Elements',
    content: '<button class="btn btn-ghost">Ghost</button>',
});

// Button Link
blockManager.add('daisy-button-link', {
    label: 'Link Button',
    category: 'Basic Elements',
    content: '<button class="btn btn-link">Link</button>',
});

// Button Sizes
blockManager.add('daisy-button-lg', {
    label: 'Large Button',
    category: 'Basic Elements',
    content: '<button class="btn btn-lg btn-primary">Large</button>',
});

blockManager.add('daisy-button-sm', {
    label: 'Small Button',
    category: 'Basic Elements',
    content: '<button class="btn btn-sm btn-primary">Small</button>',
});

// Button Group
blockManager.add('daisy-button-group', {
    label: 'Button Group',
    category: 'Basic Elements',
    content: `
    <div class="join">
      <button class="btn join-item">Button</button>
      <button class="btn join-item">Button</button>
      <button class="btn join-item">Button</button>
    </div>`,
});

// Badge
blockManager.add('daisy-badge', {
    label: 'Badge',
    category: 'Basic Elements',
    content: '<span class="badge badge-primary">Primary</span>',
});

blockManager.add('daisy-badge-outline', {
    label: 'Outline Badge',
    category: 'Basic Elements',
    content: '<span class="badge badge-primary badge-outline">Outline</span>',
});

// Avatar
blockManager.add('daisy-avatar', {
    label: 'Avatar',
    category: 'Basic Elements',
    content: `
    <div class="avatar">
      <div class="w-24 rounded">
        <img src="https://placehold.co/100x100" />
      </div>
    </div>`,
});

blockManager.add('daisy-avatar-group', {
    label: 'Avatar Group',
    category: 'Basic Elements',
    content: `
    <div class="avatar-group -space-x-6">
      <div class="avatar">
        <div class="w-12"><img src="https://placehold.co/50x50" /></div>
      </div>
      <div class="avatar">
        <div class="w-12"><img src="https://placehold.co/50x50" /></div>
      </div>
      <div class="avatar">
        <div class="w-12"><img src="https://placehold.co/50x50" /></div>
      </div>
    </div>`,
});

// Divider
blockManager.add('daisy-divider', {
    label: 'Divider',
    category: 'Basic Elements',
    content: '<div class="divider"></div>',
});

blockManager.add('daisy-divider-text', {
    label: 'Divider with Text',
    category: 'Basic Elements',
    content: '<div class="divider">OR</div>',
});

// Link
blockManager.add('daisy-link', {
    label: 'Link',
    category: 'Basic Elements',
    content: '<a class="link link-primary">Primary Link</a>',
});

// ============================================
// DATA DISPLAY
// ============================================

// Alert
blockManager.add('daisy-alert', {
    label: 'Alert Info',
    category: 'Data Display',
    content: `
    <div role="alert" class="alert alert-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>New software update available.</span>
    </div>`,
});

blockManager.add('daisy-alert-success', {
    label: 'Alert Success',
    category: 'Data Display',
    content: `
    <div role="alert" class="alert alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Your purchase has been confirmed!</span>
    </div>`,
});

blockManager.add('daisy-alert-error', {
    label: 'Alert Error',
    category: 'Data Display',
    content: `
    <div role="alert" class="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Error! Task failed successfully.</span>
    </div>`,
});

// Stats
blockManager.add('daisy-stat', {
    label: 'Stat',
    category: 'Data Display',
    content: `
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Total Page Views</div>
        <div class="stat-value">89,400</div>
        <div class="stat-desc">21% more than last month</div>
      </div>
    </div>`,
});

blockManager.add('daisy-stats-group', {
    label: 'Stats Group',
    category: 'Data Display',
    content: `
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </div>
        <div class="stat-title">Total Likes</div>
        <div class="stat-value text-primary">25.6K</div>
        <div class="stat-desc">21% more than last month</div>
      </div>
      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div class="stat-title">Page Views</div>
        <div class="stat-value text-secondary">2.6M</div>
        <div class="stat-desc">21% more than last month</div>
      </div>
    </div>`,
});

// Progress
blockManager.add('daisy-progress', {
    label: 'Progress',
    category: 'Data Display',
    content: '<progress class="progress progress-primary w-56" value="70" max="100"></progress>',
});

// Table
blockManager.add('daisy-table', {
    label: 'Table',
    category: 'Data Display',
    content: `
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
        </tbody>
      </table>
    </div>`,
});

// List
blockManager.add('daisy-list', {
    label: 'List',
    category: 'Data Display',
    content: `
    <ul class="menu bg-base-200 w-56 rounded-box">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>`,
});

// ============================================
// FORMS
// ============================================

// Input
blockManager.add('daisy-input', {
    label: 'Text Input',
    category: 'Forms',
    content: '<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />',
});

// Input with Label
blockManager.add('daisy-input-group', {
    label: 'Input with Label',
    category: 'Forms',
    content: `
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">What is your name?</span>
      </div>
      <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>`,
});

// Textarea
blockManager.add('daisy-textarea', {
    label: 'Textarea',
    category: 'Forms',
    content: '<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>',
});

// Select
blockManager.add('daisy-select', {
    label: 'Select',
    category: 'Forms',
    content: `
    <select class="select select-bordered w-full max-w-xs">
      <option disabled selected>Who shot first?</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>`,
});

// Checkbox
blockManager.add('daisy-checkbox', {
    label: 'Checkbox',
    category: 'Forms',
    content: '<input type="checkbox" class="checkbox" />',
});

// Radio
blockManager.add('daisy-radio', {
    label: 'Radio',
    category: 'Forms',
    content: '<input type="radio" name="radio-1" class="radio" checked />',
});

// Toggle
blockManager.add('daisy-toggle', {
    label: 'Toggle',
    category: 'Forms',
    content: '<input type="checkbox" class="toggle" checked />',
});

// Range
blockManager.add('daisy-range', {
    label: 'Range',
    category: 'Forms',
    content: '<input type="range" min="0" max="100" value="40" class="range" />',
});

// File Input
blockManager.add('daisy-file-input', {
    label: 'File Input',
    category: 'Forms',
    content: '<input type="file" class="file-input file-input-bordered w-full max-w-xs" />',
});

// Search Input
blockManager.add('daisy-search', {
    label: 'Search Input',
    category: 'Forms',
    content: `
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" placeholder="Search" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
    </label>`,
});

// ============================================
// NAVIGATION
// ============================================

// Navbar
blockManager.add('daisy-navbar', {
    label: 'Navbar',
    category: 'Navigation',
    content: `
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="p-2 bg-base-100 rounded-t-none">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>`,
});

// Breadcrumbs
blockManager.add('daisy-breadcrumbs', {
    label: 'Breadcrumbs',
    category: 'Navigation',
    content: `
    <div class="breadcrumbs text-sm">
      <ul>
        <li><a>Home</a></li>
        <li><a>Documents</a></li>
        <li>Add Document</li>
      </ul>
    </div>`,
});

// Pagination
blockManager.add('daisy-pagination', {
    label: 'Pagination',
    category: 'Navigation',
    content: `
    <div class="join">
      <button class="join-item btn">1</button>
      <button class="join-item btn btn-active">2</button>
      <button class="join-item btn">3</button>
      <button class="join-item btn">4</button>
    </div>`,
});

// Steps
blockManager.add('daisy-steps', {
    label: 'Steps',
    category: 'Navigation',
    content: `
    <ul class="steps">
      <li class="step step-primary">Register</li>
      <li class="step step-primary">Choose plan</li>
      <li class="step">Purchase</li>
      <li class="step">Receive Product</li>
    </ul>`,
});

// Tabs
blockManager.add('daisy-tabs', {
    label: 'Tabs',
    category: 'Navigation',
    content: `
    <div role="tablist" class="tabs tabs-lifted">
      <a role="tab" class="tab tab-active">Tab 1</a>
      <a role="tab" class="tab">Tab 2</a>
      <a role="tab" class="tab">Tab 3</a>
    </div>`,
});

// ============================================
// OVERLAYS
// ============================================

// Modal
blockManager.add('daisy-modal', {
    label: 'Modal',
    category: 'Overlays',
    content: `
    <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>`,
});

// Drawer
blockManager.add('daisy-drawer', {
    label: 'Drawer',
    category: 'Overlays',
    content: `
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>`,
});

// Dropdown
blockManager.add('daisy-dropdown', {
    label: 'Dropdown',
    category: 'Overlays',
    content: `
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">Click</div>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>`,
});

// Tooltip
blockManager.add('daisy-tooltip', {
    label: 'Tooltip',
    category: 'Overlays',
    content: `<div class="tooltip" data-tip="hello"><button class="btn">Hover me</button></div>`,
});

// Toast
blockManager.add('daisy-toast', {
    label: 'Toast',
    category: 'Overlays',
    content: `
    <div class="toast">
      <div class="alert alert-info">
        <span>New message arrived.</span>
      </div>
    </div>`,
});

// Loading Spinner
blockManager.add('daisy-loading', {
    label: 'Loading Spinner',
    category: 'Overlays',
    content: '<span class="loading loading-spinner loading-lg"></span>',
});

// Swap
blockManager.add('daisy-swap', {
    label: 'Swap',
    category: 'Overlays',
    content: `
    <label class="swap swap-rotate">
      <input type="checkbox" />
      <div class="swap-on">ON</div>
      <div class="swap-off">OFF</div>
    </label>`,
});

// ============================================
// CONTENT
// ============================================

// Accordion
blockManager.add('daisy-accordion', {
    label: 'Accordion',
    category: 'Content',
    content: `
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" checked="checked" />
      <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>`,
});

// Collapse
blockManager.add('daisy-collapse', {
    label: 'Collapse',
    category: 'Content',
    content: `
    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-200">
      <div class="collapse-title text-xl font-medium">Focus me to see content</div>
      <div class="collapse-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </div>
    </div>`,
});

// Carousel
blockManager.add('daisy-carousel', {
    label: 'Carousel',
    category: 'Content',
    content: `
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img src="https://placehold.co/800x400" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src="https://placehold.co/800x400" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>`,
});

// Timeline
blockManager.add('daisy-timeline', {
    label: 'Timeline',
    category: 'Content',
    content: `
    <ul class="timeline">
      <li>
        <div class="timeline-start">1984</div>
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
        </div>
        <div class="timeline-end timeline-box">First Macintosh computer</div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-start">1998</div>
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
        </div>
        <div class="timeline-end timeline-box">iMac</div>
        <hr />
      </li>
    </ul>`,
});

// Chat Bubble
blockManager.add('daisy-chat', {
    label: 'Chat Bubble',
    category: 'Content',
    content: `
    <div class="chat chat-start">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="https://placehold.co/50x50" />
        </div>
      </div>
      <div class="chat-header">Obi-Wan Kenobi</div>
      <div class="chat-bubble">You were the Chosen One!</div>
      <div class="chat-footer opacity-50">Delivered</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="https://placehold.co/50x50" />
        </div>
      </div>
      <div class="chat-header">Anakin</div>
      <div class="chat-bubble">I hate you!</div>
      <div class="chat-footer opacity-50">Seen at 12:46</div>
    </div>`,
});

// Rating
blockManager.add('daisy-rating', {
    label: 'Rating',
    category: 'Content',
    content: `
    <div class="rating">
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    </div>`,
});

// ============================================
// ADVANCED CARDS
// ============================================

// Card with Image Side
blockManager.add('daisy-card-side', {
    label: 'Card Horizontal',
    category: 'DaisyUI Elements',
    content: `
    <div class="card card-side bg-base-100 shadow-xl">
      <figure><img src="https://placehold.co/200x280" alt="Movie"/></figure>
      <div class="card-body">
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>`,
});

// Glass Card
blockManager.add('daisy-glass-card', {
    label: 'Glass Card',
    category: 'DaisyUI Elements',
    content: `
    <div class="card w-100 glass">
      <figure><img src="https://placehold.co/400x300" alt="car!"/></figure>
      <div class="card-body">
        <h2 class="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>`,
});

// ============================================
// FOOTER
// ============================================

// Footer
blockManager.add('daisy-footer', {
    label: 'Footer',
    category: 'DaisyUI Layouts',
    content: `
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 class="footer-title">Services</h6>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 class="footer-title">Company</h6>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 class="footer-title">Legal</h6>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer>`,
});
