import React from 'react';
import { TimeZone } from 'src/dto/TimeZone.dto';

export const useApp = () => {
  const [selectedTimeZone, setSelectedTimezone] = React.useState<TimeZone>(null);

  return { selectedTimeZone, setSelectedTimezone };
};
