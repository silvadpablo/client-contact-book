/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ContactsRepository } from "../contact.repository";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";
import { Contact } from "../../entities/contact.entity";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
    constructor(private prisma: PrismaService) {}
    async create(data: CreateContactDto): Promise<Contact> {
        const contact = new Contact()
        Object.assign(contact, {
            ...data
        })
        const newContact = await this.prisma.contacts.create({
            data: {
                id: contact.id,
                fullName: contact.fullName,
                email: contact.email,
                phone: contact.phone,
                createdAt: contact.createdAt,
                clientId: contact.clientId
            }
        })
        return plainToInstance(Contact, newContact)
    }
    async findAll(): Promise<Contact[]> {
        const contacts: Contact[] = await this.prisma.contacts.findMany()
        return plainToInstance(Contact, contacts)
    }
    async findOne(id: string): Promise<Contact> {
        const contact = await this.prisma.contacts.findUnique({
            where: { id }
        })
        return plainToInstance(Contact, contact)
    }
    async update(id: string, data: UpdateContactDto): Promise<Contact> {
        const contact = await this.prisma.contacts.update({
            where: { id },
            data: { ...data }
        })
        return plainToInstance(Contact, contact)
    }
    async delete(id: string): Promise<void> {
        await this.prisma.contacts.delete({
            where: { id }
        })
    }
    
}