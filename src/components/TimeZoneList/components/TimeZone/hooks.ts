import React from 'react';
import { parseDate } from 'src/utils/timeParser';

const INTERVAL_UPDATE = 60000;

export const useTimeZone = ({ gmtOffset }) => {
  const [time, setTime] = React.useState<string>('');

  const getDate = React.useCallback(() => {
    const parsedDate = parseDate(gmtOffset, 'EEE - H:mm');
    setTime(parsedDate);
  }, [gmtOffset]);

  React.useEffect(() => {
    getDate();
    const intervalId = setInterval(getDate, INTERVAL_UPDATE);
    return () => clearInterval(intervalId);
  }, [getDate]);

  return { time };
};
