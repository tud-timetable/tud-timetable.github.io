import React, {
  Fragment
} from "react";

function Applicability({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Verwendbarkeit</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default Applicability;
