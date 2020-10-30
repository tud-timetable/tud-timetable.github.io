import create from "zustand";

const useModules = create((set, get) => ({
  "readAll": () => {
    "asd"
  },
}));

useModules.subscribe((data) => {
  console.log("useModules", data);
});

export default useModules;
