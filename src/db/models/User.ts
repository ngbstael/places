import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'number', name: 'id' })
    id!: number

  @Column({ type: 'varchar', name: 'first_name' })
    firstName!: string

  @Column({ type: 'varchar', name: 'second_name' })
    secondName?: string

  @Column({ type: 'date', name: 'birthday' })
    birthDay!: Date

  @Column({ type: 'varchar', name: 'email' })
    email?: string

  @Column({ type: 'varchar', name: 'password' })
    password!: string

  @Column({ type: 'varchar', name: 'phone_number' })
    phoneNumber?: string
}
