import { IsInt } from 'class-validator';
export class CreateAssignmebtDto {
  @IsInt()
  id: number;
  @IsInt()
  userId: number;
  @IsInt()
  shiftId: number;
}
