import React from 'react';
import { useTimeZonesContext } from 'src/providers/TimeZones';
import { TimeZone } from './components/TimeZone';

import styles from './TimeZoneList.module.css';
import { TimeZoneListProps } from './types';

export const TimeZoneList: React.FC<TimeZoneListProps> = ({ onTimeZoneClick }) => {
  const { timeZones } = useTimeZonesContext();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>List of time zones</h2>
      <div className={styles.list}>
        {timeZones.map(timeZone => (
          <TimeZone
            key={timeZone.zoneName}
            onClick={() => onTimeZoneClick(timeZone)}
            zoneName={timeZone.zoneName}
            countryName={timeZone.countryName}
            gmtOffset={timeZone.gmtOffset}
          />
        ))}
      </div>
    </div>
  );
};
