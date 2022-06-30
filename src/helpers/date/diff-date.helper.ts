export const diffDate = (value: number) => {
  const date = new Date();
  const index = Math.round((value - Number(date)) / (60 * 60 * 24 * 1000));
  return index;
};
