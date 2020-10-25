import React, {
  Fragment
} from "react";
import {
  Link
} from "react-router-dom";

function RequiredModules({
  items = [],
  degreeProgramId
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
            <li key={ item }>
              <Link to={ `/${degreeProgramId}/${item}` }>{ item }</Link>
            </li>
          ))
        }
        </ul>
      </dd>
    </Fragment>
  );
}

export default RequiredModules;
