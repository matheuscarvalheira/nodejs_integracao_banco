import { Module } from '@nestjs/common';
import { Product, ProductSchema } from './schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRepository } from './repositories/product.repository';
import { ProductMongooseRepository } from './repositories/mongoose/product.mongoose.repository';
import { StockService } from './services/stock.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: ProductRepository,
      useClass: ProductMongooseRepository,
    },
    StockService,
  ],
})
export class StockModule {}