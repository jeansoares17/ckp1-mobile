import axios from 'axios';

const endpoint = 'https://api.openweathermap.org/data/2.5/weather?';

export const codigoApi = 'f348cfb47f87124985a99abfdddffd98'

export const api = axios.create({
  baseURL: endpoint
});