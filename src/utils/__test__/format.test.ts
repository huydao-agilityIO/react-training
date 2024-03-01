// Constants
import { PATIENT } from '@shared/constants';

// Utils
import {
  convertValueStringAndNumber,
  formatAmountCurrency,
  formatFullName,
  formatValueInputNumber
} from '@shared/utils';

const { firstName, lastName, amount } = PATIENT || {};

describe('Format amount', () => {
  it('zero decimal', () => {
    const formattedAmount: string = formatAmountCurrency(amount, 0);

    expect(formattedAmount).toBe('$59,786');
  });

  it('two decimal', () => {
    const amount: number = 1234.56;
    const formattedAmount: string = formatAmountCurrency(amount);

    expect(formattedAmount).toBe('$1,234.56');
  });

  it('negative number with two decimal', () => {
    const amount: number = -1234.56;
    const formattedAmount: string = formatAmountCurrency(amount);

    expect(formattedAmount).toBe('-$1,234.56');
  });
});

describe('Format full name', () => {
  it('render full name', () => {
    const formattedFullName: string = formatFullName(firstName, lastName);

    expect(formattedFullName).toBe(`${firstName} ${lastName}`);
  });

  it('render full name with only first name', () => {
    const formattedFullName: string = formatFullName(firstName, '');

    expect(formattedFullName).toBe(`${firstName} `);
  });

  it('render full name with only last name', () => {
    const formattedFullName: string = formatFullName('', lastName);

    expect(formattedFullName).toBe(` ${lastName}`);
  });

  it('render full name with empty', () => {
    const formattedFullName: string = formatFullName('', '');

    expect(formattedFullName).toBe(' ');
  });
});

describe('Convert value string or number', () => {
  it('render with string', () => {
    const covertValueString: string | number =
      convertValueStringAndNumber(amount);

    expect(covertValueString).toBe('59786');
  });

  it('render with string', () => {
    const covertValueString: string | number =
      convertValueStringAndNumber('686868');

    expect(covertValueString).toBe(686868);
  });

  it('render with empty', () => {
    const covertValueString: string | number = convertValueStringAndNumber('');

    expect(covertValueString).toBe(0);
  });

  it('render with invalid value', () => {
    const covertValueString: string | number =
      convertValueStringAndNumber(firstName);

    expect(covertValueString).toBe(NaN);
  });
});

describe('format value input number', () => {
  it('render with string', () => {
    const formatValueNumber: string = formatValueInputNumber('686868');

    expect(formatValueNumber).toBe('686868');
  });

  it('render with empty value', () => {
    const formatValueNumber: string = formatValueInputNumber('');

    expect(formatValueNumber).toBe('');
  });

  it('render with invalid value', () => {
    const formatValueNumber: string = formatValueInputNumber(firstName);

    expect(formatValueNumber).toBe('');
  });
});
