export interface Menu { 
    name: string
    slug: string
    icon?: string
}

export interface Applicant {
    id?: string
    name?: string
}

export interface BasicAuth { 
    email: string
    password: string
}