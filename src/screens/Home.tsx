import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';

import {Title} from '../components/common/typography';
import {IconArray} from '../components/icons/svg/iconArray';
import {IconLocation} from '../components/icons/svg/iconLocation';
import {WeatherToday} from '../components/screens/Home/component/weatherToday';
import {NextDaysBSheet} from '../components/screens/Home/nextDaysBSheet';
import {Button} from '../components/ui/buttons/button';
import {ButtonDatePicker} from '../components/ui/buttons/buttonDatePicker';

import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {sagaActions} from '../redux/weather/sagaActions';

export const Home = () => {
  const {city} = useAppSelector(selector => selector.weather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({type: sagaActions.FETCH_GET_CURRENT_WEATHER});
    dispatch({type: sagaActions.FETCH_WEATHER_NEXT_FIVE_DAYS});
  }, []);

  const nextDaysRef = useRef<any>();

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.mr}>
              <IconLocation />
            </View>
            <Title text={city} size={35} style={styles.mr} />
            <View style={{marginTop: 15}}>
              <IconArray />
            </View>
          </View>
          <ButtonDatePicker />
        </View>
        <WeatherToday />
      </View>
      <Button
        onPress={() => {
          nextDaysRef.current.show();
        }}
        icon={<IconArray rotation={-90} />}
        title="Next Five Days"
      />
      <NextDaysBSheet bsRef={nextDaysRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#232535',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  mr: {
    marginRight: 10,
  },
});
