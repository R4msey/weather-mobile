import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconDrop} from '../../../icons/svg/iconDrop';
import {IconWind} from '../../../icons/svg/iconWind';
import {useAppSelector} from '../../../../hooks/useRedux';
import {colors} from '../../../../theme/colors';
import {IconsWeather} from '../../../../utils/iconsWeather';
import {Title} from '../../../common/typography';
import {filterArrayKey} from '../../../../helpers/arrays/filter-array-key.helper';
import {Loader} from '../../../common/loader';

export const WeatherToday = () => {
  const {currentWeather, loadedCurrentWeather} = useAppSelector(
    selector => selector.weather,
  );

  if (!loadedCurrentWeather || !currentWeather)
    return <Loader style={{marginTop: 100}} />;

  const CurrentIcon = filterArrayKey(IconsWeather, currentWeather.temp_image);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <CurrentIcon.value height="120" width="120" />
        <Title text={currentWeather.temp_image} size={25} style={styles.mv} />
        <Title text={` ${currentWeather.temp}°`} size={60} style={styles.mv} />
        <View style={[styles.mw, styles.rowCenter]}>
          <View style={styles.mr}>
            <IconWind width="15" height="15" />
          </View>
          <Title
            text={`${currentWeather.speed_wind.toFixed(1)} km/h`}
            size={15}
            color={colors.white}
          />
          <View style={{marginLeft: 20, ...styles.mr}}>
            <IconDrop width="15" height="15" />
          </View>
          <Title
            text={`${currentWeather.humidity.toFixed(1)} %`}
            size={15}
            color={colors.white}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mv: {
    marginVertical: 20,
  },
  main: {
    alignItems: 'center',
    marginTop: 50,
  },
  mr: {
    marginRight: 10,
  },
});
