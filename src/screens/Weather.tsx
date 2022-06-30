import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Title} from '../components/common/typography';
import {IconArray} from '../components/icons/svg/iconArray';
import {IconDrop} from '../components/icons/svg/iconDrop';
import {IconWind} from '../components/icons/svg/iconWind';
import {dateTitleDDMMM, unixToDate} from '../helpers/date/parse-date.helper';
import {useAppSelector} from '../hooks/useRedux';
import {colors} from '../theme/colors';

export const Weather = () => {
  const {currentDayWeather} = useAppSelector(selector => selector.weather);

  const navigation = useNavigation();

  const titleDate = unixToDate(currentDayWeather?.dt);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <IconArray rotation={90} width="25" height="25" />
        </TouchableOpacity>
      </View>
      <Title style={{marginLeft: 20}} text={dateTitleDDMMM(titleDate)} />
      {currentDayWeather && (
        <View style={{flex: 1, justifyContent: 'space-evenly'}}>
          <View style={styles.container}>
            <View style={styles.rowEnd}>
              <Title size={12} text="max " color="#797B83" />
              <Title text={`${currentDayWeather?.temp_max}°`} />
            </View>
            <View style={styles.rowEnd}>
              <Title size={12} text="min " color="#797B83" />
              <Title text={`${currentDayWeather?.temp_min}°`} />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.rowEnd}>
              <View style={styles.mr}>
                <IconWind width="15" height="15" />
              </View>
              <Title
                text={`${currentDayWeather?.speed_wind} km/h`}
                size={15}
                color={colors.white}
              />
            </View>
            <View style={styles.rowEnd}>
              <View style={{marginLeft: 20, ...styles.mr}}>
                <IconDrop width="15" height="15" />
              </View>
              <Title
                text={`${currentDayWeather?.humidity.toFixed(1)} %`}
                size={15}
                color={colors.white}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#232535',
    flex: 1,
  },
  header: {
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 10,
  },
  mr: {
    marginRight: 10,
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
