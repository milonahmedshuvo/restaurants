import axios from "axios";

 const axiosSecure = axios.create({  baseURL: "http://localhost:5000"  })





const useAxiosSecure = () => {

     // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem("access-token")
        config.headers.authorization= `Bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });




      // Add a response interceptor
      axiosSecure.interceptors.response.use(function (response) {
        // Do something with response data

        return response;
      }, function (error) {
        // Do something with response error

        return Promise.reject(error);
      });
      




      

    return axiosSecure
};

export default useAxiosSecure;