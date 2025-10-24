import { Module } from '@nestjs/common';
import { CreateUserService } from './use-case/create/create.user.service';
import { UserController } from './user.controller';
import { FindOneUserService } from './use-case/findOne/findOne.user.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/guard/auth.guard';

@Module({
  imports: [],
  exports: [FindOneUserService],
  controllers: [UserController],
  providers: [CreateUserService, FindOneUserService],
})
export class UserModule {}
