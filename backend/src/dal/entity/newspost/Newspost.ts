import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UserEntity } from "../user/User";
 
@Entity()
class Newspost {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    text: string;

    @Column()
    isPrivate: boolean
    
    @Column({ default: 'Other' })
    genre: 'Politic' | 'Business' | 'Sport' | 'Other';

    @Column({ type: 'timestamptz', nullable: true }) 
    createdAt: Date;

    @ManyToOne(() => UserEntity, (author) => author.newsposts)
    author: UserEntity;
}
  
export {Newspost as NewspostEntity}