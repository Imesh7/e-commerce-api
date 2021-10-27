import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { config } from './orm.config';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal : true }),
    
    
       TypeOrmModule.forRoot( config), 
    ProductsModule ,   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
