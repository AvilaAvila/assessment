import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`http://localhost:3000/admin/get-all-users`);
    }

    Edituser(id: number) {
        return this.http.get<User[]>(`http://localhost:3000/admin/update-user/${id}`);
    }

    Searchuser(id: number) {
        return this.http.get<User[]>(`http://localhost:3000/admin/search-user/${id}`);
    }

    AddUser(user: User) {
        return this.http.post(`http://localhost:3000/auth/register`, user);
    }

    register(user: User) {
        return this.http.post(`http://localhost:3000/auth/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:3000/admin/delete-user/users/${id}`);
    }
}