/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"todo\": \"Home_todo__jD5Dw\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"actions\": \"Home_actions__INjAs\",\n\t\"editButton\": \"Home_editButton__lRuSZ\",\n\t\"deleteButton\": \"Home_deleteButton__PuCkT\",\n\t\"form\": \"Home_form__k2xMg\",\n\t\"inputForm\": \"Home_inputForm__PXFeY\",\n\t\"label\": \"Home_label__UYtOa\",\n\t\"input\": \"Home_input__ZarWZ\",\n\t\"submit\": \"Home_submit__TkaQg\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0b2RvXCI6IFwiSG9tZV90b2RvX19qRDVEd1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiYWN0aW9uc1wiOiBcIkhvbWVfYWN0aW9uc19fSU5qQXNcIixcblx0XCJlZGl0QnV0dG9uXCI6IFwiSG9tZV9lZGl0QnV0dG9uX19sUnVTWlwiLFxuXHRcImRlbGV0ZUJ1dHRvblwiOiBcIkhvbWVfZGVsZXRlQnV0dG9uX19QdUNrVFwiLFxuXHRcImZvcm1cIjogXCJIb21lX2Zvcm1fX2syeE1nXCIsXG5cdFwiaW5wdXRGb3JtXCI6IFwiSG9tZV9pbnB1dEZvcm1fX1BYRmVZXCIsXG5cdFwibGFiZWxcIjogXCJIb21lX2xhYmVsX19VWXRPYVwiLFxuXHRcImlucHV0XCI6IFwiSG9tZV9pbnB1dF9fWmFyV1pcIixcblx0XCJzdWJtaXRcIjogXCJIb21lX3N1Ym1pdF9fVGthUWdcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ()=>{\n    const { 0: todos , 1: setTodos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: purpose , 1: setPurpose  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: editIndex , 1: setEditIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const formSubmitHandler = (e)=>{\n        e.preventDefault();\n        if (editIndex === -1) {\n            setTodos([\n                ...todos,\n                {\n                    title: purpose,\n                    description: description\n                }\n            ]);\n            setPurpose(\"\");\n            setDescription(\"\");\n            return;\n        }\n        const tmpTodos = todos;\n        tmpTodos[editIndex].title = purpose;\n        tmpTodos[editIndex].description = description;\n        setTodos(tmpTodos);\n        setPurpose(\"\");\n        setDescription(\"\");\n        setEditIndex(-1);\n    };\n    const purposeChangeHandler = (e)=>{\n        setPurpose(e.target.value);\n    };\n    const descriptionChangeHandler = (e)=>{\n        setDescription(e.target.value);\n    };\n    const editTodo = (editIndex)=>{\n        setPurpose(todos[editIndex].title);\n        setDescription(todos[editIndex].description);\n        setEditIndex(editIndex);\n    };\n    const deleteTodo = (deleteIndex)=>{\n        setTodos(todos.filter((todo, index)=>index !== deleteIndex));\n    };\n    // keyは必須\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                onSubmit: formSubmitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputForm),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"目標\"\n                            }, void 0, false, {\n                                fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                onChange: purposeChangeHandler,\n                                value: purpose\n                            }, void 0, false, {\n                                fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputForm),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                children: \"説明\"\n                            }, void 0, false, {\n                                fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                onChange: descriptionChangeHandler,\n                                value: description\n                            }, void 0, false, {\n                                fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().submit),\n                        value: editIndex == -1 ? \"追加\" : \"更新\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, undefined),\n            todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().todo),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                            children: todo.title\n                        }, void 0, false, {\n                            fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                            children: todo.description\n                        }, void 0, false, {\n                            fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().actions),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        editTodo(index);\n                                    },\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().editButton),\n                                    children: \"編集\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        deleteTodo(index);\n                                    },\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().deleteButton),\n                                    children: \"削除\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/muratasoushin/Documents/coding/nextjs_test/pages/index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztxQ0FBQztvQ0FBRUUsU0FBUyxFQUFFMUIsNkVBQW1COzhDQUFFLElBQUU7Ozs7OzZDQUFTOzs7Ozs7cUNBQ3BGOzttQkFOOEJ3QixLQUFLOzs7OzZCQU9qQyxDQUNSOztvQkFFSCxDQUNEO0NBQ0w7QUFFRCxpRUFBZXZCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzICBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxudHlwZSBUb2RvID0ge1xuICB0aXRsZTogc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogc3RyaW5nLFxufTtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2RvcyxzZXRUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvW10+KFtcbiBdKTtcbiAgY29uc3QgW3B1cnBvc2UsIHNldFB1cnBvc2VdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbixzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2VkaXRJbmRleCwgc2V0RWRpdEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oLTEpO1xuXG4gIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0gKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVkaXRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHNldFRvZG9zKFtcbiAgICAgICAgLi4udG9kb3MsXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTpwdXJwb3NlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICBdKTtcbiAgICAgIHNldFB1cnBvc2UoJycpO1xuICAgICAgc2V0RGVzY3JpcHRpb24oJycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0bXBUb2RvcyA9IHRvZG9zO1xuICAgIHRtcFRvZG9zW2VkaXRJbmRleF0udGl0bGUgPSBwdXJwb3NlO1xuICAgIHRtcFRvZG9zW2VkaXRJbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBzZXRUb2Rvcyh0bXBUb2Rvcyk7XG4gICAgc2V0UHVycG9zZSgnJyk7XG4gICAgc2V0RGVzY3JpcHRpb24oJycpO1xuICAgIHNldEVkaXRJbmRleCgtMSk7XG4gIH1cblxuICBjb25zdCBwdXJwb3NlQ2hhbmdlSGFuZGxlcj0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0UHVycG9zZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cbiAgY29uc3QgZGVzY3JpcHRpb25DaGFuZ2VIYW5kbGVyID0gKGU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KT0+e1xuICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGVkaXRUb2RvID0gKGVkaXRJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0UHVycG9zZSh0b2Rvc1tlZGl0SW5kZXhdLnRpdGxlKTtcbiAgICBzZXREZXNjcmlwdGlvbih0b2Rvc1tlZGl0SW5kZXhdLmRlc2NyaXB0aW9uKTtcbiAgICBzZXRFZGl0SW5kZXgoZWRpdEluZGV4KTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoZGVsZXRlSW5kZXg6bnVtYmVyKSA9PntcbiAgICBzZXRUb2RvcyhcbiAgICAgIHRvZG9zLmZpbHRlcigodG9kbyxpbmRleCkgPT4gaW5kZXggIT09IGRlbGV0ZUluZGV4KVxuICAgICk7XG4gIH1cblxuICAvLyBrZXnjga/lv4XpoIhcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtmb3JtU3VibWl0SGFuZGxlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX0+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PuebruaomTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9e3B1cnBvc2VDaGFuZ2VIYW5kbGVyfSB2YWx1ZT17cHVycG9zZX0+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19PlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT7oqqzmmI48L2xhYmVsPlxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9e2Rlc2NyaXB0aW9uQ2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Rlc2NyaXB0aW9ufT48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW5wdXQgdHlwZSA9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9IHZhbHVlPXtlZGl0SW5kZXggPT0gLTEgPyBcIui/veWKoFwiOifmm7TmlrAnfS8+XG4gICAgPC9mb3JtPlxuICAgICAge1xuICAgICAgICB0b2Rvcy5tYXAoKHRvZG8gLGluZGV4KSA9PiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnRvZG99IGtleT17aW5kZXh9PiBcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0b2RvLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyBlZGl0VG9kbyhpbmRleCkgfX0gY2xhc3NOYW1lPXtzdHlsZXMuZWRpdEJ1dHRvbn0+57eo6ZuGPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB7ZGVsZXRlVG9kbyhpbmRleCl9fSBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVCdXR0b259PuWJiumZpDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsInRvZG9zIiwic2V0VG9kb3MiLCJwdXJwb3NlIiwic2V0UHVycG9zZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJlZGl0SW5kZXgiLCJzZXRFZGl0SW5kZXgiLCJmb3JtU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRpdGxlIiwidG1wVG9kb3MiLCJwdXJwb3NlQ2hhbmdlSGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwiZGVzY3JpcHRpb25DaGFuZ2VIYW5kbGVyIiwiZWRpdFRvZG8iLCJkZWxldGVUb2RvIiwiZGVsZXRlSW5kZXgiLCJmaWx0ZXIiLCJ0b2RvIiwiaW5kZXgiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJpbnB1dEZvcm0iLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJuYW1lIiwic3VibWl0IiwibWFwIiwiYXJ0aWNsZSIsImgxIiwicCIsImFjdGlvbnMiLCJidXR0b24iLCJvbkNsaWNrIiwiZWRpdEJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();