import React, {
  Fragment
} from "react";
import useProfessorships from "hooks/useProfessorships";

function InvolvedProfessorships({
  items = []
}) {
  const {
    status,
    value
  } = useProfessorships().read();

  function findProfessorship( name ) {
    return value.find(( prof ) => (
      prof.name === name
    ));
  }

  return (
    <Fragment>
      <dt className="col-12">Beteiligte Professuren</dt>
      <dd className="col-12">
        <ul className="mb-0">
        {
          items.map((item) => {
            const profs = findProfessorship( item );

            if ( !profs || status !== "resolved" ) {
              return (
                <li>{item}</li>
              );
            }

            return (
              <li><a href={profs.url} target="_blank">{item}</a></li>
            );
          })
        }
        </ul>
      </dd>
    </Fragment>
  );
}

export default InvolvedProfessorships;
