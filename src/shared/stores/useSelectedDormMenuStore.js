import { create } from 'zustand';

export const useSelectedDormMenuStore = create((set) => ({
  clicked: 1,
  setClicked: (id) => set(() => ({ clicked: id })),
  selectedMenu: null,
  setSelectedMenu: (menu) => set(() => ({ selectedMenu: menu })),
  weeklyMenu: null,
  setWeeklyMenu: (menu) => set(() => ({ weeklyMenu: menu })),
  todayMenu: null,
  setTodayMenu: (menu) => set(() => ({ todayMenu: menu })),
}));
