import {
  Fragment
} from "react";
import LinkedModuleNumbers from "components/LinkedModuleNumbers";

function Applicability({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Verwendbarkeit</dt>
      <dd className="col-12">
        <LinkedModuleNumbers>{ text }</LinkedModuleNumbers>
      </dd>
    </Fragment>
  );
}

export default Applicability;
