import axios from "axios";

// Set up default config for http requests here
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "content-type": "application/json",
        'access-control-allow-origin': '*'
    },
})

// Handle all request
axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem('user');
    return config;
}, error => {
    return Promise.reject(error);
})

// For multiple requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    })

    failedQueue = [];
}
// Handle all response
axiosClient.interceptors.response.use(response => {
    // Edit response config
    return response;
}, error => {
    const originalRequest = error.config;
    if (localStorage.getItem("user")) {
        if (error.response.status === 401 && !originalRequest._retry) {

            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject })
                }).then(token => {
                    originalRequest.headers['Authorization'] = token;
                    return axiosClient(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                })
            }

            originalRequest._retry = true;
            isRefreshing = true;

            return new Promise(function (resolve, reject) {
                axiosClient.get('refresh-token').then(res => {
                    if (res.data.success) {
                        localStorage.setItem('user', res.data.data.token);
                        originalRequest.headers['Authorization'] = res.data.data.token;
                        processQueue(null, res.data.data.token);
                        resolve(axiosClient(originalRequest));
                    }
                }).catch((err) => {
                    processQueue(err, null);
                    reject(err);
                }).finally(() => { isRefreshing = false })
            })
        }
        return Promise.reject(error);
    }
    // else {
    //     window.location.href = '/login-page';
    // }
})
export default axiosClient