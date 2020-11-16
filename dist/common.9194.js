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
    var value = event.target.value;

    if (!value) {
      onChange(null);
    } else {
      onChange(event.target.value);
    }
  }, [onChange]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-group",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
      className: "form-control",
      onChange: handleChange,
      disabled: disabled,
      value: currentItemId || "",
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
    var value = event.target.value;

    if (!value) {
      onChange(null);
    } else {
      onChange(event.target.value);
    }
  }, [onChange]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-group",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
      className: "form-control",
      disabled: disabled,
      onChange: handleChange,
      value: currentItemId || "",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
        disabled: true,
        value: "",
        children: "Modul ausw\xE4hlen"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
        value: "all",
        children: "(Alle)"
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

/***/ }),

/***/ "./src/hooks/useDegreePrograms.js":
/*!****************************************!*\
  !*** ./src/hooks/useDegreePrograms.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/index.js");
/* harmony import */ var hooks_useModules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useModules */ "./src/hooks/useModules.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var useDegreePrograms = Object(zustand__WEBPACK_IMPORTED_MODULE_0__["default"])(function (set, get) {
  return {
    "items": {},
    "value": null,
    "status": "idle",
    "readAll": function readAll() {
      var _get = get(),
          value = _get.value,
          status = _get.status,
          items = _get.items;

      switch (status) {
        case "pending":
        case "rejected":
          return {
            status: status,
            value: value
          };

        case "resolved":
          return {
            status: status,
            "value": items
          };
      }

      var promise = fetch("/studienordnungen/index.json").then(function (res) {
        return res.json();
      }).then(function (programs) {
        return Promise.all(programs.map(function (program) {
          return fetch("/studienordnungen/".concat(program.file)).then(function (res) {
            return res.json();
          }).then(function (data) {
            return {
              "id": program.id,
              "data": _objectSpread(_objectSpread({}, data), {}, {
                "name": program.name
              })
            };
          });
        }));
      }).then(function (programs) {
        programs.forEach(function (program) {
          hooks_useModules__WEBPACK_IMPORTED_MODULE_1__["default"].setState(function (prevState) {
            return {
              "items": _objectSpread(_objectSpread({}, prevState.items), program.data.modules.reduce(function (accu, module) {
                return _objectSpread(_objectSpread({}, accu), {}, _defineProperty({}, module.module_numbers[0], _objectSpread(_objectSpread({}, module), {}, {
                  "degree_program_id": program.id
                })));
              }, {}))
            };
          });
        });
        var items = programs.reduce(function (accu, program) {
          return _objectSpread(_objectSpread({}, accu), {}, _defineProperty({}, program.id, program.data));
        }, {});

        var _get2 = get(),
            prevItems = _get2["items"];

        set({
          "items": _objectSpread(_objectSpread({}, prevItems), items),
          "status": "resolved",
          "value": null
        });
      })["catch"](function (error) {
        set({
          "status": "rejected",
          "value": error
        });
      });
      set({
        "status": "pending",
        "value": promise
      });
      return {
        "status": "pending",
        "value": promise
      };
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (useDegreePrograms);

/***/ }),

/***/ "./src/hooks/useModules.js":
/*!*********************************!*\
  !*** ./src/hooks/useModules.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/index.js");

var useModules = Object(zustand__WEBPACK_IMPORTED_MODULE_0__["default"])(function (set, get) {
  return {
    "items": {},
    "readAll": function readAll() {
      var _get = get(),
          items = _get.items;

      return items;
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (useModules);

/***/ })

}]);
//# sourceMappingURL=common.9194.js.map