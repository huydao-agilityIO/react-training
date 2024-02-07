import dayjs from 'dayjs';

// Constants
import { CURRENCY_DEFAULT, FORMAT_DATE } from '@shared/constants';

/**
 * Convert amount currency value to format $0,00
 */
export const formatAmountCurrency = (
  balance: number,
  decimal = CURRENCY_DEFAULT.DECIMAL
): string => {
  const dollarUSLocale: Intl.NumberFormat = Intl.NumberFormat('en-US', {
    style: CURRENCY_DEFAULT.STYLE,
    currency: CURRENCY_DEFAULT.TEXT,
    minimumFractionDigits: decimal
  });

  return dollarUSLocale.format(balance);
};

/**
 * Format date to number
 * @param date - string
 * @returns - date in format DD/MM/YYYY
 */
export const convertDateToDayMonthYear = (date: string): string =>
  dayjs(date).format(FORMAT_DATE);

export const formatFullName = (firstName: string, lastName: string): string =>
  `${firstName} ${lastName}`;
