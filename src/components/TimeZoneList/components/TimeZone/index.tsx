import React from 'react';
import './timeZone.css';
import { TimeZoneProps } from './types';
import { useTimeZone } from './hooks';

export const TimeZone: React.FC<TimeZoneProps> = ({ countryName, zoneName, gmtOffset }) => {
  const { time } = useTimeZone({ gmtOffset });

  return (
    <button className="time-zone">
      <span className="name">
        {countryName} - {zoneName}
      </span>
      <br />
      <span className="time">{time}</span>
    </button>
  );
};
