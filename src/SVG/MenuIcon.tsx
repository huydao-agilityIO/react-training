import { SVGProps, memo } from 'react';

// Themes
import { colors, spacing } from '@shared/themes/bases';

interface MenuIconProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}

const MenuIcon = ({
  width = spacing.space[9],
  height = spacing.space[9],
  color = colors.dark[200],
  ...props
}: MenuIconProps) => (
  <svg
    viewBox="0 0 50 50"
    width={width}
    height={height}
    color={color}
    {...props}>
    <path fill="currentColor" d="M0 7.5v5h50v-5Zm0 15v5h50v-5Zm0 15v5h50v-5Z" />
  </svg>
);

export default memo(MenuIcon);
