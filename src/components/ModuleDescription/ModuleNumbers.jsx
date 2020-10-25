import React, {
  Fragment
} from "react";

function ModuleNumbers({
  items = []
}) {
  return (
    <Fragment>
      <dt className="col-12">Modulnummer</dt>
      <dd className="col-12">
        <ul className="pl-0 mb-0" style={{ "listStyle": "none" }}>
        {
          items.map((number, i) => {
            if ( i === 0 ) {
              return (
                <li><b>{number}</b></li>
              );
            }

            return (
              <li>{number}</li>
            );
          })
        }
        </ul>
      </dd>
    </Fragment>
  );
}

export default ModuleNumbers;
