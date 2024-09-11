import React from 'react';
import styles from './TimeZone.module.css';
import { TimeZoneProps } from './types';
import { useTimeZone } from './hooks';

export const TimeZone: React.FC<TimeZoneProps> = ({
  onClick,
  countryName,
  zoneName,
  gmtOffset,
}) => {
  const { time } = useTimeZone({ gmtOffset });

  return (
    <button className={styles.timeZone} onClick={onClick}>
      <span className={styles.name}>
        {countryName} - {zoneName}
      </span>
      <br />
      <span className={styles.time}>{time}</span>
    </button>
  );
};
