module.exports = {
  title: 'GrapesJS',
  description: 'GrapesJS documentation',
  base: '/docs/',
  ga: '', // Google Analytics ID
  serviceWorker: false, // Enable Service Worker for offline usage
  head: [
    ['link', { rel: 'icon', href: '/logo-icon.png' }],
    //['link', { rel: 'stylesheet', href: 'https://unpkg.com/grapesjs/dist/css/grapes.min.css' }], // dev https://localhost:8080/dist/css/grapes.min.css
    // ['script', { src: '/grapes.min.js' }], // dev https://localhost:8080/dist/grapes.min.js
    ['link', { rel: 'stylesheet', href: 'https://localhost:8080/dist/css/grapes.min.css' }],
    ['script', { src: 'https://localhost:8080/dist/grapes.min.js' }],
  ],
  localesSKIP: {
    '/': {
      lang: 'en-US',
    },
    '/it/': {
      lang: 'it-IT',
      description: 'GrapesJS documentazione',
    }
  },
  themeConfig: {
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'dev',
    repo: 'artf/grapesjs',
    editLinkText: 'Edit this page on GitHub',

    logo: '/logo.png',
    lastUpdated: 'Last Updated',
    locales: {
      '/': {
        selectText: 'EN',
        label: 'English',
      },
      '/it/': {
        selectText: 'IT',
        label: 'Italiano',
        nav: [
          { text: 'Supportaci', link: 'https://opencollective.com/grapesjs' },
        ],
        sidebar: [
          '/',
          ['/getting-started', 'Getting Started'],
        ]
      }
    },
    nav: [
      { text: 'Docs', link: '/' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Support Us', link: 'https://opencollective.com/grapesjs' },
      { text: 'Twitter', link: 'https://twitter.com/grapesjs' },
    ],
    sidebar: {
      '/api/': [
        '',
        ['/api/editor', 'Editor'],
        ['/api/assets', 'Asset Manager'],
        ['/api/block_manager', 'Block Manager'],
        ['/api/commands', 'Commands'],
        ['/api/components', 'DOM Components'],
        ['/api/panels', 'Panels'],
        ['/api/style_manager', 'Style Manager'],
        ['/api/storage_manager', 'Storage Manager'],
        ['/api/device_manager', 'Device Manager'],
        ['/api/selector_manager', 'Selector Manager'],
        ['/api/css_composer', 'CSS Composer'],
        ['/api/modal_dialog', 'Modal'],
        ['/api/rich_text_editor', 'Rich Text Editor'],
        ['/api/keymaps', 'Keymaps'],
        ['/api/undo_manager', 'Undo Manager'],
      ],
      '/': [
        '',
        ['/getting-started', 'Getting Started'],
        ['/faq', 'FAQ'],
        {
          title: 'Modules',
          collapsable: false,
          children: [
            ['/modules/Assets', 'Asset Manager'],
            ['/modules/Blocks', 'Block Manager'],
            ['/modules/Components', 'Component Manager'],
            ['/modules/Components-js', 'Components & JS'],
            ['/modules/Traits', 'Trait Manager'],
            ['/modules/Storage', 'Storag Manager'],
            ['/modules/Plugins', 'Plugins'],
          ]
        }, {
          title: 'Guides',
          collapsable: false,
          children: [
            ['/guides/Replace-Rich-Text-Editor', 'Replace Rich Text Editor'],
          ]
        }
      ],
    }
  },
}
