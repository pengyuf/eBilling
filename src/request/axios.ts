import axios from 'axios';
import qs from 'qs';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 1000 * 2
})


export function get(url: string, params?: object) {
    return new Promise((resolve, reject) => {
        axiosInstance.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export function post(url: string, params?: object) {
    return new Promise((resolve, reject) => {
        axiosInstance.post(url, qs.stringify(params)).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}