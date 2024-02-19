import { SVGProps, memo } from 'react';

// Themes
import { colors, spacing } from '@shared/themes/bases';

interface MessageIconProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}

const MessageIcon = ({
  width = spacing.space[9],
  height = spacing.space[9],
  color = colors.secondary[150],
  ...props
}: MessageIconProps) => (
  <svg width={width} height={height} color={color} {...props}>
    <g data-name="Group 2">
      <path fill="none" d="M0 0h35v35H0z" />
      <path
        fill="currentColor"
        d="M17.253 31.765a13.888 13.888 0 0 1-6.133-1.41 14.217 14.217 0 0 1-7.011 1.41c-.4 0-.831-.009-1.276-.026a1.063 1.063 0 0 1-.939-.621 1.061 1.061 0 0 1 .122-1.114 16.089 16.089 0 0 0 2.978-5.445A14.023 14.023 0 0 1 20.028 4.005a7.876 7.876 0 0 0-.972 2.018A11.864 11.864 0 0 0 7.069 23.829a1.078 1.078 0 0 1 .132.769 14.649 14.649 0 0 1-2.24 4.992 10.349 10.349 0 0 0 5.487-1.361 1.073 1.073 0 0 1 .62-.2 1.086 1.086 0 0 1 .515.131 11.867 11.867 0 0 0 17.393-12.217 7.875 7.875 0 0 0 2.018-.972 14.025 14.025 0 0 1-13.741 16.794Zm4.313-10.064H11.501a1.079 1.079 0 0 1 0-2.157h10.064a1.079 1.079 0 0 1 0 2.157Zm-2.872-5.752h-7.193a1.078 1.078 0 1 1 0-2.156h7.193a1.078 1.078 0 1 1 0 2.156Zm9.5-2.776a11.991 11.991 0 0 0-6.37-6.369 5.07 5.07 0 0 1 1.125-1.865 14.051 14.051 0 0 1 7.111 7.11 5.071 5.071 0 0 1-1.866 1.124Z"
      />
      <path
        fill={colors.danger[150]}
        d="M26.598 13.434a5.032 5.032 0 1 1 5.032-5.032 5.032 5.032 0 0 1-5.032 5.032Z"
        data-name="Shape"
      />
    </g>
  </svg>
);

export default memo(MessageIcon);
