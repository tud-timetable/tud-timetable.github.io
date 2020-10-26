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
            fetch(`/studienordnungen/${program.file}`)
              .then((res) => res.json())
              .then((data) => ({
                "id": program.id,
                "data": data,
              }))
          ))
        );
      })
      .then((programs) => {
        console.log({ programs });

        const items = programs.reduce((accu, program) => ({
          ...accu,
          [program.id]: program.data,
        }), {});

        console.log({ items });

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

useDegreePrograms.subscribe(console.log);

export default useDegreePrograms;
