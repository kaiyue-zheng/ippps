"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LandingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui */ \"../../packages/ui/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction LandingPage() {\n    _s();\n    const [userEmail, setuserEmail] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const handleChange = (e)=>{\n        setuserEmail(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        alert(\"The email you entered was: \".concat(userEmail));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui__WEBPACK_IMPORTED_MODULE_2__.LoginTabs, {}, void 0, false, {\n                fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                style: {\n                    margin: \"auto\",\n                    height: \"100%\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter Your Email\",\n                            value: userEmail,\n                            onChange: handleChange,\n                            style: {\n                                width: \"250px\",\n                                height: 50,\n                                padding: 15\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            style: {\n                                width: \"150px\",\n                                backgroundColor: \"black\",\n                                borderWidth: 3,\n                                borderRadius: 15,\n                                margin: 20,\n                                padding: 5,\n                                cursor: \"pointer\",\n                                color: \"white\"\n                            },\n                            children: \"Confirm\"\n                        }, void 0, false, {\n                            fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(LandingPage, \"yli8ySGDzf02LH1atxaa3+9lOgs=\");\n_c = LandingPage;\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUVBO0FBTWhCLFNBQVNFLGNBQWM7O0lBQ3BDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwyQ0FBYyxDQUFDLElBQUk7SUFFckQsTUFBTU0sZUFBZSxDQUFDQyxJQUFNO1FBQzFCSCxhQUFhRyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxNQUFNQyxlQUFlLENBQUNILElBQU07UUFDMUJBLEVBQUVJLGNBQWM7UUFDaEJDLE1BQU0sOEJBQXdDLE9BQVZUO0lBQ3RDO0lBRUEscUJBQ0UsOERBQUNVOzswQkFDQyw4REFBQ1oseUNBQVNBOzs7OzswQkFDViw4REFBQ2E7Z0JBQ0NDLFVBQVVMO2dCQUNWTSxPQUFPO29CQUNMQyxRQUFRO29CQUNSQyxRQUFRO29CQUNSQyxTQUFTO29CQUNUQyxZQUFZO29CQUNaQyxnQkFBZ0I7Z0JBQ2xCOztrQ0FFQSw4REFBQ1I7d0JBQUlTLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaaEIsT0FBT047NEJBQ1B1QixVQUFVcEI7NEJBQ1ZVLE9BQU87Z0NBQUVXLE9BQU87Z0NBQVNULFFBQVE7Z0NBQUlVLFNBQVM7NEJBQUc7Ozs7Ozs7Ozs7O2tDQUdyRCw4REFBQ2Y7d0JBQUlTLFdBQVU7a0NBQ2IsNEVBQUNPOzRCQUNDTCxNQUFLOzRCQUNMUixPQUFPO2dDQUNMVyxPQUFPO2dDQUNQRyxpQkFBaUI7Z0NBQ2pCQyxhQUFhO2dDQUNiQyxjQUFjO2dDQUNkZixRQUFRO2dDQUNSVyxTQUFTO2dDQUNUSyxRQUFRO2dDQUNSQyxPQUFPOzRCQUNUO3NDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0F0RHVCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeD8xMWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMb2dpblRhYnMgfSBmcm9tIFwidWlcIjtcblxuaW50ZXJmYWNlIElFbWFpbFByb3BzIHtcbiAgdXNlckVtYWlsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKCkge1xuICBjb25zdCBbdXNlckVtYWlsLCBzZXR1c2VyRW1haWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXR1c2VyRW1haWwoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFsZXJ0KGBUaGUgZW1haWwgeW91IGVudGVyZWQgd2FzOiAke3VzZXJFbWFpbH1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TG9naW5UYWJzIC8+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17dXNlckVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIsIGhlaWdodDogNTAsIHBhZGRpbmc6IDE1IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTUwcHhcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAzLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxuICAgICAgICAgICAgICBtYXJnaW46IDIwLFxuICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTG9naW5UYWJzIiwiTGFuZGluZ1BhZ2UiLCJ1c2VyRW1haWwiLCJzZXR1c2VyRW1haWwiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJzdHlsZSIsIm1hcmdpbiIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwid2lkdGgiLCJwYWRkaW5nIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n"));

/***/ })

});