import { SVGProps, memo } from 'react';

import { colors, spacing } from '@shared/themes/bases';

interface SearchIconProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}

const SearchIcon = ({
  width = spacing.space[5],
  height = spacing.space[5],
  color = colors.secondary[150],
  ...props
}: SearchIconProps) => (
  <svg
    viewBox="0 0 50 50"
    width={width}
    height={height}
    color={color}
    {...props}>
    <path
      fill="currentColor"
      d="M21 3C11.602 3 4 10.602 4 20s7.602 17 17 17c3.355 0 6.46-.984 9.094-2.656l12.281 12.281 4.25-4.25L34.5 30.281C36.68 27.421 38 23.88 38 20c0-9.398-7.602-17-17-17Zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7Z"
    />
  </svg>
);

export default memo(SearchIcon);
