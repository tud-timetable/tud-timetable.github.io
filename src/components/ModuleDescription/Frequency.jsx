import React, {
  Fragment
} from "react";

function Frequency({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Häufigkeit des Moduls</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default Frequency;
