import create from "zustand";
import { fetchJSON } from "./helpers";

const useProfessorships = create((set, get) => ({
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

    const promise = fetchJSON("/data/professorships.json")
      .then((professorships) => {
        set({
          "items": professorships,
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

export default useProfessorships;
