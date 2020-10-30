import {
  Fragment
} from "react";

function QualificationTargets({
  text
}) {
  if ( !text ) {
    return null;
  }

  return (
    <Fragment>
      <dt className="col-12">Qualifikationsziele</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default QualificationTargets;
