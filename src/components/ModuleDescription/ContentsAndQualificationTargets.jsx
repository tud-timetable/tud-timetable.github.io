import React, {
  Fragment
} from "react";

function ContentsAndQualificationTargets({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Inhalte und Qualifikationsziele</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default ContentsAndQualificationTargets;
