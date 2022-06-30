import {call, takeEvery, put} from 'redux-saga/effects';

import {httpLinks} from '../../common/http/http-link.enums';
import {axiosInstance} from '../../services/api/axiosInstance';
import {sagaActions} from './sagaActions';

import {sortWeatherByDays} from '../../helpers/arrays/sort-array-by-days.helper';
import {parseCurrentDayWeather} from '../../helpers/arrays/sort-current-day-weather.helper';
import {parseCurrentWeather} from '../../helpers/arrays/sort-current-weather.helper';
import {diffDate} from '../../helpers/date/diff-date.helper';

import {
  fetchCurrentDayWeather,
  fetchCurrentWeather,
  fetchNextFiveDays,
} from './slice';

export function* fetchGetWeatherForecast() {
  try {
    let result = yield call(async () => {
      return await axiosInstance().get(httpLinks.FORECAST, {
        q: `${'Lviv'},${'UA'}`,
      });
    });
    const parsed = sortWeatherByDays(result.list);
    yield put(fetchNextFiveDays(parsed));
  } catch (e) {
    yield put({type: 'FETCH_FAILED_FD'});
  }
}

export function* fetchGetCurrentWeather() {
  try {
    let result = yield call(async () => {
      return await axiosInstance().get(httpLinks.WEATHER, {
        q: `${'Lviv'},${'UA'}`,
      });
    });
    const parsed = parseCurrentWeather(result);

    yield put(fetchCurrentWeather(parsed));
  } catch (e) {
    yield put({type: 'FETCH_FAILED_CW'});
  }
}
export function* fetchGetCurrentDayWeather({payload}) {
  try {
    let result = yield call(async () => {
      return await axiosInstance().get(httpLinks.CLIMATE_MONTH, {
        q: `${'Lviv'},${'UA'}`,
      });
    });

    const index = diffDate(payload);
    const parsed = parseCurrentDayWeather(result.list[index]);
    yield put(fetchCurrentDayWeather(parsed));
  } catch (e) {
    yield put({type: 'FETCH_FAILED_CDW'});
  }
}
export default function* rootSaga() {
  yield takeEvery(
    sagaActions.FETCH_WEATHER_NEXT_FIVE_DAYS,
    fetchGetWeatherForecast,
  );
  yield takeEvery(
    sagaActions.FETCH_GET_CURRENT_WEATHER,
    fetchGetCurrentWeather,
  );
  yield takeEvery(
    sagaActions.FETCH_GET_CURRENT_DAY_WEATHER,
    fetchGetCurrentDayWeather,
  );
}
