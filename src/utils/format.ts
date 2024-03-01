// Constants
import { CURRENCY_DEFAULT } from '@shared/constants';

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

export const formatFullName = (firstName: string, lastName: string): string =>
  `${firstName} ${lastName}`;

export const convertValueStringAndNumber = (
  value: string | number
): string | number => {
  if (typeof value === 'string') {
    return Number(value);
  }

  return value.toString();
};

export const formatValueInputNumber = (value: string): string =>
  value?.replace(/[^0-9]/g, '');
