import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tags } from "./tag.entity";
import { Tasks } from "./task.entity";

@Entity({
    name: 'task-tag'
})

export class TaskTag {

   @PrimaryGeneratedColumn('uuid')
   id: string; 

   @ManyToOne(() => Tasks, (task) => task.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_tarea' })
  tarea: Tasks;

  @ManyToOne(() => Tags, (tag) => tag.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_etiqueta' })
  etiqueta: Tags[];
  
}