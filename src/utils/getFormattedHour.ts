const hourConverter = new Map([
  ["9", 9],
  ["10", 10],
  ["11", 11],
  ["12", 12],
  ["1", 13],
  ["2", 14],
  ["3", 15],
  ["4", 16],
  ["5", 17],
]);
export const getFormattedHour = (hour: string): number => {
  return hourConverter.get(hour) || -1;
};
