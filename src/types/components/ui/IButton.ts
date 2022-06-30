import {ReactNode} from 'react';

export interface IButton {
  onPress?: () => void;
  title: string;
  icon?: ReactNode;
}
