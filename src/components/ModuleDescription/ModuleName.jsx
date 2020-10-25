import React, {
  Fragment
} from "react";

function ModuleName({
  text
}) {
  return (
    <Fragment>
      <dt className="col-12">Modulname</dt>
      <dd className="col-12">{ text }</dd>
    </Fragment>
  );
}

export default ModuleName;
