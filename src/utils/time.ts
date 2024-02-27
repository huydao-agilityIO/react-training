import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Use relativeTime to calculate relative times
dayjs.extend(relativeTime);

// Use utc and timezone to calculate time zone
dayjs.extend(utc);
dayjs.extend(timezone);

export const calculateTime = (time: Date): string => {
  const currentTime = dayjs();

  const minutes = currentTime.diff(dayjs(time), 'minute');
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (minutes < 60) {
    return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
  }

  if (minutes < 24 * 60) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  if (hours < 24) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  return `${years} year${years > 1 ? 's' : ''} ago`;
};
