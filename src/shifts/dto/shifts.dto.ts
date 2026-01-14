import { IsString, IsDate } from 'class-validator';
export class CreateShiftDto {
  @IsDate()
  startTime: Date;
  @IsDate()
  endTime: Date;
  @IsString()
  locatiom: string;
}
