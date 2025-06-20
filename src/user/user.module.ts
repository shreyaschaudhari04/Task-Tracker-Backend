import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';

@Module({
  providers: [UserService],
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  exports: [MongooseModule]
})
export class UserModule {}
