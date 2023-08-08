export type TypeOfLoginContact = 'M' | 'T';

export interface LoginForm {
    name: string;
    phone: string;
    email: string;
    dni: string;
    contact: TypeOfLoginContact;
    accept: boolean;
}
