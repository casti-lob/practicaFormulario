export interface LoginResponse {
    user:  User;
    token: string;
}

export interface UsersList {
    total: number;
    users: User[];
}

export interface User {
    name:      string;
    age:       number;
    email:     string;
    uid:       string;
    userName?: string;
    rol?:      string;
    active?:   boolean;
}
