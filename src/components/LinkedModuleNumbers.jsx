import React, {
  Fragment
} from "react";
import {
  Link
} from "react-router-dom";
import ModuleNumber from "components/ModuleNumber";

function LinkedModuleNumbers({
  children,
  modules
}) {
  const elements = [];

  children.replace(
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
