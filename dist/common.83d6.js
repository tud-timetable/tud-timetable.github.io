(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/DegreeProgrameSelect.jsx":
/*!*************************************************!*\
  !*** ./src/components/DegreeProgrameSelect.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function noop() {}

function sortDegreeProgrames(degreeProgrames) {
  return function (a, b) {
    var nameA = degreeProgrames[a].name;
    var nameB = degreeProgrames[b].name;
    return nameA.localeCompare(nameB);
  };
}

function DegreeProgrameSelect(_ref) {
  var _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
      currentItemId = _ref.currentItemId,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? {} : _ref$items;
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    onChange(event.target.value);
  }, [onChange]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-group",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
      className: "form-control",
      onChange: handleChange,
      disabled: disabled,
      value: currentItemId,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
        disabled: true,
        value: "",
        children: "Studiengang ausw\xE4hlen"
      }), Object.keys(items || {}).sort(sortDegreeProgrames(items)).map(function (id) {
        var program = items[id];
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: program.id,
          children: program.name
        }, program.id);
      })]
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DegreeProgrameSelect);

/***/ }),

/***/ "./src/components/ModuleSelect.jsx":
/*!*****************************************!*\
  !*** ./src/components/ModuleSelect.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function noop() {}

function ModuleSelect(_ref) {
  var _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
      currentItemId = _ref.currentItemId,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items;
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    onChange(event.target.value);
  }, [onChange]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-group",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
      className: "form-control",
      disabled: disabled,
      onChange: handleChange,
      value: currentItemId,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
        disabled: true,
        value: "",
        children: "Modul ausw\xE4hlen"
      }), (items || []).map(function (m) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: m.module_numbers[0],
          children: m.module_name
        }, m.module_numbers[0]);
      })]
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ModuleSelect);

/***/ })

}]);
//# sourceMappingURL=common.83d6.js.map