export const getData = (students: Student[]) => {
  const map = new Map();

  students.forEach((item) => {
    if (!!item.house) {
      map.set(item.house, (map.get(item.house) ?? 0) + 1);
    }
  });

  return Array.from(map.keys()).map((item) => {
    return {
      house: item,
      count: map.get(item),
    };
  });
};