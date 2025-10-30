import { Injectable } from '@nestjs/common';
import { Prisma, Pixu } from '@prisma-app/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindManyPixuService {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Pixu[]> {
    return this.prisma.pixu.findMany();
  }
}
