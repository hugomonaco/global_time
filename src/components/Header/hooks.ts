import React from 'react';
import { parseDate } from 'src/utils/timeParser';
import { isNil } from 'lodash';
const INTERVAL_UPDATE = 1000;

export const useHeader = ({ timeZone }) => {
  const { gmtOffset } = timeZone || {};

  const [time, setTime] = React.useState<string>();

  //default to my time zone offset if it is null
  const offset = React.useMemo(
    () => (!isNil(gmtOffset) ? gmtOffset : new Date().getTimezoneOffset() * -60),
    [gmtOffset]
  );

  const getDate = React.useCallback(() => {
    const parsedDate = parseDate(offset, 'eeee, d MMMM - H:mm:ss');
    setTime(parsedDate);
  }, [offset]);

  React.useEffect(() => {
    getDate();

    const intervalId = setInterval(getDate, INTERVAL_UPDATE);
    return () => clearInterval(intervalId);
  }, [getDate]);

  return {
    time,
  };
};
