import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './root';

export type WeatherScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Weather'
>;
