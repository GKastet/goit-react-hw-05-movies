import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: '68cdab9130cffabea4ae33a0f4180d48',   
  }
});

export const requestMovie = async (endPoint) => {
  const { data } = await instance.get(endPoint);  
  return data;
};
