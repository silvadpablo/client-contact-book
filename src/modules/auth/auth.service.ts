/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/repositories/user.repository';

@Injectable()
export class AuthService {
    constructor(private usersRepository: UsersRepository){}

    // validateUser(id: string, password: string) {
    //     const user = this.usersRepository.findOne(id)
    //     if (user && user.password == password)
    // }
}
