import { format as formateDate } from 'date-fns';

export const parseDate = (utcOffsetInSeconds: number, format: string): string => {
  const myUtcOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const date = new Date(Date.now() + myUtcOffset + utcOffsetInSeconds * 1000);

  return formateDate(date, format);
};
