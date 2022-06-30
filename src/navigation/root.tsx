import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Weather} from '../screens/Weather';

export type RootStackParamList = {
  Home: undefined;
  Weather: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackScreen: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  );
};
