import { Module } from '@nestjs/common';
import { FindOnePixuService } from './use-case/findOne/findOne.pixu.service';
import { PixuController } from './pixu.controller';
import { CreatePixuService } from './use-case/create/create.pixu.service';
import { FindManyPixuService } from './use-case/findMany/findAll.pixu.service';

@Module({
  imports: [],
  exports: [FindOnePixuService],
  controllers: [PixuController],
  providers: [CreatePixuService, FindOnePixuService, FindManyPixuService],
})
export class PixuModule {}
