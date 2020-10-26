import React, {
  useState
} from "react";
import {
  Route,
  useHistory
} from "react-router-dom";
import Layout from "components/Layout";
import useDegreePrograms from "hooks/useDegreePrograms";
import ModuleDescriptionPage from "scenes/ModuleDescriptionPage";

function App() {
  const history = useHistory();
  const [ degreeProgramId, setDegreeProgramId ] = useState( "" );
  const [ moduleId, setModuleId ] = useState( "" );
  const { status, value } = useDegreePrograms().read();

  function selectDegreeProgram(evt) {
    setDegreeProgramId( evt.target.value );
    history.push(
      `/${ evt.target.value }`
    );
  }

  function selectModule(evt) {
    setModuleId( evt.target.value );
    history.push(
      `/${ degreeProgramId }/${ evt.target.value }`
    );
  }

  const isReady = (
    status === "resolved"
  );

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Modulübersicht</h1>
        </div>
      </div>
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
                  Object.keys( value ).map((id) => {
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
              disabled={ !isReady }
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
      <Route path="/:degreeProgramId/:moduleId">
        <ModuleDescriptionPage />
      </Route>
    </Layout>
  );
}

export default App;
