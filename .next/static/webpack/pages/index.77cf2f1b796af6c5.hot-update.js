"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_eladtayar_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/eladtayar-helpers */ \"./helpers/eladtayar-helpers/index.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer/index.tsx\");\n/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Utils */ \"./components/Utils/index.ts\");\n/* -------------------------------------------------------------------------- */ /*                            External Dependencies                           */ /* -------------------------------------------------------------------------- */ \n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  min-height: calc(100vh - 39vh);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  .intro__text {\\n    font-size: 2.275em;\\n    font-weight: 500;\\n    margin: 2rem 0rem 1.5rem;\\n    position: relative;\\n    text-transform: uppercase;\\n    letter-spacing: 9.9px;\\n\\n    &::before,\\n    &::after {\\n      content: attr(data-text);\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      width: 100%;\\n      height: 100%;\\n    }\\n\\n    &::before {\\n      left: 2px;\\n      text-shadow: -1px 0 #00ffff;\\n      animation: noise-anim-2 15s infinite linear alternate-reverse;\\n    }\\n\\n    &::after {\\n      left: -2px;\\n      text-shadow: 3px 0 #ff69b4;\\n      animation: noise-anim 2s infinite linear alternate-reverse;\\n    }\\n\\n    @keyframes noise-anim {\\n      0% {\\n        clip-path: inset(29% 0 25% 0);\\n      }\\n      5% {\\n        clip-path: inset(9% 0 38% 0);\\n      }\\n      10% {\\n        clip-path: inset(96% 0 1% 0);\\n      }\\n      15% {\\n        clip-path: inset(75% 0 23% 0);\\n      }\\n      20% {\\n        clip-path: inset(46% 0 50% 0);\\n      }\\n      25% {\\n        clip-path: inset(3% 0 46% 0);\\n      }\\n      30% {\\n        clip-path: inset(82% 0 2% 0);\\n      }\\n      35% {\\n        clip-path: inset(88% 0 1% 0);\\n      }\\n      40% {\\n        clip-path: inset(91% 0 8% 0);\\n      }\\n      45% {\\n        clip-path: inset(96% 0 2% 0);\\n      }\\n      50% {\\n        clip-path: inset(59% 0 38% 0);\\n      }\\n      55% {\\n        clip-path: inset(41% 0 53% 0);\\n      }\\n      60% {\\n        clip-path: inset(21% 0 47% 0);\\n      }\\n      65% {\\n        clip-path: inset(89% 0 4% 0);\\n      }\\n      70% {\\n        clip-path: inset(1% 0 95% 0);\\n      }\\n      75% {\\n        clip-path: inset(86% 0 4% 0);\\n      }\\n      80% {\\n        clip-path: inset(95% 0 5% 0);\\n      }\\n      85% {\\n        clip-path: inset(54% 0 36% 0);\\n      }\\n      90% {\\n        clip-path: inset(70% 0 27% 0);\\n      }\\n      95% {\\n        clip-path: inset(6% 0 16% 0);\\n      }\\n      100% {\\n        clip-path: inset(95% 0 2% 0);\\n      }\\n    }\\n    @keyframes noise-anim-2 {\\n      0% {\\n        clip-path: inset(76% 0 21% 0);\\n      }\\n      5% {\\n        clip-path: inset(54% 0 7% 0);\\n      }\\n      10% {\\n        clip-path: inset(55% 0 29% 0);\\n      }\\n      15% {\\n        clip-path: inset(89% 0 3% 0);\\n      }\\n      20% {\\n        clip-path: inset(33% 0 40% 0);\\n      }\\n      25% {\\n        clip-path: inset(17% 0 56% 0);\\n      }\\n      30% {\\n        clip-path: inset(37% 0 51% 0);\\n      }\\n      35% {\\n        clip-path: inset(38% 0 19% 0);\\n      }\\n      40% {\\n        clip-path: inset(93% 0 4% 0);\\n      }\\n      45% {\\n        clip-path: inset(44% 0 14% 0);\\n      }\\n      50% {\\n        clip-path: inset(53% 0 26% 0);\\n      }\\n      55% {\\n        clip-path: inset(67% 0 11% 0);\\n      }\\n      60% {\\n        clip-path: inset(85% 0 13% 0);\\n      }\\n      65% {\\n        clip-path: inset(27% 0 37% 0);\\n      }\\n      70% {\\n        clip-path: inset(87% 0 4% 0);\\n      }\\n      75% {\\n        clip-path: inset(10% 0 8% 0);\\n      }\\n      80% {\\n        clip-path: inset(51% 0 27% 0);\\n      }\\n      85% {\\n        clip-path: inset(10% 0 60% 0);\\n      }\\n      90% {\\n        clip-path: inset(83% 0 3% 0);\\n      }\\n      95% {\\n        clip-path: inset(23% 0 55% 0);\\n      }\\n      100% {\\n        clip-path: inset(1% 0 81% 0);\\n      }\\n    }\\n  }\\n  p {\\n    font-size: calc(var(--font-sm) + 0.9px);\\n    line-height: 2.3;\\n    font-weight: 400;\\n    color: var(--article-color) !important;\\n\\n    a,button {\\n      font-size: calc(var(--font-sm) + 0.9px);\\n      line-height: 20px;\\n      position: relative;\\n      border: none;\\n      font-weight: 800;\\n      background: transparent;\\n      text-transform: uppercase;\\n    }\\n  }\\n  /* button {\\n    font-size: var(--font-sm);\\n    background: var(--button-index);\\n    border: none;\\n    border-radius: 5px;\\n    transition: all 0.4s ease;\\n    padding: 1px 12px;\\n    &:hover {\\n      background: \",\n        \";\\n      color: #fff;\\n    }\\n  } */\\n  @media (max-width: 585px) {\\n    margin: 3rem 0;\\n    display: block;\\n    min-height: 100%;\\n  }\\n  @media (max-width: 989px) {\\n    margin: 3rem 0;\\n    display: block;\\n  }\\n  @media (max-width: 220px) {\\n    margin: 3rem 0;\\n    display: block;\\n    min-height: 100%;\\n  }\\n  @media (prefers-reduced-motion: reduce) {\\n    /* Stop the animation */\\n\\n    .intro__text {\\n      animation: none;\\n\\n      &::before,\\n      &::after {\\n        content: none;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/* -------------------------- Internal Dependencies ------------------------- */ \n\n\nvar Home = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_helpers_eladtayar_helpers__WEBPACK_IMPORTED_MODULE_4__.arrayRandomItem)([\n        \"#37609c\",\n        \"#34c759\",\n        \"#5856d6\"\n    ])), 1), color = _useState[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PageSection, {\n            color: color,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.PageWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h1, (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({\n                                \"data-text\": \"I'm Elad Tayar\",\n                                className: \"intro__text\"\n                            }, (0,_components_Utils__WEBPACK_IMPORTED_MODULE_7__.getTransitions)(0.1)), {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"mark\", {\n                                    className: \"mark\",\n                                    children: \"I'm Elad Tayar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, _this)\n                            }), void 0, false, {\n                                fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, (0,_components_Utils__WEBPACK_IMPORTED_MODULE_7__.getTransitions)(0.3)), {\n                                children: [\n                                    \" \",\n                                    \"I am an ambitious second-year student pursuing a Bachelor's Degree in Information Systems Management at the College of Management in Israel.  I am passionate\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/about\",\n                                        \"aria-label\": \"Go to About Page\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, _this),\n                                    \" \",\n                                    \"contributing to impactful projects, continuously seeking opportunities to expand my expertise. My\",\n                                    \" \"\n                                ]\n                            }), void 0, true, {\n                                fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, (0,_components_Utils__WEBPACK_IMPORTED_MODULE_7__.getTransitions)(0.5)), {\n                                children: [\n                                    \" \",\n                                    \"My\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/resume\",\n                                        \"aria-label\": \"Check out my Resume\",\n                                        children: \"Resume\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, _this),\n                                    \" \",\n                                    \"highlights my technical skills in areas such as data analysis, databases, development, and system maintenance. I have actively contributed to various\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/projects\",\n                                        \"aria-label\": \"Go to Projects Page And Check What I Read\",\n                                        children: \"Projects\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, _this),\n                                    \" \",\n                                    \"during my studies and work experience, including a significant research project as part of an Honors Program in collaboration with Bremen University. To discuss potential opportunities, please feel free to\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/contact\",\n                                        \"aria-label\": \"Go to Contact Page\",\n                                        children: \"Contact Me\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }), void 0, true, {\n                                fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, (0,_components_Utils__WEBPACK_IMPORTED_MODULE_7__.getTransitions)(0.7)), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            goto: \"/about\",\n                            children: \"See More About Me\"\n                        }, void 0, false, {\n                            fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, _this)\n                    }), void 0, false, {\n                        fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/eladtayar/Documents/EladsWebsite/pages/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"Cn64kgxq16eXKgCuRvxIQpBeakA=\");\n_c = Home;\nvar PageSection = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div(_templateObject(), function(props) {\n    return props.color;\n});\n_c1 = PageSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"PageSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBOEUsR0FDOUUsOEVBQThFLEdBQzlFLDhFQUE4RTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEM7QUFDRDtBQUNWO0FBQ2tDO0FBQ3hCO0FBRXZDLDhFQUE4RSxHQUVuQjtBQUNiO0FBRU87QUFFckQsSUFBTVUsT0FBTzs7SUFDWCxJQUFnQlQsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDRywyRUFBZUEsQ0FBQztRQUFDO1FBQVc7UUFBVztLQUFVLFFBQW5FTyxRQUFTVjtJQUVoQixxQkFDRSw4REFBQ0ssMERBQU1BO2tCQUNMLDRFQUFDTTtZQUFZRCxPQUFPQTtzQkFDbEIsNEVBQUNKLDJEQUFXQTs7a0NBQ1YsOERBQUNNOzswQ0FDQyw4REFBQ1IsaURBQU1BLENBQUNTLEVBQUU7Z0NBQ1JDLGFBQVU7Z0NBQ1ZDLFdBQVU7K0JBQ05QLGlFQUFjQSxDQUFDOzBDQUVuQiw0RUFBQ1E7b0NBQUtELFdBQVU7OENBQU87Ozs7Ozs7Ozs7OzBDQUV6Qiw4REFBQ1gsaURBQU1BLENBQUNhLENBQUMsMElBQUtULGlFQUFjQSxDQUFDOztvQ0FDMUI7b0NBQUk7b0NBRUw7a0RBQ0EsOERBQUNOLGtEQUFJQTt3Q0FBQ2dCLE1BQUs7d0NBQVNDLGNBQVc7a0RBQW1COzs7Ozs7b0NBR2pEO29DQUFJO29DQUdKOzs7Ozs7OzBDQUVILDhEQUFDZixpREFBTUEsQ0FBQ2EsQ0FBQywwSUFBS1QsaUVBQWNBLENBQUM7O29DQUMxQjtvQ0FBSTtvQ0FFSjtrREFDRCw4REFBQ04sa0RBQUlBO3dDQUFDZ0IsTUFBSzt3Q0FBVUMsY0FBVztrREFBc0I7Ozs7OztvQ0FFOUM7b0NBQUk7b0NBQzBJO2tEQUN0Siw4REFBQ2pCLGtEQUFJQTt3Q0FDSGdCLE1BQUs7d0NBQ0xDLGNBQVc7a0RBQ1o7Ozs7OztvQ0FFTztvQ0FBSTtvQ0FDa007a0RBQzlNLDhEQUFDakIsa0RBQUlBO3dDQUFDZ0IsTUFBSzt3Q0FBV0MsY0FBVztrREFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNMUQsOERBQUNDOzs7OztrQ0FDRCw4REFBQ2hCLGlEQUFNQSxDQUFDaUIsR0FBRywwSUFBS2IsaUVBQWNBLENBQUM7a0NBQzdCLDRFQUFDRCwwREFBVUE7NEJBQUNlLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7O2tDQUc1Qiw4REFBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBMURNWDtLQUFBQTtBQTRETixJQUFNRSxjQUFjViw4REFBVSxvQkE4TFYsU0FBQ3NCO1dBQVVBLE1BQU1iLEtBQUs7O01BOUxwQ0M7QUE2Tk4sK0RBQWVGLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dGVybmFsIERlcGVuZGVuY2llcyAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBhcnJheVJhbmRvbUl0ZW0gfSBmcm9tICcuLi9oZWxwZXJzL2VsYWR0YXlhci1oZWxwZXJzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbnRlcm5hbCBEZXBlbmRlbmNpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5pbXBvcnQgTGF5b3V0LCB7IFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEZvb3RlckxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5pbXBvcnQgeyBnZXRUcmFuc2l0aW9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXRpbHMnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbY29sb3JdID0gdXNlU3RhdGUoYXJyYXlSYW5kb21JdGVtKFsnIzM3NjA5YycsICcjMzRjNzU5JywgJyM1ODU2ZDYnXSkpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxQYWdlU2VjdGlvbiBjb2xvcj17Y29sb3J9PlxuICAgICAgICA8UGFnZVdyYXBwZXI+XG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8bW90aW9uLmgxXG4gICAgICAgICAgICAgIGRhdGEtdGV4dD1cIkknbSBFbGFkIFRheWFyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW50cm9fX3RleHRcIlxuICAgICAgICAgICAgICB7Li4uZ2V0VHJhbnNpdGlvbnMoMC4xKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1hcmsgY2xhc3NOYW1lPVwibWFya1wiPkkmYXBvczttIEVsYWQgVGF5YXI8L21hcms+XG4gICAgICAgICAgICA8L21vdGlvbi5oMT5cbiAgICAgICAgICAgIDxtb3Rpb24ucCB7Li4uZ2V0VHJhbnNpdGlvbnMoMC4zKX0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIEkgYW0gYW4gYW1iaXRpb3VzIHNlY29uZC15ZWFyIHN0dWRlbnQgcHVyc3VpbmcgYSBCYWNoZWxvcidzIERlZ3JlZSBpbiBJbmZvcm1hdGlvbiBTeXN0ZW1zIE1hbmFnZW1lbnQgYXQgdGhlIENvbGxlZ2Ugb2YgTWFuYWdlbWVudCBpbiBJc3JhZWwuICBJIGFtIHBhc3Npb25hdGUgXG4gICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGFyaWEtbGFiZWw9XCJHbyB0byBBYm91dCBQYWdlXCI+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICBjb250cmlidXRpbmcgdG8gaW1wYWN0ZnVsIHByb2plY3RzLCBjb250aW51b3VzbHkgc2Vla2luZyBvcHBvcnR1bml0aWVzIHRvIGV4cGFuZCBteSBleHBlcnRpc2UuIE15IFxuXG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICAgICAgPG1vdGlvbi5wIHsuLi5nZXRUcmFuc2l0aW9ucygwLjUpfT5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgTXlcbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bWVcIiBhcmlhLWxhYmVsPVwiQ2hlY2sgb3V0IG15IFJlc3VtZVwiPlxuICAgICAgICAgICAgICAgIFJlc3VtZVxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgaGlnaGxpZ2h0cyBteSB0ZWNobmljYWwgc2tpbGxzIGluIGFyZWFzIHN1Y2ggYXMgZGF0YSBhbmFseXNpcywgZGF0YWJhc2VzLCBkZXZlbG9wbWVudCwgYW5kIHN5c3RlbSBtYWludGVuYW5jZS4gSSBoYXZlIGFjdGl2ZWx5IGNvbnRyaWJ1dGVkIHRvIHZhcmlvdXN7JyAnfVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvamVjdHNcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHbyB0byBQcm9qZWN0cyBQYWdlIEFuZCBDaGVjayBXaGF0IEkgUmVhZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgZHVyaW5nIG15IHN0dWRpZXMgYW5kIHdvcmsgZXhwZXJpZW5jZSwgaW5jbHVkaW5nIGEgc2lnbmlmaWNhbnQgcmVzZWFyY2ggcHJvamVjdCBhcyBwYXJ0IG9mIGFuIEhvbm9ycyBQcm9ncmFtIGluIGNvbGxhYm9yYXRpb24gd2l0aCBCcmVtZW4gVW5pdmVyc2l0eS4gVG8gZGlzY3VzcyBwb3RlbnRpYWwgb3Bwb3J0dW5pdGllcywgcGxlYXNlIGZlZWwgZnJlZSB0b3snICd9XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIGFyaWEtbGFiZWw9XCJHbyB0byBDb250YWN0IFBhZ2VcIj5cbiAgICAgICAgICAgICAgICBDb250YWN0IE1lXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgey4uLmdldFRyYW5zaXRpb25zKDAuNyl9PlxuICAgICAgICAgICAgPEZvb3RlckxpbmsgZ290bz1cIi9hYm91dFwiPlNlZSBNb3JlIEFib3V0IE1lPC9Gb290ZXJMaW5rPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L1BhZ2VXcmFwcGVyPlxuICAgICAgPC9QYWdlU2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IFBhZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM5dmgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLmludHJvX190ZXh0IHtcbiAgICBmb250LXNpemU6IDIuMjc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDJyZW0gMHJlbSAxLjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDkuOXB4O1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgbGVmdDogMnB4O1xuICAgICAgdGV4dC1zaGFkb3c6IC0xcHggMCAjMDBmZmZmO1xuICAgICAgYW5pbWF0aW9uOiBub2lzZS1hbmltLTIgMTVzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBsZWZ0OiAtMnB4O1xuICAgICAgdGV4dC1zaGFkb3c6IDNweCAwICNmZjY5YjQ7XG4gICAgICBhbmltYXRpb246IG5vaXNlLWFuaW0gMnMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZS1yZXZlcnNlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgbm9pc2UtYW5pbSB7XG4gICAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMjklIDAgMjUlIDApO1xuICAgICAgfVxuICAgICAgNSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDklIDAgMzglIDApO1xuICAgICAgfVxuICAgICAgMTAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg5NiUgMCAxJSAwKTtcbiAgICAgIH1cbiAgICAgIDE1JSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoNzUlIDAgMjMlIDApO1xuICAgICAgfVxuICAgICAgMjAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg0NiUgMCA1MCUgMCk7XG4gICAgICB9XG4gICAgICAyNSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDMlIDAgNDYlIDApO1xuICAgICAgfVxuICAgICAgMzAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg4MiUgMCAyJSAwKTtcbiAgICAgIH1cbiAgICAgIDM1JSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoODglIDAgMSUgMCk7XG4gICAgICB9XG4gICAgICA0MCUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDkxJSAwIDglIDApO1xuICAgICAgfVxuICAgICAgNDUlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg5NiUgMCAyJSAwKTtcbiAgICAgIH1cbiAgICAgIDUwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoNTklIDAgMzglIDApO1xuICAgICAgfVxuICAgICAgNTUlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg0MSUgMCA1MyUgMCk7XG4gICAgICB9XG4gICAgICA2MCUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDIxJSAwIDQ3JSAwKTtcbiAgICAgIH1cbiAgICAgIDY1JSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoODklIDAgNCUgMCk7XG4gICAgICB9XG4gICAgICA3MCUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDElIDAgOTUlIDApO1xuICAgICAgfVxuICAgICAgNzUlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg4NiUgMCA0JSAwKTtcbiAgICAgIH1cbiAgICAgIDgwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoOTUlIDAgNSUgMCk7XG4gICAgICB9XG4gICAgICA4NSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDU0JSAwIDM2JSAwKTtcbiAgICAgIH1cbiAgICAgIDkwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoNzAlIDAgMjclIDApO1xuICAgICAgfVxuICAgICAgOTUlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg2JSAwIDE2JSAwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDk1JSAwIDIlIDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIG5vaXNlLWFuaW0tMiB7XG4gICAgICAwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoNzYlIDAgMjElIDApO1xuICAgICAgfVxuICAgICAgNSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDU0JSAwIDclIDApO1xuICAgICAgfVxuICAgICAgMTAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg1NSUgMCAyOSUgMCk7XG4gICAgICB9XG4gICAgICAxNSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDg5JSAwIDMlIDApO1xuICAgICAgfVxuICAgICAgMjAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgzMyUgMCA0MCUgMCk7XG4gICAgICB9XG4gICAgICAyNSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDE3JSAwIDU2JSAwKTtcbiAgICAgIH1cbiAgICAgIDMwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMzclIDAgNTElIDApO1xuICAgICAgfVxuICAgICAgMzUlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgzOCUgMCAxOSUgMCk7XG4gICAgICB9XG4gICAgICA0MCUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDkzJSAwIDQlIDApO1xuICAgICAgfVxuICAgICAgNDUlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg0NCUgMCAxNCUgMCk7XG4gICAgICB9XG4gICAgICA1MCUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDUzJSAwIDI2JSAwKTtcbiAgICAgIH1cbiAgICAgIDU1JSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoNjclIDAgMTElIDApO1xuICAgICAgfVxuICAgICAgNjAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg4NSUgMCAxMyUgMCk7XG4gICAgICB9XG4gICAgICA2NSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDI3JSAwIDM3JSAwKTtcbiAgICAgIH1cbiAgICAgIDcwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoODclIDAgNCUgMCk7XG4gICAgICB9XG4gICAgICA3NSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDEwJSAwIDglIDApO1xuICAgICAgfVxuICAgICAgODAlIHtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCg1MSUgMCAyNyUgMCk7XG4gICAgICB9XG4gICAgICA4NSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDEwJSAwIDYwJSAwKTtcbiAgICAgIH1cbiAgICAgIDkwJSB7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoODMlIDAgMyUgMCk7XG4gICAgICB9XG4gICAgICA5NSUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDIzJSAwIDU1JSAwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDElIDAgODElIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tZm9udC1zbSkgKyAwLjlweCk7XG4gICAgbGluZS1oZWlnaHQ6IDIuMztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB2YXIoLS1hcnRpY2xlLWNvbG9yKSAhaW1wb3J0YW50O1xuXG4gICAgYSxidXR0b24ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWZvbnQtc20pICsgMC45cHgpO1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgfVxuICAvKiBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWluZGV4KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICAgcGFkZGluZzogMXB4IDEycHg7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9ICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1ODVweCkge1xuICAgIG1hcmdpbjogM3JlbSAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk4OXB4KSB7XG4gICAgbWFyZ2luOiAzcmVtIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDIyMHB4KSB7XG4gICAgbWFyZ2luOiAzcmVtIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxuICBAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAgIC8qIFN0b3AgdGhlIGFuaW1hdGlvbiAqL1xuXG4gICAgLmludHJvX190ZXh0IHtcbiAgICAgIGFuaW1hdGlvbjogbm9uZTtcblxuICAgICAgJjo6YmVmb3JlLFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkxpbmsiLCJhcnJheVJhbmRvbUl0ZW0iLCJtb3Rpb24iLCJMYXlvdXQiLCJQYWdlV3JhcHBlciIsIkZvb3RlckxpbmsiLCJnZXRUcmFuc2l0aW9ucyIsIkhvbWUiLCJjb2xvciIsIlBhZ2VTZWN0aW9uIiwiYXJ0aWNsZSIsImgxIiwiZGF0YS10ZXh0IiwiY2xhc3NOYW1lIiwibWFyayIsInAiLCJocmVmIiwiYXJpYS1sYWJlbCIsImJyIiwiZGl2IiwiZ290byIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});