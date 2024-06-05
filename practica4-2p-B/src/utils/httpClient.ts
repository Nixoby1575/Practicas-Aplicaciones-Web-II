import axios from 'axios';
import got from 'got';

export const fetchDataAxios = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

export const fetchDataGot = async (url: string) => {
    const response = await got(url, { responseType: 'json' });
    return response.body;
};