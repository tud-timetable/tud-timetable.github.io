import React, {
  Fragment
} from "react";

function Duration({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Dauer des Moduls</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default Duration;
