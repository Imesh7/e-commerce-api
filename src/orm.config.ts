import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require('dotenv').config();

export const config:TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(<string>process.env.POSTGRES_PORT), 
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
  //https://stackoverflow.com/questions/52064130/queryfailederror-the-column-price-contain-null-values-typeorm-postgresql
  autoLoadEntities:true, 
  }