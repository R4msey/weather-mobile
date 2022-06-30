export const substractKelvin = (value: number) => {
  const kelvin = 273.16;
  let celsius: number | string = value - kelvin;
  celsius = celsius.toFixed();
  return celsius;
};
