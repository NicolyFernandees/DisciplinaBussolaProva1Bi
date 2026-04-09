export class imovel {}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class imovel {
 @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string
}