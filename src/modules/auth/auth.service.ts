/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

interface User {
    id: string
    email: string
    password: string
}

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) {
        const foundUser = await this.userService.findByEmail(email)
        if (foundUser && foundUser.password === password){
            const { id, email } = foundUser
            return { id, email }
        }
        return null
    }

    async login(user: User){
        const payload = {email: user.email, sub: user.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
