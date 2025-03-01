import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  contraseña_actual: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  nueva_contraseña: string;
}