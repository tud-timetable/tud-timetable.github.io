import {
  Route,
  useHistory,
  useParams
} from "react-router-dom";
import Layout from "components/Layout";
import ModuleDependencyGraph from "components/ModuleDependencyGraph";
import useDegreePrograms from "hooks/useDegreePrograms";
import ModuleDescriptionPage from "scenes/ModuleDescriptionPage";

function sortDegreeProgrames( degreeProgrames ) {
  return (a, b) => {
    const nameA = degreeProgrames[ a ].name;
    const nameB = degreeProgrames[ b ].name;

    return nameA.localeCompare( nameB );
  };
}

function ModuleSelect() {
  const { degreeProgramId = "", moduleId = "" } = useParams();
  const history = useHistory();
  const { status, value } = useDegreePrograms().readAll();

  function selectDegreeProgram( evt ) {
    history.push(
      `/${ evt.target.value }`
    );
  }

  function selectModule( evt ) {
    history.push(
      `/${ degreeProgramId }/${ evt.target.value }`
    );
  }

  const isReady = (
    status === "resolved"
  );

  return (
    <div className="row">
      <div className="col">
        <div className="form-group">
          <select
            className="form-control"
            onChange={ selectDegreeProgram }
            disabled={ !isReady }
            value={ degreeProgramId }
          >
            <option disabled value="">Studiengang auswählen</option>
            {
              isReady && (
                Object
                  .keys( value )
                  .sort( sortDegreeProgrames( value ) )
                  .map((id) => {
                    const program = value[ id ];

                    return (
                      <option
                        value={ program.id }
                        key={ program.id }
                      >{ program.name }</option>
                    );
                  })
              )
            }
          </select>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            disabled={ !isReady || !degreeProgramId }
            onChange={ selectModule }
            value={ moduleId }
          >
            <option disabled value="">Modul auswählen</option>
            {
              (isReady && value[ degreeProgramId ]) && (
                value[ degreeProgramId ].modules.map((m) => (
                  <option
                    value={m.module_numbers[0]}
                    key={m.module_numbers[0]}
                  >
                    {m.module_name}
                  </option>
                ))
              )
            }
          </select>
        </div>
      </div>
    </div>
  );
}

function ModuleDependencies() {
  const { degreeProgramId } = useParams();
  const { status, value } = useDegreePrograms().readAll();

  if ( !degreeProgramId || status !== "resolved" ) {
    return null;
  }

  return (
    <ModuleDependencyGraph
      modules={ value[ degreeProgramId ].modules }
      degreeProgramId={ degreeProgramId }
    />
  );
}

function ModuleOverviewPage() {
  const history = useHistory();
  const { moduleId } = useParams();

  function selectProgram(evt) {
    history.push(
      `/${ evt.target.value }`
    );
  }

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Modulübersicht</h1>
        </div>
      </div>
      <Route path={[
        "/:degreeProgramId/:moduleId",
        "/:degreeProgramId",
        "/"
      ]}>
        <ModuleSelect />
      </Route>
      <Route path="/:degreeProgramId" exact>
        <ModuleDependencies />
      </Route>
      <Route path="/:degreeProgramId/:moduleId">
        <ModuleDescriptionPage />
      </Route>
    </Layout>
  );
}

export default ModuleOverviewPage;
