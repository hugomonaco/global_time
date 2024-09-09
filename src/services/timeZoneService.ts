import { timeZonesAxiosClient } from 'src/utils/axiosClient';

export const getTimeZones = async () => {
  return await timeZonesAxiosClient.get('list-time-zone');
};
