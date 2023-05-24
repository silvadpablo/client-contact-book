/* eslint-disable prettier/prettier */

import { UUIDVersion } from "class-validator"
import { Client } from "src/modules/client/entities/client.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Contact {
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
    
    @ManyToOne(() => Client, client => client.contacts)
    client: Client
}
