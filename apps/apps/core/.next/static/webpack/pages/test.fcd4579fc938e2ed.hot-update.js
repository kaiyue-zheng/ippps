"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./src/components/product-slider-2.tsx":
/*!*********************************************!*\
  !*** ./src/components/product-slider-2.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-material-ui-carousel */ \"../../node_modules/react-material-ui-carousel/dist/index.js\");\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Slider2() {\n    _s();\n    // State to programmatically set active child\n    const [activeChild, setActiveChild] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const items = _data_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    // The Keypress Event Handler\n    const changeChild = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{\n        if (e.key === \"ArrowLeft\") {\n            // If supposed previous child is < 0 set it to last child\n            setActiveChild((a)=>a - 1 < 0 ? items.length - 1 : a - 1);\n        } else if (e.key === \"ArrowRight\") {\n            // If supposed next child is > length -1 set it to first child\n            setActiveChild((a)=>a + 1 > items.length - 1 ? 0 : a + 1);\n        }\n    }, [\n        items\n    ]);\n    // Set and cleanup the event listener\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.addEventListener(\"keydown\", changeChild);\n        return function cleanup() {\n            document.removeEventListener(\"keydown\", changeChild);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {\n        index: activeChild,\n        autoPlay: false,\n        navButtonsAlwaysVisible: true,\n        children: items.map((i)=>{\n            const { id , brand , description , price , salesprice , imageurl  } = i;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-between \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageurl,\n                            alt: brand\n                        }, void 0, false, {\n                            fileName: \"/Users/karen.zheng/Desktop/Github/saks-ml-apps/apps/apps/core/src/components/product-slider-2.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-bold my-6\",\n                            children: brand\n                        }, void 0, false, {\n                            fileName: \"/Users/karen.zheng/Desktop/Github/saks-ml-apps/apps/apps/core/src/components/product-slider-2.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/karen.zheng/Desktop/Github/saks-ml-apps/apps/apps/core/src/components/product-slider-2.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Price: $\",\n                                price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/karen.zheng/Desktop/Github/saks-ml-apps/apps/apps/core/src/components/product-slider-2.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Sale: $\",\n                                salesprice\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/karen.zheng/Desktop/Github/saks-ml-apps/apps/apps/core/src/components/product-slider-2.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            style: {\n                                width: \"150px\",\n                                backgroundColor: \"black\",\n                                borderWidth: 3,\n                                borderRadius: 15,\n                                margin: 20,\n                                padding: 5,\n                                cursor: \"pointer\",\n                                color: \"white\"\n                            },\n                            children: \"Like\"\n                        }, void 0, false, {\n                            fileName: \"/Users/karen.zheng/Desktop/Github/saks-ml-apps/apps/apps/core/src/components/product-slider-2.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/karen.zheng/Desktop/Github/saks-ml-apps/apps/apps/core/src/components/product-slider-2.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this)\n            }, id, false, {\n                fileName: \"/Users/karen.zheng/Desktop/Github/saks-ml-apps/apps/apps/core/src/components/product-slider-2.tsx\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/karen.zheng/Desktop/Github/saks-ml-apps/apps/apps/core/src/components/product-slider-2.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Slider2, \"DquGMcuSsul14t4+6GNc5ZlrOHo=\");\n_c = Slider2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider2);\nvar _c;\n$RefreshReg$(_c, \"Slider2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0LXNsaWRlci0yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFnQztBQUN5QztBQUN2QjtBQUVsRCxTQUFTTSxVQUFVOztJQUNqQiw2Q0FBNkM7SUFDN0MsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1LLFFBQVFULGtEQUFJQTtJQUVsQiw2QkFBNkI7SUFDN0IsTUFBTVUsY0FBY1Isa0RBQVdBLENBQzdCLENBQUNTLElBQXFCO1FBQ3BCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxhQUFhO1lBQ3pCLHlEQUF5RDtZQUN6REosZUFBZSxDQUFDSyxJQUFPQSxJQUFJLElBQUksSUFBSUosTUFBTUssTUFBTSxHQUFHLElBQUlELElBQUksQ0FBQztRQUM3RCxPQUFPLElBQUlGLEVBQUVDLEdBQUcsS0FBSyxjQUFjO1lBQ2pDLDhEQUE4RDtZQUM5REosZUFBZSxDQUFDSyxJQUFPQSxJQUFJLElBQUlKLE1BQU1LLE1BQU0sR0FBRyxJQUFJLElBQUlELElBQUksQ0FBQztRQUM3RCxDQUFDO0lBQ0gsR0FDQTtRQUFDSjtLQUFNO0lBR1QscUNBQXFDO0lBQ3JDTixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RZLFNBQVNDLGdCQUFnQixDQUFDLFdBQVdOO1FBRXJDLE9BQU8sU0FBU08sVUFBVTtZQUN4QkYsU0FBU0csbUJBQW1CLENBQUMsV0FBV1I7UUFDMUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTCxtRUFBUUE7UUFDUGMsT0FBT1o7UUFDUGEsVUFBVSxLQUFLO1FBQ2ZDLHlCQUEwQixJQUFJO2tCQUU3QlosTUFBTWEsR0FBRyxDQUFDLENBQUNDLElBQU07WUFDaEIsTUFBTSxFQUFFQyxHQUFFLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUVDLFdBQVUsRUFBRUMsU0FBUSxFQUFFLEdBQUdOO1lBQ2hFLHFCQUNFLDhEQUFDTzswQkFDQyw0RUFBQ0E7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUMsS0FBS0o7NEJBQVVLLEtBQUtUOzs7Ozs7c0NBQ3pCLDhEQUFDVTs0QkFBR0osV0FBVTtzQ0FBMkJOOzs7Ozs7c0NBQ3pDLDhEQUFDVztzQ0FBR1Y7Ozs7OztzQ0FDSiw4REFBQ1U7O2dDQUFFO2dDQUFTVDs7Ozs7OztzQ0FDWiw4REFBQ1M7O2dDQUFFO2dDQUFRUjs7Ozs7OztzQ0FDWCw4REFBQ1M7NEJBQ0NDLE1BQUs7NEJBQ0xDLE9BQU87Z0NBQ0xDLE9BQU87Z0NBQ1BDLGlCQUFpQjtnQ0FDakJDLGFBQWE7Z0NBQ2JDLGNBQWM7Z0NBQ2RDLFFBQVE7Z0NBQ1JDLFNBQVM7Z0NBQ1RDLFFBQVE7Z0NBQ1JDLE9BQU87NEJBQ1Q7c0NBQ0Q7Ozs7Ozs7Ozs7OztlQW5CS3ZCOzs7OztRQXlCZDs7Ozs7O0FBR047R0FqRVNsQjtLQUFBQTtBQW1FVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0LXNsaWRlci0yLnRzeD9jODVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvZGF0YSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWxcIjtcblxuZnVuY3Rpb24gU2xpZGVyMigpIHtcbiAgLy8gU3RhdGUgdG8gcHJvZ3JhbW1hdGljYWxseSBzZXQgYWN0aXZlIGNoaWxkXG4gIGNvbnN0IFthY3RpdmVDaGlsZCwgc2V0QWN0aXZlQ2hpbGRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGl0ZW1zID0gZGF0YTtcblxuICAvLyBUaGUgS2V5cHJlc3MgRXZlbnQgSGFuZGxlclxuICBjb25zdCBjaGFuZ2VDaGlsZCA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgLy8gSWYgc3VwcG9zZWQgcHJldmlvdXMgY2hpbGQgaXMgPCAwIHNldCBpdCB0byBsYXN0IGNoaWxkXG4gICAgICAgIHNldEFjdGl2ZUNoaWxkKChhKSA9PiAoYSAtIDEgPCAwID8gaXRlbXMubGVuZ3RoIC0gMSA6IGEgLSAxKSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAvLyBJZiBzdXBwb3NlZCBuZXh0IGNoaWxkIGlzID4gbGVuZ3RoIC0xIHNldCBpdCB0byBmaXJzdCBjaGlsZFxuICAgICAgICBzZXRBY3RpdmVDaGlsZCgoYSkgPT4gKGEgKyAxID4gaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBhICsgMSkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2l0ZW1zXVxuICApO1xuXG4gIC8vIFNldCBhbmQgY2xlYW51cCB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjaGFuZ2VDaGlsZCk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZUNoaWxkKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbFxuICAgICAgaW5kZXg9e2FjdGl2ZUNoaWxkfSAvLyA8LS0gVGhpcyBjb250cm9scyB0aGUgYWN0aXZlQ2hpbGRcbiAgICAgIGF1dG9QbGF5PXtmYWxzZX0gLy8gPC0tIFlvdSBwcm9iYWx5IHdhbnQgdG8gZGlzYWJsZSB0aGlzIGZvciBvdXIgcHVycG9zZXNcbiAgICAgIG5hdkJ1dHRvbnNBbHdheXNWaXNpYmxlID17dHJ1ZX1cbiAgICA+XG4gICAgICB7aXRlbXMubWFwKChpKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQsIGJyYW5kLCBkZXNjcmlwdGlvbiwgcHJpY2UsIHNhbGVzcHJpY2UsIGltYWdldXJsIH0gPSBpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdldXJsfSBhbHQ9e2JyYW5kfSAvPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG15LTZcIj57YnJhbmR9PC9oMj5cbiAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPHA+UHJpY2U6ICR7cHJpY2V9PC9wPlxuICAgICAgICAgICAgICA8cD5TYWxlOiAke3NhbGVzcHJpY2V9PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1MHB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAzLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjAsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExpa2VcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvQ2Fyb3VzZWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXIyO1xuIl0sIm5hbWVzIjpbImRhdGEiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJvdXNlbCIsIlNsaWRlcjIiLCJhY3RpdmVDaGlsZCIsInNldEFjdGl2ZUNoaWxkIiwiaXRlbXMiLCJjaGFuZ2VDaGlsZCIsImUiLCJrZXkiLCJhIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbmRleCIsImF1dG9QbGF5IiwibmF2QnV0dG9uc0Fsd2F5c1Zpc2libGUiLCJtYXAiLCJpIiwiaWQiLCJicmFuZCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJzYWxlc3ByaWNlIiwiaW1hZ2V1cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsInAiLCJidXR0b24iLCJ0eXBlIiwic3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwicGFkZGluZyIsImN1cnNvciIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/product-slider-2.tsx\n"));

/***/ })

});