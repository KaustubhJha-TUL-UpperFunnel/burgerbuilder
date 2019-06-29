import axios from 'axios';

var instance = axios.create({
    baseURL:"https://burgerbuilder-1ddde.firebaseio.com/"
});

export default instance;