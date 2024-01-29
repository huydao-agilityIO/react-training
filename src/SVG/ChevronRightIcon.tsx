import { SVGProps, memo } from 'react';

interface ChevronRightIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronRightIcon = ({
  width = 9,
  height = 18,
  color = '#000000',
  ...props
}: ChevronRightIconProps) => (
  <svg
    viewBox="0 0 320 512"
    width={width}
    height={height}
    color={color}
    {...props}>
    <path
      fill="currentColor"
      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
    />
  </svg>
);

export default memo(ChevronRightIcon);
