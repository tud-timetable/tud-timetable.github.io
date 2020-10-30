import create from "zustand";

const useModules = create((set, get) => ({
  "items":{},
  "readAll": () => {
    const { items } = get();
    return items;
  },
}));

export default useModules;
