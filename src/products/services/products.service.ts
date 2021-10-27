import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { ProductEntity } from '../models/product.entity';
import { Product } from '../models/product.interface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ){  }

    addProduct(product:Product): Observable<Product> {
        return from(this.productRepository.save(product));
    }

    getProducts(): Observable<Product[]> {
        return from(this.productRepository.find());
    }

    updateProducts(id:number,product:Product):Observable<UpdateResult> {
        return from(this.productRepository.update(id,product));
        
    }
}
