import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToMany } from "typeorm"
import { NewspostEntity } from "../newspost/Newspost";

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    email: string

    @Column()
    password: string

    @OneToMany(() => NewspostEntity, (newspost) => newspost.author)
    newsposts: NewspostEntity[];
}

export {User as UserEntity}