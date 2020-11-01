import {
  Fragment
} from "react";
import {
  Link
} from "react-router-dom";
import ModuleNumber from "components/ModuleNumber";

const PATTERN_NAMES = /([Mm]odul(?:e|s|en)?[ ])((?:bzw\.|(?!\. |\.$|ist |sind ).)+)|(.)/g;

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function detectModules(text, matchables) {
  if ( typeof text === "string" ) {
    text = [ text ];
  }

  const matchablesPattern = (
    matchables
      .sort((a, b) => b.length - a.length)
      .map((item) => escapeRegExp(item))
      .join("|")
  );

  const modulePattern = new RegExp(
    `(${ matchablesPattern })|(.)`,
    "gi"
  );

  const UNDEFINED_ELEMENT = {
    "type": -1,
    "value": null,
  };

  const elements = [];

  text.forEach((part) => {
    if ( typeof part !== "string" ) {
      elements.push({
        "type": 3, // other / unknown
        "value": part,
      });
      return;
    }

    part.replace(PATTERN_NAMES, (_1, prefix, match, other) => {
      let lastIndex = elements.length - 1;
      let lastElement = elements[ lastIndex ] || UNDEFINED_ELEMENT;

      if ( other != null ) {
        // first entry or last entry was not just a string
        if ( lastElement.type !== 1 ) {
          // add string marked as string to list
          elements.push({
            "type": 1, // string
            "value": other,
          });
          return;
        }

        // append string to last entry
        elements[ lastIndex ].value += other;
        return;
      }

      // first entry or last entry was not just a string
      if ( lastElement.type !== 1 ) {
        // add prefix marked as string to list
        elements.push({
          "type": 1, // string
          "value": prefix,
        });
      } else {
        // append prefix to last entry
        elements[ lastIndex ].value += prefix;
      }

      match.replace(modulePattern, (_1, match, other) => {
        let lastIndex = elements.length - 1;
        let lastElement = elements[ lastIndex ];

        if ( other != null ) {
          if ( lastElement.type !== 1 ) {
            elements.push({
              "type": 1, // string
              "value": other,
            });
            return;
          }

          elements[ lastIndex ].value += other;
          return;
        }

        elements.push({
          "type": 2, // module identifier (name or number)
          "value": match,
        });
      });
    });
  });

  return elements;
}

function getModuleMatchables(modules) {
  const matchables = [];

  Object.values(modules).forEach((module) => {
    matchables.push(module.module_name);

    module.module_numbers.forEach((number) => {
      matchables.push(number);
    });
  });

  return matchables;
}

function toComponents(fragments, { modules }) {
  function getModule( value ) {
    return Object.values( modules ).find((module) => (
      module.module_numbers.includes( value )
        || module.module_name === value
    ));
  }

  return fragments.map(({ type, value }) => {
    if ( type !== 2 ) {
      return value;
    }

    const module = getModule( value );

    if ( !module ) {
      return value;
    }

    return (
      <Link to={ `/${ module.degree_program_id }/${ module.module_numbers[0] }`}>
        { module.module_name }
      </Link>
    );
  });
}

function LinkedModuleNumbers({
  children,
  modules
}) {
  const matchables = getModuleMatchables(
    modules
  );

  const fragments = detectModules(
    children,
    matchables
  );

  const elements = toComponents(
    fragments,
    { modules }
  );

  return (
    <Fragment>
    {
      elements.map((element, index) => (
        <Fragment key={ index }>{ element }</Fragment>
      ))
    }
    </Fragment>
  );
}

export default LinkedModuleNumbers;
