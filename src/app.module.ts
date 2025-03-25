import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { FaqModule } from './faqs/faq.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/product.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // Load environment variables globally
    MongooseModule.forRoot('mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/demodb?retryWrites=true&w=majority'),
    FaqModule,
    UsersModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
