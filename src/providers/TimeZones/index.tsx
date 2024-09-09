import React from 'react';
import { TimeZonesProviderInterface } from './types';
import { timeZonesProviderDefault } from './constants';
import { getTimeZones } from 'src/services/timeZoneService';

const TimeZonesContext = React.createContext(timeZonesProviderDefault);

export const TimeZonesProvider = ({ children }) => {
  const [timeZones, setTimeZones] = React.useState(timeZonesProviderDefault.timeZones);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  React.useEffect(() => loadTimeZones(), []);

  const loadTimeZones = () => {
    setIsLoading(true);
    getTimeZones()
      .then(response => setTimeZones(response.data.zones || {}))
      .catch(error => {
        setTimeZones(timeZonesProviderDefault.timeZones);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <TimeZonesContext.Provider value={{ timeZones, isLoading }}>
      {children}
    </TimeZonesContext.Provider>
  );
};

export const useTimeZonesContext = () =>
  React.useContext<TimeZonesProviderInterface>(TimeZonesContext);
