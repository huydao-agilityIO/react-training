import { SVGProps } from 'react';

import { colors, spacing } from '@shared/themes/bases';

interface LogOutIconProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}

const LogoutIcon = ({
  width = spacing.space[3],
  height = spacing.space[3],
  color = colors.secondary[150],
  ...props
}: LogOutIconProps) => (
  <svg
    viewBox="0 0 512 512"
    width={width}
    height={height}
    color={color}
    {...props}>
    <path
      fill="currentColor"
      d="M18 32.8c-1.9.9-4.5 3.2-5.7 5.1L10 41.3v215.1c0 211.6 0 215.2 2 218.3 2 3.3 5.4 5.5 10.3 6.7 4 1 11.2-2.5 13.7-6.6 2-3.3 2-4.2 2-219V40.2l-2.7-3.3c-4.8-5.7-11.2-7.2-17.3-4.1zM188.5 179.4c-1.6.8-18.4 16.7-37.2 35.3-37.1 36.6-37 36.6-34.4 44.5 1.7 5.1 69.5 72.4 73.8 73.3 4.6.9 9.7-1 13.3-5.1 2.4-2.8 3-4.4 3-8 0-2.5-.5-5.5-1.1-6.7-.5-1.2-10.3-11.3-21.7-22.4l-20.7-20.2 163-.1c158.5 0 163.1-.1 167.2-2 10.1-4.5 11.3-18.7 2-23.7-3-1.7-12.9-1.8-167.6-2.3l-164.3-.5 20.6-19.9c11.4-11 21.4-21.2 22.2-22.7 3.1-6.1.8-14.7-5-18.4-3.5-2.3-9.5-2.8-13.1-1.1z"
    />
  </svg>
);

export default LogoutIcon;
