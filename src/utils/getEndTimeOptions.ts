export const getEndTimeOptions = (arr: string[], startTime: string) => {
  const startIndex = arr.indexOf(startTime);
  return arr.slice(startIndex + 1);
};
