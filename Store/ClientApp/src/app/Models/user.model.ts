import { Injectable } from '@angular/core';

@Injectable()
export class UserModel {
    id_user: number;
    user_name: string;
    user_password: string;
    user_address: string;
}
