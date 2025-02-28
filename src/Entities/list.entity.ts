import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";
import { Tasks } from "./task.entity";

// - id_lista: Identificador único de la lista
// - id_usuario: Usuario propietario de la lista
// - nombre: Título de la lista
// - descripcion: Descripción opcional de la lista
// - fecha_creacion: Fecha de creación de la lista

@Entity({
  name: 'lists'
})
export class Lists {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Users, (user) => user.lists)  // Relación N:1 con la entidad User
  user: Users;

  @Column()
  name: string;


  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Tasks, (task) => task.list)
  tasks: Tasks;
}