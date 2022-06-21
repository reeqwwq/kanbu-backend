import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserInput): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }
}
