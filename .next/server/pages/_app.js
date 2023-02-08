"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./src/styles/global.ts

/* harmony default export */ const global = (external_styled_components_.createGlobalStyle`
  @font-face {
    font-family: Poppins;
    font-weight: 400;
    src: local('Poppins'), url(/fonts/Poppins-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: Poppins;
    font-weight: 500;
    src: local('Poppins'), url(/fonts/Poppins-Medium.ttf) format('truetype');
  }

  @font-face {
    font-family: Poppins;
    font-weight: 700;
    src: local('Poppins'), url(/fonts/Poppins-Bold.ttf) format('truetype');
  }

  ${({ theme  })=>external_styled_components_.css`
    * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
    }

    html,
    body {
      min-height: 100%;
    }

    body {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding-bottom: 1.875rem;
      font-family: ${theme.font.family};
      background: ${theme.colors.tertiary.xwhite};
      color: ${theme.colors.secondary.xxdark};
    }

    body,
    input,
    select,
    button {
      font-size: ${theme.font.sizes.midle};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.bold};
    }

    button:not(:disabled) {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }

    li {
      list-style: none;
    }

    scrollbar-color: ${theme.colors.primary.xblue}
      ${theme.colors.secondary.xxdark};
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      width: 0.9rem;
      background: #dedede;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary.xblue};
      border-radius: 0.25rem;
    }

    html {
      font-size: 62.5%;
    }
  `
}`);

;// CONCATENATED MODULE: ./src/styles/theme.ts
const theme = {
    border: {
        solid: (color)=>`0.1rem solid ${color}`
    },
    font: {
        family: "Comfortaa,Poppins, -apple-system, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        regular: 400,
        medium: 500,
        smallbold: 600,
        bold: 700,
        sizes: {
            xlarge: "70rem",
            xxlarge: "2.25rem",
            xxxlarge: "2rem",
            midle: "1.5rem",
            small: "1.25rem",
            xsmall: "1rem"
        }
    },
    colors: {
        primary: {
            xblue: "#1C9DEA"
        },
        secondary: {
            xxdark: "#101621",
            xxxdark: "#4E4E4E"
        },
        tertiary: {
            background: "#F5F5F5",
            contrast: "#f4f4f4",
            white: "#fff",
            xwhite: "#E0E0E0",
            gray: "#aaaaaa",
            xxwhite: "#E2E2E2",
            xcinza: "#dddddd",
            xxcinza: "#aaaaaa",
            xxxcinza: "#bbbbbb"
        },
        shades: {
            black: (opacity)=>`rgba(0, 0, 0, ${opacity})`
            ,
            darkGrey: (opacity)=>`rgba(105, 105, 105, ${opacity})`
            ,
            white: (opacity)=>`rgba(255, 255, 255, ${opacity})`
        },
        linear: {
            darkBlue: `linear-gradient(89.66deg, #1D2236 0.42%, rgba(29, 34, 54, 0.8) 32.52%, rgba(29, 34, 54, 0.4) 99.84%)`,
            black: `linear-gradient(180deg, rgba(17, 24, 32, 0.4) 0%, #111820 100%)`
        }
    },
    spacings: {
        xmultipleeight: "5rem",
        xxmultipleeight: "2.5rem",
        xxxmultipleeight: "2rem",
        xxxxmultipleeight: "1rem",
        xxxxxmultipleeight: "0.5rem"
    },
    transition: {
        default: "0.3s ease-in-out",
        fast: "0.1s ease-in-out",
        slow: "1s ease-in-out"
    }
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx






const EmptyLayout = ({ children  })=>/*#__PURE__*/ _jsx(_Fragment, {
        children: children
    })
;
function MyApp({ Component , pageProps , err  }) {
    const ComponentLayout = Component.Layout ? Component.Layout : (external_react_default()).Fragment;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ComponentLayout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    err: err
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(global, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(466));
module.exports = __webpack_exports__;

})();