import {FC} from 'react';

export const filterArrayKey = (array, value) => {
  return array.filter((i: {key: string; value: FC}) => i.key == value)[0];
};
