export const getTodayDate = (request) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const week = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

  switch (request) {
    case 'all':
      return `${year}년 ${month}월 ${day}일 ${week}요일`;

    case 'weekday':
      return ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'][
        date.getDay()
      ];
  }
};
