import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Exclude, Transform } from 'class-transformer';
import { hashSync } from 'bcryptjs';
import { MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Exclude()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transform'],
  })
  password?: string;
}
