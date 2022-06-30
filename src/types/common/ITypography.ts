export interface ITypography {
  text: string;
  size?: number;
  color?: string;
  style?: object;
  onPress?: () => void;
  numberOfLines?: number;
}
