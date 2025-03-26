import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { FaqModule } from './faqs/faq.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/product.module';
import { OrderModule } from './order/order.module';
import { ReviewModule } from './reviews/review.module';
import { AcknowledgmentModule } from './acknowledgments/acknowledgment.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // Load environment variables globally
    MongooseModule.forRoot('mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/demodb?retryWrites=true&w=majority'),
    FaqModule,
    UsersModule,
    ProductModule,
    OrderModule,
    ReviewModule,
    AcknowledgmentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
