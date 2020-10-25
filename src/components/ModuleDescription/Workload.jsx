import React, {
  Fragment
} from "react";

function Workload({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Arbeitsaufwand</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default Workload;
