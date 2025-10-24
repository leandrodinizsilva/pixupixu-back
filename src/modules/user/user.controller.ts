import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateUserService } from './use-case/create/create.user.service';
import { Prisma, User } from '@prisma-app/client';

@Controller('user')
export class UserController {
  constructor(private readonly createUser: CreateUserService) {}

  @Post('')
  async create(
    @Body() data: Prisma.UserCreateInput,
    @Req() request: Request,
  ): Promise<User> {
    return await this.createUser.createUser(data);
  }
}
