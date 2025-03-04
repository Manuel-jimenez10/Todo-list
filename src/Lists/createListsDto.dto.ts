import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateListDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}