import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';

import {colors} from '../../theme/colors';

export const Loader: FC<{style?: object}> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <MaterialIndicator size={80} color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
