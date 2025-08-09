export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
    },

    input: {
      variants: {
        size: {
          default: {
            base: 'p-3 h-14 text-base gap-2 ps-11',
            leading: 'ps-3',
            leadingIcon: 'size-5',
          },
        },

        variant: {
          default:
            'bg-primary-50 border-neutral-100 border placeholder:text-neutral-500 rounded-xl focus:bg-neutral-100 hover:bg-neutral-100 text-neutral-700 focus:ring-2 focus:border-primary-500 focus:ring-primary-500',
        },
      },
    },

    button: {
      variants: {
        size: {
          default: {
            base: 'text-base',
            leadingIcon: 'size-5',
          },
        },
      },
    },
    label: {
      variants: {
        color: {
          default: {
            base: 'text-base text-neutral-700',
          },
        },
      },
    },
  },
})
