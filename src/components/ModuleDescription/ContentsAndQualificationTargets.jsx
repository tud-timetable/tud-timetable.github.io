import {
  Fragment
} from "react";

function ContentsAndQualificationTargets({
  text
}) {
  if ( !text ) {
    return null;
  }

  return (
    <Fragment>
      <dt className="col-12">Inhalte und Qualifikationsziele</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default ContentsAndQualificationTargets;
