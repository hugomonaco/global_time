import { TimeZone } from 'src/dto/TimeZone.dto';

export type TimeZoneListProps = {
  onTimeZoneClick: (timeZone: TimeZone) => void;
};
