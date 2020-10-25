import React, {
  Fragment
} from "react";

function TeachingAndLearningMethods({
  items = []
}) {
  return (
    <Fragment>
      <dt className="col-12">Lehr- und Lernformen</dt>
      <dd className="col-12">
        <ul className="mb-0">
        {
          items.map((item) => {
            if ( item.extent ) {
              return (
                <li>
                  <span>{item.name}</span> (<span>{item.extent}</span>)
                </li>
              );
            }

            return (
              <li>
                <span>{item.name}</span>
              </li>
            );
          })
        }
        </ul>
      </dd>
    </Fragment>
  );
}

export default TeachingAndLearningMethods;
