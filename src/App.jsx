import React, {
  useState,
  useEffect
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
  const [ degreeProgramId, setDegreeProgramId ] = useState(null);
  const [ module, setModule ] = useState(null);
  const { status, value } = useDegreePrograms().read();

  useEffect(() => {
    if ( status === "resolved" ) {
      const program = Object.keys( value )[0];

      setDegreeProgramId(
        program
      );

      setModule(
        value[ program ].modules[0].module_numbers[0]
      );
    }
  }, [ status ]);

  function selectProgram(evt) {
    setDegreeProgramId( evt.target.value );
    history.push(
      `/${ evt.target.value }`
    );
  }

  function selectModule(evt) {
    setModule( evt.target.value );
    history.push(
      `/${ degreeProgramId }/${ evt.target.value }`
    );
  }

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
              onChange={selectProgram}
              disabled={status !== "resolved"}
            >
              <option disabled value="">Studiengang auswählen</option>
              {
                (status === "resolved") && (
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
              disabled={status !== "resolved"}
              onChange={selectModule}
            >
              <option disabled value="">Modul auswählen</option>
              {
                (status === "resolved" && value[ degreeProgramId ]) && (
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
