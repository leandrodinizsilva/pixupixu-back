import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma-app/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreateUserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
}
