export interface UserModel {
    email: string
    password: string
    name?: string
    mobile?: string
    role?: string | 'PUBLIC',
    _id?: string,
}