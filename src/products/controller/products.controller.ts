import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { Product } from '../models/product.interface';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
    constructor (
        private productServices:ProductsService
    ){
    }

    //post request for add a new product
    @Post()

    create(@Body() product:Product) : Observable<Product> {
       return this.productServices.addProduct(product);
    }

    //get request for get all product
    @Get('all')

    findAllProducts() : Observable<Product[]> {
       return this.productServices.getProducts();
    }

    //update the added products
    @Put('update/:id')
    
    updateProduct(@Param('id') id:number,
        @Body() product:Product): Observable<UpdateResult>  {
       return this.productServices.updateProducts(id, product);
    }

}
