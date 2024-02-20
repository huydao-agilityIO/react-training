import { SVGProps } from 'react';

import { colors, spacing } from '@shared/themes/bases';

interface EllipsisVerticalProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}

const EllipsisVertical = ({
  width = spacing.space[2],
  height = spacing.space[4],
  color = colors.secondary[300],
  ...props
}: EllipsisVerticalProps) => (
  <svg
    viewBox="0 0 128 512"
    width={width}
    height={height}
    color={color}
    {...props}>
    <path
      fill="currentColor"
      d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
    />
  </svg>
);
export default EllipsisVertical;
