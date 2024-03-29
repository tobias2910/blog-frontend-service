module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        'secondary-3': 'var(--secondary-3)',
        hover: 'var(--hover)',
      },
      textColor: {
        baseColor: 'var(--text-base)',
        primary: 'var(--text-primary)',
        'primary-2': 'var(--text-primary-2)',
        secondary: 'var(--text-secondary)',
      },
      animation: {
        'fadeIn-left': 'fadeIn-left .3s ease forwards',
        'fadeOut-left': 'fadeOut-left .3s ease forwards',
        'fadeIn-up': 'fadeIn-up 1.5s ease forwards',
        'fadeIn-down': 'fadeIn-down 1s ease forwards',
        typingIndicator: 'typingIndicator .7s ease-in infinite',
      },
      keyframes: {
        'fadeIn-left': {
          from: {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)',
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fadeOut-left': {
          from: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
          to: {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)',
          },
        },
        'fadeIn-up': {
          from: {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)',
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fadeIn-down': {
          from: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
          to: {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)',
          },
        },
        typingIndicator: {
          '0%, 100%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
