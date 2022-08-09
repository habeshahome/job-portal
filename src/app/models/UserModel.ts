export interface UserModel {
    email: string
    password: string
    name?: string
    phone?: string
    role?: string | 'USER'
}