import axios from 'axios';
import router from "@/router";
const http = axios.create({
    baseURL: "http://localhost:3000/admin/api"
})
http.interceptors.request.use(config => {
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

http.interceptors.response.use(res => {
    return res;
}, err => {
    // console.log(err.response.data.message);
    // if(err.response.data.message){
    //     res.app.config.globalProperties.$message({
    //         type: 'error',
    //         message: err.response.data.message
    //     });//服务端返回错误代码且有一个message时将其弹出
    // }
    if (err.response.status === 401) {
        // console.log('login');
        router.push('/login');
    }
    return Promise.reject(err);
})//拦截器
export default http