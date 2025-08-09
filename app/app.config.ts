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
            'bg-neutral-900 border-neutral-800 border placeholder:text-neutral-400 rounded-xl focus:bg-neutral-900 hover:bg-neutral-900 text-neutral-100 focus:ring-2 focus:border-primary-500 focus:ring-primary-500',
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
  },
})
