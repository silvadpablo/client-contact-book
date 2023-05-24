/* eslint-disable prettier/prettier */
import { Contact } from "src/modules/contact/entities/contact.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column()
    fullName: string

    @Column()
    email: string

    @Column()
    phone: string

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date

    @OneToMany(() => Contact, contact => contact.client)
    contacts: Contact[]
}
