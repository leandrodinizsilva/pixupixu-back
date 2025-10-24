import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma-app/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindOneUserService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<User> {
    return this.prisma.user.findUniqueOrThrow({ where: { email } });
  }
}
