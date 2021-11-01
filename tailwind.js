module.exports = {
  purge: {
      content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              customGray: {
                  "primary": "#F9F9F9",
                  50: "#E7ECF4",
                  100: "#D1DDEE",
                  150: "#F2F2F2",
                  200: "#A0B5D2",
                  250: "#E5E5E5",
                  300: "#7E96B4",
                  350: "#E2E2E2",
                  400: "#999999",
                  500: "#75757A",
                  600: "#717171",
                  800: "#1C1D25",
                  900: "#E6E6E6"
              },
              customOrange: {
                  100: "#F1CE9C",
                  300: "#C89872",
                  400: "#7C7C7C",
                  700: "#CF8D4E",
                  800: "#AD4C00",
                  900: "#ADADAD",
                  1000:"#F14F4F",
              },
              customCyan: {
                  100: "#ACD8D3",
                  300: "#7AB9B1",
                  800: "#479990",
              },
              customBrown: {
                  100: "#E8DBC9",
                  200: "#E9DEBC",
                  300: "#C3B099",
                  800: "#9E8569",
              },
              customYellow: {
                  100: "#F5F0E0",
                  300: "#EBCF91",
                  800: "#E1AE42",
              },
              customViridian: {
                  '100': '#479087',
                  '200': '#7AB9B1',
              },
              customGreen: {
                  200: '#2D776D',
              }
          },
          minWidth: {
              '11': '10.5rem',//168 Today M
              '12': '12.5rem', //200px
              '17': '4.6875rem', //75px
              '18': '18.625rem', //298px
              '48': '12rem', //192px
              '50': '9.25rem',//148px
              '57': '3.562rem',
          },
          maxWidth: {
              '5' : '5rem',
              '11': '10.5rem',//168 Today M
              '12': '12.5rem', //200px
              '13': '13.75rem', //220px
              '17': '4.6875rem', //75px
              '15': '15.625rem',//250
              '18': '18.625rem', //298px
              '48': '12rem', //192px
              '34': '34px',
              '5.8': '5.8rem'
              
          },
          width: {
              '15': '4.25rem',//68px
              '17': '4.6875rem', //75px
              '18': '4.876rem',//78px
              '25': '6.1875rem',//99px
              '26': '6.5rem', //104px
              '48': '9.5rem', //152px
              '62': '15.625rem',//250
              '68': '17rem', //272px
              '84': '21rem', //336px
              '100': '25rem', //400px
              '104': '26rem', //416px
              '113': '28.25rem', //452px
              '150': '37.5rem', //600px
              '34': '34px' //34px
          },
          height: {
              '15': '4.25rem',//68px
              '17': '4.6875rem', //75px
              '18': '4.5rem',
              '25': '6.1875rem',//99px
              '26': '6.5rem', //104px
              '54': '13.5rem',
              '67': '16.75rem', //268px
              '84': '21rem', //336px
              '100': '25rem', //400px
              '104': '26rem', //416px
              '113': '28.25rem', //452px
              '14': '14px' //14px
          },
          fontSize: {
              size7: "0.4375rem", //7px
              size10: "0.625rem", //10px
              size11: "0.6875rem", //11px
              size13: "0.8125rem", //13px
              size15: "0.9375rem", //15px
              size21: "1.3125rem", //15px today M
              size23: "1.4375rem",//23px
              size32: "2rem", //32px
              size40: "2.5rem", //40px
          },
          lineHeight: {
              6: "0.647", //11px
              12: "1.2",//13
              13: "1.3125",//21
              15: "3.75rem", //60px
              '15px': "0.937rem",
              22: "1.375rem",
              19: "1.187rem"
          },
          minHeight: {
              '7': "7.625rem", //122px
              '50': '9.25rem',//148px
              '57': '3.562rem',
          },
          spacing: {
            '11px': '11px',
            '6px' : '6px',
           },

          borderWidth: {
              '10': '10px'
          },
          keyframes: {
              "screen-fade": {
                  "0%": {
                      opacity: "0",
                  },
                  "100%": {
                      opacity: "1",
                  },
              },
              "round-translate-forward": {
                  "0%": {
                      transform: 'translateX(10px)'
                  },
                  "100%": {
                      transform: 'translateX(80px)'
                  },
              },
              "round-translate-backward": {
                  "0%": {
                      transform: 'translateX(80px)'
                  },
                  "100%": {
                      transform: 'translateX(10px)'
                  },
              },
              "image-translate-forward": {
                  "0%": {
                      transform: 'translate(-40px, 20px)',
                      opacity: '0'
                  },
                  "100%": {
                      transform: 'translate(40px, -20px)',
                      opacity: '1'
                  },
              },
              "image-translate-backward": {
                  "0%": {
                      transform: 'translate(40px, -20px)',
                      opacity: '0',
                  },
                  "100%": {
                      transform: 'translate(-40px, 20px)',
                      opacity: '1'
                  },
              },
          },
          animation: {
              "screen-fade": "screen-fade 0.75s forwards",
              "round-translate-forward": "round-translate-forward 0.75s forwards",
              "round-translate-backward": "round-translate-backward 0.75s forwards",
              "image-translate-forward": "image-translate-forward 0.75s forwards",
              "image-translate-backward": "image-translate-backward 0.75s forwards",
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [
      "@tailwindcss/forms",
      "@tailwindcss/typography",
      "@tailwindcss/aspect-ratio",
  ],
};