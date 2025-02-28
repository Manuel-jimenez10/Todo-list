// - id_tarea: Identificador único de la tarea
// - id_lista: Lista a la que pertenece la tarea
// - titulo: Título de la tarea
// - descripcion: Descripción detallada de la tarea
// - fecha_creacion: Fecha de creación de la tarea
// - fecha_vencimiento: Fecha límite para completar la tarea
// - completada: Estado de la tarea (completada/pendiente)
// - prioridad: Nivel de prioridad (1-5)

import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lists } from "./list.entity";
import { TaskTag } from "./task-tag.entity";

export enum Status {
    COMPLETED = 'Completed',
    PENDING = 'Pending',
    CANCELED = 'Canceled'
}

@Entity({
    name: 'task'
})

export class Tasks{

   @PrimaryGeneratedColumn('uuid')
   id: string;

   @ManyToOne(() => Lists, (list) => list.tasks)  // Relación con la lista
  list: Lists;

  @Column()
  titulo: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  expirationDate: Date;

  @Column()
  status: Status;

  @OneToMany(() => TaskTag, (taskTag) => taskTag.id)
  tareaEtiquetas: TaskTag[];

}