import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// - id_etiqueta: Identificador único de la etiqueta
// - nombre: Nombre de la etiqueta
// - color: Color de la etiqueta en formato hexadecimal

export enum TagType {
  PERSONAL = 'Personal',
  WORK = 'Trabajo',
  URGENT = 'Urgente',
  IMPORTANT = 'Importante',
  TODO = 'Por Hacer'
}

@Entity({
    name: 'tag'
})
export class Tags{

   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @Column()
   tipo: TagType;

}