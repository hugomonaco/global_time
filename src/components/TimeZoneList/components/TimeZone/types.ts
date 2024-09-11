import { TimeZone } from 'src/dto/TimeZone.dto';

export type TimeZoneProps = {
  onClick: () => void;
  countryName: string;
  zoneName: string;
  gmtOffset: number;
};
