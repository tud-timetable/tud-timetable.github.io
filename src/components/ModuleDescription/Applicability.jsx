import {
  Fragment
} from "react";
import LinkedModuleNumbers from "components/LinkedModuleNumbers";

function Applicability({
  text,
  modules
}) {
  return (
    <Fragment>
      <dt className="col-12">Verwendbarkeit</dt>
      <dd className="col-12">
        <LinkedModuleNumbers
          modules={ modules }
        >{ text }</LinkedModuleNumbers>
      </dd>
    </Fragment>
  );
}

export default Applicability;
