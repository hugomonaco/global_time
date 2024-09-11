import React from 'react';
import { HeaderProps } from './types';
import { useHeader } from './hooks';
import styles from './Header.module.css';

export const Header: React.FC<HeaderProps> = ({ timeZone }) => {
  const { date, time } = useHeader({ gmtOffset: timeZone?.gmtOffset || 0 });
  return (
    <div className={styles.header_container}>
      <h1 className={styles.country}>{timeZone?.countryName}</h1>
      <h4 className={styles.date}>{date}</h4>
      <h2 className={styles.time}>{time}</h2>
    </div>
  );
};
