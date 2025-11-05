import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './src/users/users.module';
import { ServiceService } from './src/database/service/service.service';
import { PrismaService } from './src/database/prisma.service';
import { DatabaseModule } from './src/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ServiceService, PrismaService],
})
export class AppModule {}
