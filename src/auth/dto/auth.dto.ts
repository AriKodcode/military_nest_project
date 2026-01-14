import { IsString, IsEmail } from 'class-validator';
export class CreateAuthDto {
  @IsString()
  password: string;
  @IsEmail()
  email: string;
}
