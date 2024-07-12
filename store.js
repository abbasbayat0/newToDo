import { create } from "zustand";

const useStore = create((set) => ({
  showAddForm: false,
  changeShowAddForm: () =>
    set((state) => ({
      showAddForm: !state.showAddForm,
    })),
}));

export default useStore;
