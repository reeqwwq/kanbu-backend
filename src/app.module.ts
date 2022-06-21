import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { CommonModule } from './common/common.module';
import { RoomModule } from './room/room.module';
import { HouseModule } from './house/house.module';

@Module({
  imports: [UsersModule, CommonModule, RoomModule, HouseModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
