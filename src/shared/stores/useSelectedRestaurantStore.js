import { create } from 'zustand';

export const useSelectedRestaurantStore = create((set) => ({
  selectedRest: 0,
  setSelectedRest: (id) => set(() => ({ selectedRest: id })),
}));
