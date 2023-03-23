import { FC } from 'react';
import { Svg } from './card-chip-icon.styles';
import { CardChipIconProps } from './card-chip-icon.types';

export const CardChipIcon: FC<CardChipIconProps> = ({ onClick, isActive }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 300"
      fill="1d1d1f"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      isActive={isActive}
      onClick={onClick}
    >
      <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)">
        <path
          d="M2500 3940 l0 -610 -307 0 -307 0 -251 250 -251 250 -681 0 c-765 0
-693 8 -693 -81 l0 -49 667 0 667 0 223 -222 223 -223 0 -312 0 -313 -895 0
-895 0 0 -65 0 -65 895 0 895 0 0 -313 0 -312 -228 -228 -227 -227 -663 0
-662 0 0 -42 c0 -24 3 -53 6 -65 l6 -23 681 0 681 0 251 250 251 250 307 0
307 0 0 -610 0 -610 65 0 65 0 0 610 0 610 302 0 302 0 251 -250 251 -250 686
0 685 0 7 46 c3 26 6 55 6 65 0 18 -23 19 -663 19 l-662 0 -233 233 -232 232
0 303 0 302 895 0 895 0 0 70 0 70 -895 0 -895 0 0 303 0 302 233 233 232 232
664 0 664 0 -7 46 c-3 26 -6 55 -6 65 0 18 -24 19 -687 19 l-687 0 -251 -250
-251 -250 -302 0 -302 0 0 610 0 610 -65 0 -65 0 0 -610z m690 -1373 l0 -634
-472 -6 c-260 -4 -546 -7 -635 -7 l-163 0 0 640 0 640 635 0 635 0 0 -633z"
        />
      </g>
    </Svg>
  );
};
