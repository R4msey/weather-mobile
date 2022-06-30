interface ICurrentWeather {
  humidity: number;
  temp: string;
  speed_wind: number;
  temp_image: string;
}
interface ICurrentDayWeather {
  humidity: number;
  speed_wind: number;
  temp_min: number;
  temp_max: number;
  dt: string;
}

interface ITemp_credentials {
  description: string;
  icon: string;
  id: number;
  main: string;
}
interface IWeather {
  title: string;
  data: {
    temp_min: number;
    temp_max: number;
    speed_wind: number;
    temp_max_image: ITemp_credentials[];
    temp_min_image: ITemp_credentials[];
  }[];
}

export interface IInitialState {
  weather: undefined | IWeather[];
  currentWeather: ICurrentWeather | undefined;
  city: string;
  country: string;
  loadedCurrentWeather: boolean | null;
  currentDayWeather: undefined | ICurrentDayWeather;
}
