/* eslint-disable prettier/prettier */
import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { Contact } from "src/modules/contact/entities/contact.entity";

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    fullName: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    phone: string
}
