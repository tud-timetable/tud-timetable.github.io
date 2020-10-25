import React, {
  Fragment
} from "react";

function CreditPointsAndGrades({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Leistungspunkte und Noten</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default CreditPointsAndGrades;
