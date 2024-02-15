import { SVGProps, memo } from 'react';

import { colors, spacing } from '@shared/themes/bases';

interface HomeIconProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}

const HomeIcon = ({
  width = spacing.space[5],
  height = spacing.space[5],
  color = colors.secondary[150],
  ...props
}: HomeIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    color={color}
    {...props}>
    <path fill="currentColor" d="M12 2.1 1 12h3v9h6v-7h4v7h6v-9h3L12 2.1z" />
  </svg>
);
export default memo(HomeIcon);
