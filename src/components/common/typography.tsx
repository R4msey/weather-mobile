import React, {FC} from 'react';
import {Text} from 'react-native';
import {colors} from '../../theme/colors';
import {ITypography} from '../../types/common/ITypography';

export const Title: FC<ITypography> = ({
  text,
  size,
  color,
  style,
  onPress,
  numberOfLines,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={{
        color: color || colors.lightWhite,
        fontSize: size || 24,
        ...style,
      }}>
      {text}
    </Text>
  );
};
