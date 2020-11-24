(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules"],{

/***/ "./src/components/LinkedModuleNumbers.jsx":
/*!************************************************!*\
  !*** ./src/components/LinkedModuleNumbers.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_ModuleNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ModuleNumber */ "./src/components/ModuleNumber.jsx");




var PATTERN_NAMES = /([Mm]odul(?:e|s|en)?[ ])((?:bzw\.|(?!\. |\.$|ist |sind ).)+)|(.)/g;

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function detectModules(text, matchables) {
  if (typeof text === "string") {
    text = [text];
  }

  var matchablesPattern = matchables.sort(function (a, b) {
    return b.length - a.length;
  }).map(function (item) {
    return escapeRegExp(item);
  }).join("|");
  var modulePattern = new RegExp("(".concat(matchablesPattern, ")|(.)"), "gi");
  var UNDEFINED_ELEMENT = {
    "type": -1,
    "value": null
  };
  var elements = [];
  text.forEach(function (part) {
    if (typeof part !== "string") {
      elements.push({
        "type": 3,
        // other / unknown
        "value": part
      });
      return;
    }

    part.replace(PATTERN_NAMES, function (_1, prefix, match, other) {
      var lastIndex = elements.length - 1;
      var lastElement = elements[lastIndex] || UNDEFINED_ELEMENT;

      if (other != null) {
        // first entry or last entry was not just a string
        if (lastElement.type !== 1) {
          // add string marked as string to list
          elements.push({
            "type": 1,
            // string
            "value": other
          });
          return;
        } // append string to last entry


        elements[lastIndex].value += other;
        return;
      } // first entry or last entry was not just a string


      if (lastElement.type !== 1) {
        // add prefix marked as string to list
        elements.push({
          "type": 1,
          // string
          "value": prefix
        });
      } else {
        // append prefix to last entry
        elements[lastIndex].value += prefix;
      }

      match.replace(modulePattern, function (_1, match, other) {
        var lastIndex = elements.length - 1;
        var lastElement = elements[lastIndex];

        if (other != null) {
          if (lastElement.type !== 1) {
            elements.push({
              "type": 1,
              // string
              "value": other
            });
            return;
          }

          elements[lastIndex].value += other;
          return;
        }

        elements.push({
          "type": 2,
          // module identifier (name or number)
          "value": match
        });
      });
    });
  });
  return elements;
}

function getModuleMatchables(modules) {
  var matchables = [];
  Object.values(modules).forEach(function (module) {
    matchables.push(module.module_name);
    module.module_numbers.forEach(function (number) {
      matchables.push(number);
    });
  });
  return matchables;
}

function toComponents(fragments, _ref) {
  var modules = _ref.modules;

  function getModule(value) {
    return Object.values(modules).find(function (module) {
      return module.module_numbers.includes(value) || module.module_name === value;
    });
  }

  return fragments.map(function (_ref2) {
    var type = _ref2.type,
        value = _ref2.value;

    if (type !== 2) {
      return value;
    }

    var module = getModule(value);

    if (!module) {
      return value;
    }

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/".concat(module.degree_program_id, "/").concat(module.module_numbers[0]),
      title: module.module_numbers[0],
      children: module.module_name
    });
  });
}

function LinkedModuleNumbers(_ref3) {
  var children = _ref3.children,
      modules = _ref3.modules;
  var matchables = getModuleMatchables(modules);
  var fragments = detectModules(children, matchables);
  var elements = toComponents(fragments, {
    modules: modules
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: elements.map(function (element, index) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: element
      }, index);
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (LinkedModuleNumbers);

/***/ }),

/***/ "./src/components/ModuleDependencyGraph.jsx":
/*!**************************************************!*\
  !*** ./src/components/ModuleDependencyGraph.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var vis_data_peer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vis-data/peer */ "./node_modules/vis-data/peer/index.js");
/* harmony import */ var components_VisNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/VisNetwork */ "./src/components/VisNetwork.jsx");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






function toNodes(modules) {
  return new vis_data_peer__WEBPACK_IMPORTED_MODULE_3__["DataSet"](modules.map(function (m) {
    return {
      "id": m.module_numbers[0],
      "label": m.module_name,
      "level": m.study_semester,
      "title": m.module_numbers[0]
    };
  }));
}

function toEdges(modules) {
  var edges = modules.reduce(function (accu, m_to) {
    var newEdges = m_to.required_modules.map(function (m_number_from) {
      return {
        "from": m_number_from,
        "to": m_to.module_numbers[0]
      };
    });
    return [].concat(_toConsumableArray(accu), _toConsumableArray(newEdges));
  }, []);
  edges = withoutRedundantEdges(edges);
  return new vis_data_peer__WEBPACK_IMPORTED_MODULE_3__["DataSet"](edges);
} // @todo add support for relations with a distance
// greater than 2


function withoutRedundantEdges(edges) {
  return edges.reduce(function (accu, edge, index) {
    var start = edge["to"],
        end = edge["from"];
    var es1 = edges.filter(function (e) {
      return e.from === end;
    });
    var es2 = edges.filter(function (e) {
      return e.to === start;
    });

    if (!es1.length || !es2.length) {
      return [].concat(_toConsumableArray(accu), [edge]);
    }

    var hasCommonNode = es1.some(function (e1) {
      return es2.findIndex(function (e2) {
        return e1.to === e2.from;
      }) !== -1;
    });

    if (hasCommonNode) {
      return accu;
    }

    return [].concat(_toConsumableArray(accu), [edge]);
  }, []);
}

var options = {
  "layout": {
    "hierarchical": {
      "enabled": true,
      "sortMethod": "directed",
      "edgeMinimization": false,
      "levelSeparation": 100,
      "nodeSpacing": 150
    }
  },
  "nodes": {
    "shape": "box",
    "widthConstraint": {
      "maximum": 150
    },
    "margin": 10
  },
  "edges": {
    "arrows": "to"
  },
  "interaction": {
    "dragView": false
  },
  "physics": false
};

function ModuleDependencyGraph(_ref) {
  var modules = _ref.modules,
      degreeProgramId = _ref.degreeProgramId;
  var network = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!network.current) {
      return;
    }

    network.current.on("doubleClick", function (evt) {
      var node = evt.nodes[0];

      if (node) {
        history.push("/".concat(degreeProgramId, "/").concat(node));
      }
    });
  }, [network.current]);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var nodes = toNodes(modules);
    var edges = toEdges(modules);
    return {
      nodes: nodes,
      edges: edges
    };
  }, [modules]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_VisNetwork__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data,
    options: options,
    ref: network
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ModuleDependencyGraph);

/***/ }),

/***/ "./src/components/ModuleDescription.jsx":
/*!**********************************************!*\
  !*** ./src/components/ModuleDescription.jsx ***!
  \**********************************************/
/*! exports provided: ModuleDescription, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleDescription", function() { return ModuleDescription; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModuleDescription_Applicability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModuleDescription/Applicability */ "./src/components/ModuleDescription/Applicability.jsx");
/* harmony import */ var _ModuleDescription_ContentsAndQualificationTargets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModuleDescription/ContentsAndQualificationTargets */ "./src/components/ModuleDescription/ContentsAndQualificationTargets.jsx");
/* harmony import */ var _ModuleDescription_Contents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModuleDescription/Contents */ "./src/components/ModuleDescription/Contents.jsx");
/* harmony import */ var _ModuleDescription_QualificationTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModuleDescription/QualificationTargets */ "./src/components/ModuleDescription/QualificationTargets.jsx");
/* harmony import */ var _ModuleDescription_CreditPointsAndGrades__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModuleDescription/CreditPointsAndGrades */ "./src/components/ModuleDescription/CreditPointsAndGrades.jsx");
/* harmony import */ var _ModuleDescription_Duration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModuleDescription/Duration */ "./src/components/ModuleDescription/Duration.jsx");
/* harmony import */ var _ModuleDescription_Frequency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModuleDescription/Frequency */ "./src/components/ModuleDescription/Frequency.jsx");
/* harmony import */ var _ModuleDescription_InvolvedProfessorships__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModuleDescription/InvolvedProfessorships */ "./src/components/ModuleDescription/InvolvedProfessorships.jsx");
/* harmony import */ var _ModuleDescription_ModuleCoordinator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModuleDescription/ModuleCoordinator */ "./src/components/ModuleDescription/ModuleCoordinator.jsx");
/* harmony import */ var _ModuleDescription_ModuleName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModuleDescription/ModuleName */ "./src/components/ModuleDescription/ModuleName.jsx");
/* harmony import */ var _ModuleDescription_ModuleNumbers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModuleDescription/ModuleNumbers */ "./src/components/ModuleDescription/ModuleNumbers.jsx");
/* harmony import */ var _ModuleDescription_RequirementsForAssignmentOfCreditPoints__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModuleDescription/RequirementsForAssignmentOfCreditPoints */ "./src/components/ModuleDescription/RequirementsForAssignmentOfCreditPoints.jsx");
/* harmony import */ var _ModuleDescription_RequirementsForParticipation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModuleDescription/RequirementsForParticipation */ "./src/components/ModuleDescription/RequirementsForParticipation.jsx");
/* harmony import */ var _ModuleDescription_TeachingAndLearningMethods__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ModuleDescription/TeachingAndLearningMethods */ "./src/components/ModuleDescription/TeachingAndLearningMethods.jsx");
/* harmony import */ var _ModuleDescription_Workload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ModuleDescription/Workload */ "./src/components/ModuleDescription/Workload.jsx");
/* harmony import */ var hooks_useModules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! hooks/useModules */ "./src/hooks/useModules.js");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















function getModulesByDegreeProgramId(modules, degreeProgramId) {
  return Object.entries(modules).reduce(function (accu, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (value.degree_program_id === degreeProgramId) {
      accu[key] = value;
    }

    return accu;
  }, {});
}

function ModuleDescription(_ref3) {
  var data = _ref3.data,
      degreeProgramId = _ref3.degreeProgramId;

  if (data == null) {
    return null;
  }

  var modules = getModulesByDegreeProgramId(Object(hooks_useModules__WEBPACK_IMPORTED_MODULE_17__["default"])().readAll(), degreeProgramId);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("dl", {
    className: "row",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_ModuleNumbers__WEBPACK_IMPORTED_MODULE_12__["default"], {
      items: data.module_numbers
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_ModuleName__WEBPACK_IMPORTED_MODULE_11__["default"], {
      text: data.module_name
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_ModuleCoordinator__WEBPACK_IMPORTED_MODULE_10__["default"], {
      text: data.module_coordinator
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_InvolvedProfessorships__WEBPACK_IMPORTED_MODULE_9__["default"], {
      items: data.involved_professorships
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_ContentsAndQualificationTargets__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: data.contents_and_qualification_targets
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_QualificationTargets__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: data.qualification_targets
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_Contents__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: data.contents
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_TeachingAndLearningMethods__WEBPACK_IMPORTED_MODULE_15__["default"], {
      items: data.teaching_and_learning_methods
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_RequirementsForParticipation__WEBPACK_IMPORTED_MODULE_14__["default"], {
      text: data.requirements_for_participation,
      modules: modules
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_Applicability__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: data.applicability,
      modules: modules
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_RequirementsForAssignmentOfCreditPoints__WEBPACK_IMPORTED_MODULE_13__["default"], {
      text: data.requirements_for_assignment_of_credit_points
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_CreditPointsAndGrades__WEBPACK_IMPORTED_MODULE_6__["default"], {
      text: data.credit_points_and_grades
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_Frequency__WEBPACK_IMPORTED_MODULE_8__["default"], {
      text: data.frequency
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_Workload__WEBPACK_IMPORTED_MODULE_16__["default"], {
      text: data.workload
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ModuleDescription_Duration__WEBPACK_IMPORTED_MODULE_7__["default"], {
      text: data.duration
    })]
  });
}

function compare(prevProps, nextProps) {
  var prevDegreeProgramId = prevProps.degreeProgramId;
  var nextDegreeProgramId = nextProps.degreeProgramId;
  var prevModuleNumbers = prevProps.data.module_numbers.join(",");
  var nextModuleNumbers = nextProps.data.module_numbers.join(",");
  return prevDegreeProgramId === nextDegreeProgramId && prevModuleNumbers === nextModuleNumbers;
}


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(ModuleDescription, compare));

/***/ }),

/***/ "./src/components/ModuleDescription/Applicability.jsx":
/*!************************************************************!*\
  !*** ./src/components/ModuleDescription/Applicability.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_LinkedModuleNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/LinkedModuleNumbers */ "./src/components/LinkedModuleNumbers.jsx");





function Applicability(_ref) {
  var text = _ref.text,
      modules = _ref.modules;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Verwendbarkeit"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_LinkedModuleNumbers__WEBPACK_IMPORTED_MODULE_2__["default"], {
        modules: modules,
        children: text
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Applicability);

/***/ }),

/***/ "./src/components/ModuleDescription/Contents.jsx":
/*!*******************************************************!*\
  !*** ./src/components/ModuleDescription/Contents.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function Contents(_ref) {
  var text = _ref.text;

  if (!text) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Inhalte"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: text
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Contents);

/***/ }),

/***/ "./src/components/ModuleDescription/ContentsAndQualificationTargets.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/ModuleDescription/ContentsAndQualificationTargets.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function ContentsAndQualificationTargets(_ref) {
  var text = _ref.text;

  if (!text) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Inhalte und Qualifikationsziele"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: text
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ContentsAndQualificationTargets);

/***/ }),

/***/ "./src/components/ModuleDescription/CreditPointsAndGrades.jsx":
/*!********************************************************************!*\
  !*** ./src/components/ModuleDescription/CreditPointsAndGrades.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function CreditPointsAndGrades(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Leistungspunkte und Noten"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: text
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (CreditPointsAndGrades);

/***/ }),

/***/ "./src/components/ModuleDescription/Duration.jsx":
/*!*******************************************************!*\
  !*** ./src/components/ModuleDescription/Duration.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function Duration(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Dauer des Moduls"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: text
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Duration);

/***/ }),

/***/ "./src/components/ModuleDescription/Frequency.jsx":
/*!********************************************************!*\
  !*** ./src/components/ModuleDescription/Frequency.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function Frequency(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "H\xE4ufigkeit des Moduls"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: text
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Frequency);

/***/ }),

/***/ "./src/components/ModuleDescription/InvolvedProfessorships.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/ModuleDescription/InvolvedProfessorships.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useProfessorships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useProfessorships */ "./src/hooks/useProfessorships.js");





function InvolvedProfessorships(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items;

  var _useProfessorships$re = Object(hooks_useProfessorships__WEBPACK_IMPORTED_MODULE_2__["default"])().readAll(),
      status = _useProfessorships$re.status,
      value = _useProfessorships$re.value;

  function findProfessorship(name) {
    return value.find(function (prof) {
      return prof.name === name;
    });
  }

  if (!items || items.length === 0) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Beteiligte Professuren"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
        className: "mb-0",
        children: items.map(function (item, index) {
          if (status !== "resolved") {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: item
            }, index);
          }

          var profs = findProfessorship(item);

          if (!profs) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: item
            }, index);
          }

          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: profs.url,
              target: "_blank",
              children: item
            })
          }, index);
        })
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (InvolvedProfessorships);

/***/ }),

/***/ "./src/components/ModuleDescription/ModuleCoordinator.jsx":
/*!****************************************************************!*\
  !*** ./src/components/ModuleDescription/ModuleCoordinator.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function linkEmailAddresses(parts) {
  if (typeof parts === "string") {
    return linkEmailAddresses([parts]);
  }

  var elements = [];
  parts.forEach(function (part) {
    if (typeof part !== "string") {
      elements.push(part);
      return;
    }

    part.replace(/([a-zA-Z0-9.-_]+@[a-z0-9-_.]+)|(.)/g, function (_1, mail, other) {
      var lastIndex = elements.length - 1;
      var lastElement = elements[lastIndex];

      if (mail !== undefined) {
        elements.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "mailto:" + mail,
          children: mail
        }));
        return;
      }

      if (typeof lastElement === "string") {
        elements[lastIndex] += other;
      } else {
        elements.push(other);
      }
    });
  });
  return elements;
}

function linkWebsites(parts) {
  if (typeof parts === "string") {
    return linkWebsites([parts]);
  }

  var elements = [];
  parts.forEach(function (part) {
    if (typeof part !== "string") {
      elements.push(part);
      return;
    }

    part.replace(/(https?:\/\/[^ \)\]]+)|(.)/g, function (_1, url, other) {
      var lastIndex = elements.length - 1;
      var lastElement = elements[lastIndex];

      if (url !== undefined) {
        var visibleUrl = url.replace(/^https?:\/\//, "");
        elements.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: url,
          target: "_blank",
          rel: "noopener noreferrer",
          children: visibleUrl
        }));
        return;
      }

      if (typeof lastElement === "string") {
        elements[lastIndex] += other;
      } else {
        elements.push(other);
      }
    });
  });
  return elements;
}

function ModuleCoordinator(_ref) {
  var text = _ref.text;
  var elements = linkEmailAddresses(linkWebsites(text));
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Modulverantwortlicher"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: elements.map(function (element, index) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: element
        }, index);
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ModuleCoordinator);

/***/ }),

/***/ "./src/components/ModuleDescription/ModuleName.jsx":
/*!*********************************************************!*\
  !*** ./src/components/ModuleDescription/ModuleName.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function ModuleName(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Modulname"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: text
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ModuleName);

/***/ }),

/***/ "./src/components/ModuleDescription/ModuleNumbers.jsx":
/*!************************************************************!*\
  !*** ./src/components/ModuleDescription/ModuleNumbers.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function ModuleNumbers(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Modulnummer"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
        className: "pl-0 mb-0",
        style: {
          "listStyle": "none"
        },
        children: items.map(function (number, i) {
          if (i === 0) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
                children: number
              })
            }, i);
          }

          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: number
          }, i);
        })
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ModuleNumbers);

/***/ }),

/***/ "./src/components/ModuleDescription/QualificationTargets.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/ModuleDescription/QualificationTargets.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function QualificationTargets(_ref) {
  var text = _ref.text;

  if (!text) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Qualifikationsziele"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: text
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (QualificationTargets);

/***/ }),

/***/ "./src/components/ModuleDescription/RequirementsForAssignmentOfCreditPoints.jsx":
/*!**************************************************************************************!*\
  !*** ./src/components/ModuleDescription/RequirementsForAssignmentOfCreditPoints.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function RequirementsForAssignmentOfCreditPoints(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Voraussetzungen f\xFCr die Vergabe von Leistungspunkten"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: text
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (RequirementsForAssignmentOfCreditPoints);

/***/ }),

/***/ "./src/components/ModuleDescription/RequirementsForParticipation.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/ModuleDescription/RequirementsForParticipation.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_LinkedModuleNumbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/LinkedModuleNumbers */ "./src/components/LinkedModuleNumbers.jsx");





function RequirementsForParticipation(_ref) {
  var text = _ref.text,
      modules = _ref.modules;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Voraussetzungen f\xFCr die Teilnahme"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_LinkedModuleNumbers__WEBPACK_IMPORTED_MODULE_2__["default"], {
        modules: modules,
        children: text || "–"
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (RequirementsForParticipation);

/***/ }),

/***/ "./src/components/ModuleDescription/TeachingAndLearningMethods.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/ModuleDescription/TeachingAndLearningMethods.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function TeachingAndLearningMethods(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Lehr- und Lernformen"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
        className: "mb-0",
        children: items.map(function (item, i) {
          if (item.extent) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: item.name
              }), " (", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: item.extent
              }), ")"]
            }, i);
          }

          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: item.name
            })
          }, i);
        })
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (TeachingAndLearningMethods);

/***/ }),

/***/ "./src/components/ModuleDescription/Workload.jsx":
/*!*******************************************************!*\
  !*** ./src/components/ModuleDescription/Workload.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function Workload(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dt", {
      className: "col-12",
      children: "Arbeitsaufwand"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("dd", {
      className: "col-12",
      children: text
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Workload);

/***/ }),

/***/ "./src/components/ModuleNumber.jsx":
/*!*****************************************!*\
  !*** ./src/components/ModuleNumber.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function ModuleNumber(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
    className: "text-nowrap",
    children: children
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ModuleNumber);

/***/ }),

/***/ "./src/components/VisNetwork.jsx":
/*!***************************************!*\
  !*** ./src/components/VisNetwork.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vis_network_peer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vis-network/peer */ "./node_modules/vis-network/peer/index.js");



var VisNetwork = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function VisNetwork(_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  var container = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var network = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!network.current) {
      return;
    }

    network.current.setOptions(options);
  }, [network.current, options]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!network.current) {
      return;
    }

    network.current.setData(data);
  }, [network.current, data]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!container.current) {
      return;
    }

    network.current = new vis_network_peer__WEBPACK_IMPORTED_MODULE_2__["Network"](container.current, data, options);
    ref.current = network.current;
    return function () {
      if (!network.current) {
        return;
      }

      network.current.destroy();
      network.current = null;
      ref.current = null;
    };
  }, [container.current]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    ref: container,
    children: children
  });
});
/* harmony default export */ __webpack_exports__["default"] = (VisNetwork);

/***/ }),

/***/ "./src/hooks/useProfessorships.js":
/*!****************************************!*\
  !*** ./src/hooks/useProfessorships.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/hooks/helpers.js");


var useProfessorships = Object(zustand__WEBPACK_IMPORTED_MODULE_0__["default"])(function (set, get) {
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

      var promise = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["fetchJSON"])("/data/professorships.json").then(function (professorships) {
        set({
          "items": professorships,
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
/* harmony default export */ __webpack_exports__["default"] = (useProfessorships);

/***/ }),

/***/ "./src/scenes/ModuleDescriptionPage.jsx":
/*!**********************************************!*\
  !*** ./src/scenes/ModuleDescriptionPage.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_ModuleDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ModuleDescription */ "./src/components/ModuleDescription.jsx");
/* harmony import */ var hooks_useDegreePrograms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/useDegreePrograms */ "./src/hooks/useDegreePrograms.js");







function ModuleDescriptionPage() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      degreeProgramId = _useParams.degreeProgramId,
      moduleId = _useParams.moduleId;

  var _useDegreePrograms$re = Object(hooks_useDegreePrograms__WEBPACK_IMPORTED_MODULE_4__["default"])().readAll(degreeProgramId),
      status = _useDegreePrograms$re.status,
      value = _useDegreePrograms$re.value;

  function findModule(number) {
    if (!value[degreeProgramId]) {
      return null;
    }

    var modules = value[degreeProgramId].modules;
    return modules.find(function (mod) {
      return mod.module_numbers[0] === number;
    });
  }

  if (status !== "resolved") {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/timetable/".concat(degreeProgramId, "/").concat(moduleId),
          children: "Aktuelle Veranstaltungen f\xFCr dieses Modul"
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_ModuleDescription__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: findModule(moduleId),
      degreeProgramId: degreeProgramId
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ModuleDescriptionPage);

/***/ }),

/***/ "./src/scenes/ModuleOverviewPage.jsx":
/*!*******************************************!*\
  !*** ./src/scenes/ModuleOverviewPage.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var components_ModuleDependencyGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ModuleDependencyGraph */ "./src/components/ModuleDependencyGraph.jsx");
/* harmony import */ var components_DegreeProgrameSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/DegreeProgrameSelect */ "./src/components/DegreeProgrameSelect.jsx");
/* harmony import */ var components_ModuleSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ModuleSelect */ "./src/components/ModuleSelect.jsx");
/* harmony import */ var hooks_useDegreePrograms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useDegreePrograms */ "./src/hooks/useDegreePrograms.js");
/* harmony import */ var scenes_ModuleDescriptionPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scenes/ModuleDescriptionPage */ "./src/scenes/ModuleDescriptionPage.jsx");











function ModuleFilter() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      _useParams$degreeProg = _useParams.degreeProgramId,
      degreeProgramId = _useParams$degreeProg === void 0 ? "" : _useParams$degreeProg,
      _useParams$moduleId = _useParams.moduleId,
      moduleId = _useParams$moduleId === void 0 ? "" : _useParams$moduleId;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useDegreePrograms$re = Object(hooks_useDegreePrograms__WEBPACK_IMPORTED_MODULE_7__["default"])().readAll(),
      status = _useDegreePrograms$re.status,
      value = _useDegreePrograms$re.value;

  function selectDegreeProgram(degreeProgramId) {
    history.push("/".concat(degreeProgramId));
  }

  function selectModule(moduleId) {
    history.push("/".concat(degreeProgramId, "/").concat(moduleId));
  }

  var isReady = status === "resolved";
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "row",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_DegreeProgrameSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disabled: !isReady,
        onChange: selectDegreeProgram,
        currentItemId: degreeProgramId,
        items: value
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_ModuleSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
        disabled: !isReady || !degreeProgramId,
        onChange: selectModule,
        currentItemId: moduleId || "all",
        includeAllOption: false,
        items: value[degreeProgramId] && value[degreeProgramId].modules
      })]
    })
  });
}

function ModuleDependencies() {
  var _useParams2 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      degreeProgramId = _useParams2.degreeProgramId;

  var _useDegreePrograms$re2 = Object(hooks_useDegreePrograms__WEBPACK_IMPORTED_MODULE_7__["default"])().readAll(),
      status = _useDegreePrograms$re2.status,
      value = _useDegreePrograms$re2.value;

  if (!degreeProgramId || status !== "resolved") {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_ModuleDependencyGraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modules: value[degreeProgramId].modules,
    degreeProgramId: degreeProgramId
  });
}

function ModuleOverviewPage() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useParams3 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      moduleId = _useParams3.moduleId;

  function selectProgram(evt) {
    history.push("/".concat(evt.target.value));
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
          children: "Modul\xFCbersicht"
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: ["/:degreeProgramId/:moduleId", "/:degreeProgramId", "/"],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ModuleFilter, {})
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
      fallback: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Seite wird geladen ..."
      }),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/:degreeProgramId",
          exact: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ModuleDependencies, {})
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/:degreeProgramId/:moduleId",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(scenes_ModuleDescriptionPage__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        })]
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ModuleOverviewPage);

/***/ })

}]);
//# sourceMappingURL=modules.a037.js.map