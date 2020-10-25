import React, {
  useState,
  useEffect
} from "react";
import Layout from "components/Layout";
import ModuleDescription from "components/ModuleDescription";
import useDegreePrograms from "hooks/useDegreePrograms";

function App() {
  const [ degreeProgram, setDegreeProgram ] = useState(null);
  const [ module, setModule ] = useState(null);
  const { status, value } = useDegreePrograms().read();

  useEffect(() => {
    if ( status === "resolved" ) {
      const program = Object.keys( value )[0];

      setDegreeProgram(
        program
      );

      setModule(
        value[ program ].modules[0]["Modulnummer"][0]
      );
    }
  }, [ status ]);

  function selectProgram(evt) {
    setDegreeProgram( evt.target.value );
  }

  function selectModule(evt) {
    setModule( evt.target.value );
  }

  function findModule(number) {
    if ( !value[ degreeProgram ] ) {
      return null;
    }

    const { modules } = value[ degreeProgram ];

    return modules.find((mod) => (
      mod["Modulnummer"][0] === number
    ));
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
              {
                (status === "resolved") && (
                  Object.keys( value ).map((id) => {
                    const program = value[ id ];

                    return (
                      <option value={id} key={id}>{program.name}</option>
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
              {
                (status === "resolved" && value[ degreeProgram ]) && (
                  value[ degreeProgram ].modules.map((m) => (
                    <option
                      value={m["Modulnummer"][0]}
                      key={m["Modulnummer"][0]}
                    >
                      {m["Modulname"]}
                    </option>
                  ))
                )
              }
            </select>
          </div>
        </div>
      </div>
      {
        (status === "resolved") && (
          <ModuleDescription data={
            findModule( module )
          } />
        )
      }
    </Layout>
  );
}

export default App;
