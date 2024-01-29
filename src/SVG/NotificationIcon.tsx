import { SVGProps, memo } from 'react';

interface NotificationIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const NotificationIcon = ({
  width = 36,
  height = 36,
  color = '#929bb5',
  ...props
}: NotificationIconProps) => (
  <svg width={width} height={height} color={color} {...props}>
    <g data-name="Group 1095">
      <path fill="none" d="M0 0h36v36H0z" />
      <path
        fill="currentColor"
        d="M13.916 28.767v-.747H8.347a3.345 3.345 0 0 1-3.342-3.337v-.563a3.776 3.776 0 0 1 2.1-3.4 1.852 1.852 0 0 0 1.024-1.5l.663-7.293a9.248 9.248 0 0 1 11.982-7.982 8.135 8.135 0 0 0-.942 2.041 7.12 7.12 0 0 0-1.833-.238 6.983 6.983 0 0 0-6.987 6.383l-.663 7.289a4.068 4.068 0 0 1-2.244 3.287 1.567 1.567 0 0 0-.872 1.413v.567a1.116 1.116 0 0 0 1.113 1.115h19.307a1.116 1.116 0 0 0 1.115-1.115v-.567a1.564 1.564 0 0 0-.87-1.407 4.067 4.067 0 0 1-2.246-3.293l-.294-3.237a8.128 8.128 0 0 0 2.267.329l.246 2.707a1.871 1.871 0 0 0 1.019 1.493 3.783 3.783 0 0 1 2.105 3.4v.567a3.344 3.344 0 0 1-3.342 3.341h-5.569v.743a4.084 4.084 0 0 1-8.168 0zm2.227 0a1.857 1.857 0 0 0 3.713 0v-.747h-3.713Zm11.209-15.232a5.177 5.177 0 0 1-2.3-.688l-.065-.716a6.987 6.987 0 0 0-2.447-4.73 5.2 5.2 0 0 1 .906-2.105 9.239 9.239 0 0 1 3.759 6.633l.146 1.605z"
      />
      <path
        fill="#ff6359"
        d="M27.655 13.548a5.2 5.2 0 1 1 5.2-5.2 5.2 5.2 0 0 1-5.2 5.2Z"
        data-name="Shape"
      />
    </g>
  </svg>
);
export default memo(NotificationIcon);
