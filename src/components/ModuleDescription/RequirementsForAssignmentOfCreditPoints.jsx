import {
  Fragment
} from "react";

function RequirementsForAssignmentOfCreditPoints({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Voraussetzungen für die Vergabe von Leistungspunkten</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default RequirementsForAssignmentOfCreditPoints;
