export const findArithmeticMean = (data: number[]) => {
  const result = data.reduce((acc, curr) => acc + curr, 0) / (data.length || 1);
  return result;
};

export const findSmallNumber = data => {
  return Math.min.apply(Math, data);
};
export const findBigNumber = data => {
  return Math.max.apply(Math, data);
};
