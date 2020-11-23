import create from "zustand";
import useModules from "hooks/useModules";
import { fetchJSON } from "./helpers";

const useDegreePrograms = create((set, get) => ({
  "items": {},
  "value": null,
  "status": "idle",

  "readAll": () => {
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

    const promise = fetchJSON("/data/degree-programs/index.json")
      .then((programs) => {
        return Promise.all(
          programs.map((program) => (
            fetchJSON(`/data/degree-programs/${program.file}`)
              .then((data) => ({
                "id": program.id,
                "data": {
                  ...data,
                  "name": program.name,
                },
              }))
          ))
        );
      })
      .then((programs) => {
        programs.forEach((program) => {
          useModules.setState((prevState) => ({
            "items": {
              ...prevState.items,
              ...program.data.modules.reduce((accu, module) => ({
                ...accu,
                [module.module_numbers[0]]: {
                  ...module,
                  "degree_program_id": program.id,
                },
              }), {}),
            },
          }));
        });

        const items = programs.reduce((accu, program) => ({
          ...accu,
          [program.id]: program.data,
        }), {});

        const { "items": prevItems } = get();

        set({
          "items": { ...prevItems, ...items },
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

export default useDegreePrograms;
