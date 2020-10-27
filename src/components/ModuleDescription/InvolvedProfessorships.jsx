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

  if ( !items || items.length === 0 ) {
    return null;
  }

  return (
    <Fragment>
      <dt className="col-12">Beteiligte Professuren</dt>
      <dd className="col-12">
        <ul className="mb-0">
        {
          items.map((item, index) => {
            if ( status !== "resolved" ) {
              return (
                <li key={ index }>{item}</li>
              );
            }

            const profs = findProfessorship( item );

            if ( !profs ) {
              return (
                <li key={ index }>{item}</li>
              );
            }

            return (
              <li key={ index }>
                <a href={profs.url} target="_blank">{item}</a>
              </li>
            );
          })
        }
        </ul>
      </dd>
    </Fragment>
  );
}

export default InvolvedProfessorships;
