import React, {
  Fragment
} from "react";
import {
  Link
} from "react-router-dom";
import ModuleNumber from "components/ModuleNumber";

function detectModulesByNumber(text, { modules }) {
  const elements = [];

  if ( typeof text === "string" ) {
    text = [ text ];
  }

  text.forEach((part) => {
    part.replace(
      /([A-ZÄÖÜ0-9]+-[A-ZÄÖÜ0-9]+(-[A-ZÄÖÜ0-9]+)+)|(.)/g,
      (_1, number, _2, other) => {
        const lastIndex = elements.length - 1;
        const lastElement = elements[ lastIndex ];

        if ( number !== undefined ) {
          elements.push(
            <Link to={ number }>
              <ModuleNumber>{ number }</ModuleNumber>
            </Link>
          );
          return;
        }

        if ( typeof lastElement === "string" ) {
          elements[ lastIndex ] += other;
        } else {
          elements.push( other );
        }
      }
    );
  });

  return elements;
}

function detectModulesByName(text, { modules }) {
  // @todo
}

function LinkedModuleNumbers({
  children,
  modules
}) {
  const elements = detectModulesByNumber(
    children,
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
