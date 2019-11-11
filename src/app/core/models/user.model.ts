export interface User {
    id?: string,
    name?: string,
    email: string, 
    password?: string,
    address?: string,
    phone?: string
}

export interface LoginResponse {
    id: string,
    name: string,
    token: string
}