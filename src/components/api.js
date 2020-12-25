import axios from 'axios';

export default axios.create({
    baseURL: 'https://assignment-machstatz.herokuapp.com/planet'
});