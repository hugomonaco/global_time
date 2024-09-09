import { TimeZone } from 'src/dto/TimeZone.dto';

export interface TimeZonesProviderInterface {
  timeZones: TimeZone[];
  isLoading: boolean;
}
