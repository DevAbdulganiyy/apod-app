import axios from 'axios';

// const API_KEY = process.env.NASA_API_KEY || 'your_api_key';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

console.log(BASE_URL)

export const fetchApod = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/apod`);
    return data;
  } catch (error) {
    console.error('Error fetching APOD:', error);
    throw error;
  }
};

export const fetchHistoricalApods = async (count: number, startDate?: string,endDate?: string) => {
  try {
    const params:any = { count };
    if (startDate) params['start_date'] = startDate;
    if (endDate) params['end_date'] = endDate;

    let query = new URLSearchParams(params);

    const { data } = await axios.get(`${BASE_URL}/api/apods?${query.toString()}`);
    return data;
  } catch (error) {
    console.error('Error fetching historical APODs:', error);
    throw error;
  }
};
