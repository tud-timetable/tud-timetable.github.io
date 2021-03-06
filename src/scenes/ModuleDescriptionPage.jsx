import {
  Fragment
} from "react";
import {
  Link,
  useParams
} from "react-router-dom";
import ModuleDescription from "components/ModuleDescription";
import useDegreePrograms from "hooks/useDegreePrograms";

function ModuleDescriptionPage() {
  const { degreeProgramId, moduleId } = useParams();
  const { status, value } = useDegreePrograms().readAll( degreeProgramId );

  function findModule( number ) {
    if ( !value[ degreeProgramId ] ) {
      return null;
    }

    const { modules } = value[ degreeProgramId ];

    return modules.find((mod) => (
      mod.module_numbers[0] === number
    ));
  }

  if ( status !== "resolved" ) {
    return null;
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <Link to={`/timetable/${degreeProgramId}/${moduleId}`}>
          Aktuelle Veranstaltungen für dieses Modul
          </Link>
        </div>
      </div>
      <ModuleDescription
        data={
          findModule( moduleId )
        }
        degreeProgramId={ degreeProgramId }
      />
    </Fragment>
  );
}

export default ModuleDescriptionPage;
