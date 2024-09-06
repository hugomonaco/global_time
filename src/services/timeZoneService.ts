import { axiosClient } from "src/utils/axiosClient";

export const getTimeZones = async () => {
    return await axiosClient.get('https://timeapi.io/api/timezone/availabletimezones');
};