import moment from 'moment';

import {
  findArithmeticMean,
  findBigNumber,
  findSmallNumber,
} from '../numbers/find-arithmetic.helper';
import {substractKelvin} from '../numbers/substract-kelvin.helper';

export const sortWeatherByDays = data => {
  const __deleteTime = (data: string) => {
    return moment(data).toISOString().slice(0, 10);
  };

  const __protoObject = i => {
    const object = {
      date: i.dt_txt,
      temp: i.main.temp,
      temp_max: i.main.temp_max,
      temp_min: i.main.temp_min,
      speed_wind: i.wind.speed,
      weather: i.weather,
    };
    return object;
  };

  const newArray: any = {};
  data.forEach(
    (i: {
      dt_txt: string;
      main: {temp: number; temp_max: number; temp_min: number};
    }) =>
      newArray[__deleteTime(i.dt_txt)]
        ? newArray[__deleteTime(i.dt_txt)].push({
            ...__protoObject(i),
          })
        : {
            ...(newArray[__deleteTime(i.dt_txt)] = [__protoObject(i)]),
          },
  );
  const weather = Object.keys(newArray).map(i => {
    const arrayBigNumber = newArray[i].map(
      (i: {temp_max: number}) => i.temp_max,
    );
    const arraySmallNumbers = newArray[i].map(
      (i: {temp_min: number}) => i.temp_min,
    );
    const bigNumber = findBigNumber(arrayBigNumber);
    const smallNumber = findSmallNumber(arraySmallNumbers);
    const arraysWeather = newArray[i].map((i: {weather: number}) => i.weather);
    const __findIndex = (array, number) => {
      return array.findIndex(i => number == i);
    };
    const bigNumberIndex = __findIndex(arrayBigNumber, bigNumber);
    const smallNumberIndex = __findIndex(arraySmallNumbers, smallNumber);
    return {
      title: i,
      data: [
        {
          temp_min: substractKelvin(
            findSmallNumber(
              newArray[i].map((i: {temp_min: number}) => i.temp_min),
            ),
          ),
          temp_max: substractKelvin(bigNumber),
          speed_wind: findArithmeticMean(
            newArray[i].map((i: {speed_wind: number}) => i.speed_wind),
          ),
          temp_max_image: arraysWeather[bigNumberIndex],
          temp_min_image: arraysWeather[smallNumberIndex],
        },
      ],
    };
  });
  return weather;
};
