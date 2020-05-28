import axios from 'axios';
import ApiConfig from '../../../ApiConfig';

const axiosInstance = axios.create({
    baseURL: ApiConfig.API_URL
});

export default axiosInstance; 
