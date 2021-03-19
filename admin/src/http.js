import axios from 'axios';
const http = axios.create({
    baseURL: "http://localhost:3000/admin/api"
})

http.interceptors.response.use(res => {
    return res;
}, err => {
    // console.log(err.response.data.message);
    // if(err.response.data.message){
    //     app.config.globalProperties.$message({
    //         type: 'error',
    //         message: err.response.data.message
    //     });//服务端返回错误代码且有一个message时将其弹出
    // }

    return Promise.reject(err);
})//拦截器
export default http