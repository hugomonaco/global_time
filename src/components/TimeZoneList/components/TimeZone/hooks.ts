import React from 'react';
import { format } from 'date-fns';

export const useTimeZone = ({ gmtOffset }) => {
  const [time, setTime] = React.useState<string>('');
  const offset = React.useMemo(() => gmtOffset * 1000, [gmtOffset]);
  React.useEffect(() => {
    calculateTime();
    const intervalId = setInterval(calculateTime, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const calculateTime = () => {
    // const now = new Date();
    // const utcMillis = Date.UTC(
    //   now.getUTCFullYear(),
    //   now.getUTCMonth(),
    //   now.getUTCDate(),
    //   now.getUTCHours(),
    //   now.getUTCMinutes(),
    //   now.getUTCSeconds()
    // );

    console.log(new Date(Date.now() + offset));
    const now_utc = new Date(Date.now() + offset);

    setTime(format(now_utc, 'EEE - H:mm'));
  };

  return { time };
};
