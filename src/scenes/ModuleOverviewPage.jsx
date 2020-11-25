import {
  Suspense,
  Fragment
} from "react";
import {
  Route,
  Switch,
  useHistory,
  useParams
} from "react-router-dom";
import ModuleDependencyGraph from "components/ModuleDependencyGraph";
import DegreeProgrameSelect from "components/DegreeProgrameSelect";
import ModuleSelect from "components/ModuleSelect";
import useDegreePrograms from "hooks/useDegreePrograms";
import ModuleDescriptionPage from "scenes/ModuleDescriptionPage";

function ModuleFilter() {
  const { degreeProgramId = "", moduleId = "" } = useParams();
  const history = useHistory();
  const { status, value } = useDegreePrograms().readAll();

  function selectDegreeProgram( degreeProgramId ) {
    history.push(
      `/${ degreeProgramId }`
    );
  }

  function selectModule( moduleId ) {
    history.push(
      `/${ degreeProgramId }/${ moduleId }`
    );
  }

  const isReady = (
    status === "resolved"
  );

  return (
    <div className="row">
      <div className="col">
        <DegreeProgrameSelect
          disabled={ !isReady }
          onChange={ selectDegreeProgram }
          currentItemId={ degreeProgramId }
          items={ value }
        />
        <ModuleSelect
          disabled={ !isReady || !degreeProgramId }
          onChange={ selectModule }
          currentItemId={ moduleId  }
          includeAllOption={ false }
          items={ value[ degreeProgramId ] && value[ degreeProgramId ].modules }
        />
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
    <Fragment>
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
        <ModuleFilter />
      </Route>
      <Suspense fallback={<p>Seite wird geladen ...</p>}>
        <Switch>
          <Route path="/:degreeProgramId" exact>
            <ModuleDependencies />
          </Route>
          <Route path="/:degreeProgramId/:moduleId">
            <ModuleDescriptionPage />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default ModuleOverviewPage;
