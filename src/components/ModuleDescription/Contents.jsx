import {
  Fragment
} from "react";

function Contents({
  text
}) {
  if ( !text ) {
    return null;
  }

  return (
    <Fragment>
      <dt className="col-12">Inhalte</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default Contents;
