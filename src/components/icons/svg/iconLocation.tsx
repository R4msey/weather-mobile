import React, {FC} from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ISvg} from '../../../types/common/ISvg';

export const IconLocation: FC<ISvg> = ({color, width, height}) => {
  return (
    <Svg
      version="1.0"
      width={width || '25'}
      height={height || '25'}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="white"
        stroke="none">
        <Path
          d="M2400 5110 c-709 -64 -1316 -544 -1544 -1220 -150 -446 -115 -956 94
-1365 77 -151 1484 -2454 1520 -2487 53 -49 150 -47 197 4 17 18 600 972 1387
2271 165 273 239 462 287 737 18 99 18 420 0 530 -62 395 -234 733 -511 1010
-271 271 -605 444 -980 506 -110 18 -329 25 -450 14z m304 -905 c205 -36 358
-117 502 -267 217 -224 299 -528 224 -836 -129 -535 -725 -828 -1230 -607
-247 108 -424 312 -507 582 -24 79 -27 103 -27 243 0 140 3 164 27 243 48 157
122 281 233 391 209 210 491 301 778 251z"
        />
      </G>
    </Svg>
  );
};
