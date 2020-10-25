import React, {
  Fragment
} from "react";

function RequirementsForParticipation({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Voraussetzungen für die Teilnahme</dt>
      <dd className="col-12">{ text || "–" }</dd>
    </Fragment>
  );
}

export default RequirementsForParticipation;
