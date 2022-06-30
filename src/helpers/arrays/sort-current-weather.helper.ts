import {substractKelvin} from '../numbers/substract-kelvin.helper';

export const parseCurrentWeather = data => {
  const object = {
    humidity: data.main.humidity,
    temp: substractKelvin(data.main.temp),
    speed_wind: data.wind.speed,
    temp_image: data.weather[0].description,
  };
  return object;
};
