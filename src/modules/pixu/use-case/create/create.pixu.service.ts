import { Injectable } from '@nestjs/common';
import { Prisma, Pixu } from '@prisma-app/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreatePixuService {
  constructor(private prisma: PrismaService) {}

  async createPixu(data: Prisma.PixuCreateInput): Promise<Pixu> {
    return this.prisma.pixu.create({
      data,
    });
  }
}
