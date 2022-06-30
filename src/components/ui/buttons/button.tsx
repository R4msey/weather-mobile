import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {colors} from '../../../theme/colors';
import {IButton} from '../../../types/components/ui/IButton';
import {Title} from '../../common/typography';

export const Button: FC<IButton> = ({onPress, title, icon}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Title text={title} size={18} color={colors.white} />
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: colors.blue,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
