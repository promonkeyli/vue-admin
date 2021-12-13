import axios from 'axios';

interface userinfo{
    user:{
      username: string,
      password: string
    }
}
export function login(data: userinfo):Promise<any> {
    const url = 'http://127.0.0.1:3000/api/user/login';
    return axios.post(url, data);
}
export function register(data: userinfo):Promise<any> {
    const url = 'http://127.0.0.1:3000/api/user/register';
    return axios.post(url, data);
}