import config from '../config';
import axios from 'axios';


const Communication = {

    getMethod(endpoint){
        return axios.get(config.baseUrl + endpoint)
            .then(response => {
                return response.data;
            })
    }
};

export default Communication;