import { Injectable } from '@nestjs/common';
import { Prisma, Pixu } from '@prisma-app/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindOnePixuService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<Pixu> {
    return this.prisma.pixu.findUniqueOrThrow({ where: { id } });
  }
}
