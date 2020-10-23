import React from "react";
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
          ))
        );
      })
      .then((programs) => {
        set({
          "items": programs,
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
  const { status, value } = useDegreePrograms().read();

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
            <select className="form-control">
              {
                (status === "resolved") && (
                  value.map((program) => {
                    <option>{program.name}</option>
                  })
                )
              }
            </select>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
