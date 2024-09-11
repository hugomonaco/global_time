import React from 'react';
import { HeaderProps } from './types';
import { useHeader } from './hooks';
import styles from './Header.module.css';

export const Header: React.FC<HeaderProps> = ({ timeZone }) => {
  const { time } = useHeader({ timeZone });
  return (
    <div className={styles.header_container}>
      <h1 className={styles.country}>{timeZone?.countryName}</h1>
      <h2 className={styles.time}>{time}</h2>
    </div>
  );
};
