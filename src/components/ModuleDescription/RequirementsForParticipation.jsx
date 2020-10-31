import {
  Fragment
} from "react";
import LinkedModuleNumbers from "components/LinkedModuleNumbers";

function RequirementsForParticipation({
  text,
  modules
}) {
  return (
    <Fragment>
      <dt className="col-12">Voraussetzungen für die Teilnahme</dt>
      <dd className="col-12">
        <LinkedModuleNumbers
          modules={ modules }
        >{ text || "–" }</LinkedModuleNumbers>
      </dd>
    </Fragment>
  );
}

export default RequirementsForParticipation;
