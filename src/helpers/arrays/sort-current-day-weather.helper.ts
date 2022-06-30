import {substractKelvin} from '../numbers/substract-kelvin.helper';

export const parseCurrentDayWeather = data => {
  const object = {
    humidity: data.humidity,
    speed_wind: data.wind_speed,
    temp_max: substractKelvin(data.temp.average_max),
    temp_min: substractKelvin(data.temp.average_min),
    dt: data.dt,
  };
  return object;
};
