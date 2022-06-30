import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from '../../../hooks/useRedux';
import {WeatherScreenProp} from '../../../navigation/type';
import {sagaActions} from '../../../redux/weather/sagaActions';
import {IconCalendar} from '../../icons/svg/iconCalendar';
import {addDaysToDate} from '../../../helpers/date/parse-date.helper';
export const ButtonDatePicker = () => {
  const dispatch = useAppDispatch();

  const [visible, setVisible] = useState(false);

  const date = addDaysToDate(29);

  const navigation = useNavigation<WeatherScreenProp>();

  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => {
          setVisible(true);
        }}>
        <IconCalendar width="25" height="25" />
      </Pressable>
      <DateTimePickerModal
        isVisible={visible}
        mode={'date'}
        onConfirm={e => {
          dispatch({
            type: sagaActions.FETCH_GET_CURRENT_DAY_WEATHER,
            payload: e,
          });
          setVisible(false);
          navigation.navigate('Weather');
        }}
        date={undefined}
        maximumDate={date}
        minimumDate={new Date()}
        onCancel={() => setVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
