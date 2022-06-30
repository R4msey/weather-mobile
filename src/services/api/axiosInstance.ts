import axios from 'axios';

//@ts-ignore
import {BASE_URL_OPEN_WEATHER, RAPID_KEY, RAPID_HOST_OPEN_WEATHER} from '@env';

export const axiosInstance = () => {
  const api = axios.create({
    baseURL: BASE_URL_OPEN_WEATHER,
  });
  const config = {
    headers: {
      'X-RapidAPI-Key': RAPID_KEY,
      'X-RapidAPI-Host': RAPID_HOST_OPEN_WEATHER,
      'Content-Type': 'application/json',
    },
  };

  return {
    get: async (url: string, params: {q: string}) =>
      (
        await api.get(url, {
          ...config,
          params,
        })
      ).data,
  };
};
