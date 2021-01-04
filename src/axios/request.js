import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://',
    timeout: 5000
})

//拦截
instance.interceptors.request.use(config=>{
        return config;
    }, err=>{
    return Promise.reject(err);
});

instance.interceptors.response.use(res=>{
        return res;
    }, err=>{
    return Promise.reject(err);
});