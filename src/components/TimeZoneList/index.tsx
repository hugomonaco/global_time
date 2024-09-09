import React from 'react';
import { useTimeZonesContext } from 'src/providers/TimeZones';
import { TimeZone } from './components/TimeZone';

import { styles } from './style';
export const TimeZoneList: React.FC<any> = () => {
  const { timeZones } = useTimeZonesContext();
  return (
    <div style={styles.container}>
      {timeZones.map(timeZone => (
        <TimeZone
          key={timeZone.zoneName}
          zoneName={timeZone.zoneName}
          countryName={timeZone.countryName}
          gmtOffset={timeZone.gmtOffset}
        />
      ))}
    </div>
  );
};
