import React, {
  useState
} from "react";
import Layout from "components/Layout";
import create from "zustand";

const useDegreePrograms = create((set, get) => ({
  "items": {},
  "value": null,
  "status": "idle",

  "read": () => {
    const { value, status, items } = get();

    switch ( status ) {
      case "pending":
      case "rejected":
        return {
          status,
          value,
        };

      case "resolved":
        return {
          status,
          "value": items,
        };
    }

    const promise = fetch("/studienordnungen/index.json")
      .then((res) => res.json())
      .then((programs) => {
        return Promise.all(
          programs.map((program) => (
            fetch(`/studienordnungen/${program}`)
              .then((res) => res.json())
              .then((data) => ({
                "name": program.substr(
                  0,
                  program.length - 5 // drop json extensions
                ),
                "data": data,
              }))
          ))
        );
      })
      .then((programs) => {
        const items = programs.reduce((accu, program) => ({
          ...accu,
          [program.name]: program.data,
        }), {});

        set({
          "items": items,
          "status": "resolved",
          "value": null,
        });
      })
      .catch((error) => {
        set({
          "status": "rejected",
          "value": error,
        });
      });

    set({
      "status": "pending",
      "value": promise,
    });

    return {
      "status": "pending",
      "value": promise,
    };
  },
}));

function App() {
  const [ degreeProgram, setDegreeProgram ] = useState(null);
  const { status, value } = useDegreePrograms().read();

  function selectProgram(evt) {
    console.log(evt);
  }

  return (
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Test</h1>
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
                  Object.values(value).map((program) => (
                    <option key={program.name}>{program.name}</option>
                  ))
                )
              }
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              disabled={status !== "resolved"}
            >
              {/*
                (status === "resolved") && (

                )
              */}
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">

        </div>
      </div>
    </Layout>
  );
}

export default App;