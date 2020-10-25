import React, {
  Fragment
} from "react";

function RequiredModules({
  items = []
}) {
  if ( items.length === 0 ) {
    return (
      <Fragment>
        <dt className="col-12">Vorausgesetzte Module</dt>
        <dd className="col-12">–</dd>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <dt className="col-12">Vorausgesetzte Module</dt>
      <dd className="col-12">
        <ul className="mb-0">
        {
          items.map(( item ) => (
            <li>{ item }</li>
          ))
        }
        </ul>
      </dd>
    </Fragment>
  );
}

export default RequiredModules;
