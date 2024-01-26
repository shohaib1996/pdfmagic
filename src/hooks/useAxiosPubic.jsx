const { default: axios } = require("axios");


const axiosPublic = axios.create({
    baseURL:  "http://localhost:3000/api"
})


const useAxiosPubic = () => {
    return axiosPublic;
};

export default useAxiosPubic;