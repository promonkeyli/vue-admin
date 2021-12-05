/**
 * @desc       项目工具库
 * @author     Young
 * @Date       2021/12/5
 */


/******************document Cookie 设置函数封装********************/

function setCookie(name: string , value: string, day: number): void {
    // escape()函数编码，能将一些特殊符号使用十六进制表示，例如空格将会编码为“20%”，
    // 从而可以存储于cookie值中，而且使用此种方案还可以避免中文乱码的出现，取的时候用unescape()函数解码即可
    // 修改cookie 需要重新赋值
    const cookieValue = escape(value);
    const time = new Date();
    time.setTime(time.getTime() + day*24*60*60*1000); // 时间戳
    document.cookie = `${name} = ${cookieValue};expires = ${time.toUTCString()}`;
}
function getCookie(name: string): any {
    let arr: Array<any> | null;
    const reg = new RegExp(`(^|)${name}=([^;]*)(;|$)`);
    arr = document.cookie.match(reg);
    return  arr ? unescape(arr[2]) : null;
}
function removeCookie(name: string): boolean {
    // 删除cookie说白了就是设置cookie的过期时间为过去的一个时间，即让cookie过期
    const time = new Date();
    time.setTime(time.getTime() - 1); // 设置为过去的时间
    const val = getCookie(name);
    if (val!== null){
        document.cookie = `${name} = ${val};expires = ${time.toUTCString()}`;
        return true;
    } else {
        return false;
    }
}
function setAllCookie(username: string, password: string): void {
    setCookie('username',username, 5);
    setCookie('password',password, 5);
}
function getAllCookie(): Array<string> {
    const username = getCookie('username');
    const password = getCookie('password');
    return [  username, password ];
}
function removeAllCookie(): void{
    removeCookie('username');
    removeCookie('password');
}

/*****************window localStorage 设置函数封装*********************/

const localStorage = {
    // 设置本地存储
    set(key: string, val: any) {
        window.localStorage.setItem(key, JSON.stringify(val));
    },
    // 获取本地存储
    get(key: string): any {
        let json: any = window.localStorage.getItem(key);
        return JSON.parse(json);
    },
    // 移除本地存储
    remove(key: string) {
        window.localStorage.removeItem(key);
    },
    // 移除全部本地存储
    clear() {
        window.localStorage.clear();
    }
};

/*****************window sessionStorage 设置函数封装*********************/

const sessionStorage = {
    // 设置会话存储
    set(key: string, val: any) {
        window.sessionStorage.setItem(key, JSON.stringify(val));
    },
    // 获取会话存储
    get(key: string) {
        let json: any = window.sessionStorage.getItem(key);
        return JSON.parse(json);
    },
    // 移除会话存储
    remove(key: string) {
        window.sessionStorage.removeItem(key);
    },
    // 移除全部会话存储
    clear() {
        window.sessionStorage.clear();
    }
};


export {
     setCookie,
     getCookie,
     removeCookie,
     setAllCookie,
     getAllCookie,
     removeAllCookie,

     localStorage,
     sessionStorage
};