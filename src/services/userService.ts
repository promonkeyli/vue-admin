import $http from './http';

interface userinfo{
    user:{
      username: string,
      password: string
    }
}
export function login(data: userinfo):Promise<any> {
    const url = '/user/login';
    return $http.post(url, data);
}
export function register(data: userinfo):Promise<any> {
    const url = '/user/register';
    return $http.post(url, data);
}
export function getCurrentUser(): Promise<any> {
    const url = `/user`;
    return $http.get(url);
}