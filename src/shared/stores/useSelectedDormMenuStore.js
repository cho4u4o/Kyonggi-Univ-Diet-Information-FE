import { create } from 'zustand';

export const useSelectedDormMenuStore = create((set, get) => ({
  clicked: 1,
  setClicked: (id) => set(() => ({ clicked: id })),
  selectedMenu: null,
  setSelectedMenu: (menu) => set(() => ({ selectedMenu: menu })),
  selectedMenuId: null,
  setSelectedMenuId: (id) => set(() => ({ selectedMenuId: id })),
  selectedDate: new Date(),
  setSelectedDateAfter: () =>
    set(() => {
      const currentDate = get().selectedDate;
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + 1);
      return { selectedDate: newDate };
    }),
  setSelectedDateBefore: () =>
    set(() => {
      const currentDate = get().selectedDate;
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() - 1);
      return { selectedDate: newDate };
    }),
  weeklyMenu: null,
  setWeeklyMenu: (menu) => set(() => ({ weeklyMenu: menu })),
  todayMenu: null,
  setTodayMenu: (menu) => set(() => ({ todayMenu: menu })),
  newReview: null,
  setNewReview: (review) => set(() => ({ newReview: review })),
  useTodayDate: (request, date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

    switch (request) {
      case 'all':
        return `${year}년 ${month}월 ${day}일 ${week}요일`;
      case 'weekday':
        return [
          'SUNDAY',
          'MONDAY',
          'TUESDAY',
          'WEDNESDAY',
          'THURSDAY',
          'FRIDAY',
          'SATURDAY',
        ][date.getDay()];
      default:
        throw new Error('Invalid request type');
    }
  },
}));
