import dayjs from 'dayjs';

// Constants
import { FORMAT_DATE } from '@shared/constants';

/**
 * Format date to number
 * @param date - string
 * @returns - date in format DD/MM/YYYY
 */
export const convertDateToDayMonthYear = (date: string): string =>
  dayjs(date).format(FORMAT_DATE);
