import dayjs from 'dayjs';

// Utils
import { calculateTime } from '@shared/utils';

describe('calculateTime', () => {
  const mockValueExpect = (valueExpect: number) =>
    (dayjs as jest.MockedFunction<any>).mockReturnValueOnce({
      diff: jest.fn().mockReturnValue(valueExpect)
    });

  it('calculates minutes ago', () => {
    mockValueExpect(10);

    const time: Date = new Date('2024-02-29T04:25:36.400Z');

    expect(calculateTime(time)).toBe('10 mins ago');
  });

  it('calculates hours ago', () => {
    mockValueExpect(10 * 60);

    const time: Date = new Date('2024-02-29T04:25:36.400Z');

    expect(calculateTime(time)).toBe('10 hours ago');
  });

  it('calculates days ago', () => {
    mockValueExpect(10 * 24 * 60);

    const time: Date = new Date('2024-03-10T04:25:36.400Z');

    expect(calculateTime(time)).toBe('10 days ago');
  });
});
