import {createSlice} from '@reduxjs/toolkit';
import {IInitialState} from './types';

const initialState: IInitialState = {
  weather: undefined,
  currentWeather: undefined,
  city: 'Lviv',
  country: 'UA',
  loadedCurrentWeather: null,
  currentDayWeather: undefined,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchNextFiveDays: (state, action) => {
      state.weather = action.payload;
    },
    fetchCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
      state.loadedCurrentWeather = true;
    },
    fetchCurrentDayWeather: (state, action) => {
      state.currentDayWeather = action.payload;
    },
  },
});
export const {fetchNextFiveDays, fetchCurrentWeather, fetchCurrentDayWeather} =
  weatherSlice.actions;
