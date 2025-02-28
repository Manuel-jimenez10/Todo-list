// - id_usuario: Identificador único del usuario
// - nombre: Nombre completo del usuario
// - email: Correo electrónico (único)
// - contraseña: Contraseña encriptada
// - fecha_registro: Fecha de creación de la cuenta

import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lists } from "./list.entity";

@Entity({
    name: 'users'
})

export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string; 

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Lists, (list) => list.user)
    lists: Lists;
}