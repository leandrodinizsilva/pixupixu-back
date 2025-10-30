import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreatePixuService } from './use-case/create/create.pixu.service';
import { Prisma, Pixu } from '@prisma-app/client';
import { FindManyPixuService } from './use-case/findMany/findAll.pixu.service';

@Controller('pixu')
export class PixuController {
  constructor(
    private readonly createPixu: CreatePixuService,
    private readonly findManyPixu: FindManyPixuService,
  ) {}

  @Post('')
  async create(
    @Body() data: Prisma.PixuCreateInput,
    @Req() request: Request,
  ): Promise<Pixu> {
    return await this.createPixu.createPixu(data);
  }

  @Get('findMany')
  async findMany(
    @Body() data: Prisma.PixuCreateInput,
    @Req() request: Request,
  ): Promise<Pixu[]> {
    return await this.findManyPixu.findMany();
  }
}
