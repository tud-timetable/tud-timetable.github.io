import React, {
  Fragment
} from "react";

function ModuleCoordinator({
  data
}) {
  const elements = [];

  data.replace(
    /([a-zA-Z0-9.-_]+@[a-z0-9-_.]+)|(.)/g,
    (_1, mail, other) => {
      const lastIndex = elements.length - 1;
      const lastElement = elements[ lastIndex ];

      if ( mail !== undefined ) {
        elements.push(
          <a href={ "mailto:" + mail }>{ mail }</a>
        );
        return;
      }

      if ( typeof lastElement === "string" ) {
        elements[ lastIndex ] += other;
      }
    }
  );

  return (
    <Fragment>
      <dt className="col-12">Modulverantwortlicher</dt>
      <dd className="col-12">{ elements }</dd>
    </Fragment>
  );
}

export default ModuleCoordinator;
