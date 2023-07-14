import { get, post } from '../axios'

export function testApi() {
    return get('/api/users/test')
}

export function testLogin(username: string, password: string) {
    return post('/api/users/login', { username, password })
}