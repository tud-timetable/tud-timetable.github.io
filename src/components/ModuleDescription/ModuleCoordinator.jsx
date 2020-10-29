import React, {
  Fragment
} from "react";

function linkEmailAddresses( parts ) {
  if ( typeof parts === "string" ) {
    return linkEmailAddresses([ parts ]);
  }

  const elements = [];

  parts.forEach((part) => {
    if ( typeof part !== "string" ) {
      elements.push( part );
      return;
    }

    part.replace(
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
        } else {
          elements.push( other );
        }
      });
  });

  return elements;
}

function linkWebsites( parts ) {
  if ( typeof parts === "string" ) {
    return linkWebsites([ parts ]);
  }

  const elements = [];

  parts.forEach((part) => {
    if ( typeof part !== "string" ) {
      elements.push( part );
      return;
    }

    part.replace(
      /(https?:\/\/[^ \)\]]+)|(.)/g,
      (_1, url, other) => {
        const lastIndex = elements.length - 1;
        const lastElement = elements[ lastIndex ];

        if ( url !== undefined ) {
          elements.push(
            <a href={ url }>{ url }</a>
          );
          return;
        }

        if ( typeof lastElement === "string" ) {
          elements[ lastIndex ] += other;
        } else {
          elements.push( other );
        }
      });
  });

  return elements;
}

function ModuleCoordinator({
  text
}) {
  const elements = (
    linkEmailAddresses(
      linkWebsites(
        text
      )
    )
  );

  return (
    <Fragment>
      <dt className="col-12">Modulverantwortlicher</dt>
      <dd className="col-12">
      {
        elements.map((element, index) => (
          <Fragment key={ index }>{ element }</Fragment>
        ))
      }
      </dd>
    </Fragment>
  );
}

export default ModuleCoordinator;
