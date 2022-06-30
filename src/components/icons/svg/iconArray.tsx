import React, {FC} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ISvg} from '../../../types/common/ISvg';

export const IconArray: FC<ISvg> = ({color, width, height, rotation}) => {
  return (
    <Svg
      version="1.0"
      width={width || '15'}
      height={height || '15'}
      viewBox="0 0 512.000000 512.000000"
      rotation={rotation || 0}
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color || 'white'}
        stroke="none">
        <Path
          d="M277 4009 c-103 -24 -197 -103 -244 -204 -23 -51 -28 -73 -27 -145 0
-160 -96 -52 1192 -1342 777 -778 1160 -1155 1191 -1172 73 -39 158 -53 234
-37 34 7 83 24 108 37 31 17 414 394 1191 1172 1288 1290 1192 1182 1192 1342
0 72 -4 94 -28 147 -84 184 -308 262 -491 171 -26 -13 -388 -368 -1037 -1016
l-998 -997 -998 997 c-652 651 -1011 1003 -1037 1016 -76 37 -170 49 -248 31z"
        />
      </G>
    </Svg>
  );
};
