export default defineAppConfig({
  tairo: {
    title: '',
    collapse: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'DarkModeToggle',
            props: {
              disableTransitions: true
            },
          },
          {
            component: 'ToolbarAccountMenu'
          },
        ]
      },
      circularMenu: {
        enabled: false,
        tools: [
          
        ]
      },
      navigation: {
        enabled: true,
        header: {
          component: 'CollapseNavigationHeader'
        },
        items: []
      }
    },
    panels: [
        {
          name: 'ownerProvider',
          position: 'right',
          component: 'PanelOwnerProvider',
        },
    ],
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto'
        }
      }
    }
  },
  toaster: {
    theme: {
      containerClass: [
        'fixed',
        'inset-0',
        'pointer-events-none',
        'p-4',
        'flex',
        'overflow-hidden',
        'z-[200]',
        'gap-2',
        'space-y-3',

        // set your values here
        'flex-col-reverse',
        'items-center',
      ],
    },
  },

})
