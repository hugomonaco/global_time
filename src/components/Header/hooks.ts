import React from 'react';
import { parseDate } from 'src/utils/timeParser';

const INTERVAL_UPDATE = 1000;

export const useHeader = ({ gmtOffset }) => {
  const [time, setTime] = React.useState<string>();

  const getDate = React.useCallback(() => {
    const parsedDate = parseDate(gmtOffset, 'H:mm:ss');
    setTime(parsedDate);
  }, [gmtOffset]);

  React.useEffect(() => {
    getDate();

    const intervalId = setInterval(getDate, INTERVAL_UPDATE);
    return () => clearInterval(intervalId);
  }, [getDate]);

  return {
    date: 'Martes, 10 de septiembre de 2024',
    time,
  };
};
