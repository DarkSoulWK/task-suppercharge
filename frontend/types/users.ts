export interface Users {
    data?:  User[];
    links?: Links;
}

export interface User {
    id?:        string;
    name?:      string;
    email?:     string;
    status?:    number;
    role?:      Role;
    branches?:   Branch[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Branch {
    id?:        string;
    name?:      string;
    key?:       string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Role {
    id?:   string;
    name?: Name;
}

export enum Name {
    Usuario = "Usuario",
}

export interface Links {
    nextPageURL?: string;
    prevPageURL?: null;
    totalCount?:  number;
    perPage?:     number;
    totalPages?:  number;
}
