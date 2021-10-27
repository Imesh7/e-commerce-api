import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ type:'text',nullable:false })
    name?:string;

     @Column()
    price:number; 

    @Column()
    imageUrl :string;

    @Column({type:'timestamp',default:() => 'CURRENT_TIMESTAMP'})
    createdAt:Date;


}