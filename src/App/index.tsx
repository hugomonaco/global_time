import React from 'react';
import './app.css';
import { useApp } from './hooks';
import { TimeZoneList } from 'src/components/TimeZoneList';
import { Header } from 'src/components/Header';

export const App = () => {
  const { selectedTimeZone, setSelectedTimezone } = useApp();

  //Render the list in a memoize component in order to not re-render it every time selectedTimeZone is changed
  const list = React.useMemo(
    () => <TimeZoneList onTimeZoneClick={setSelectedTimezone} />,
    [setSelectedTimezone]
  );

  return (
    <div className="app">
      <Header timeZone={selectedTimeZone} />
      {list}
    </div>
  );
};
