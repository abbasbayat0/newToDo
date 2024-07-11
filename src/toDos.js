import { create } from "zustand";

const useToDos = create((set) => ({
  // the list of to dos
  toDos: ["abbas"],
  changeToDo: (newToDo) => set(() => ({ toDos: newToDo })),

  // show list of to dos
  show: false,
  hide: () => set((state) => ({ show: !state.show })),

  // open pup up
  showPup: false,
  hidePup: () => set((state) => ({ showPup: !state.showPup })),
}));

export default useToDos;
