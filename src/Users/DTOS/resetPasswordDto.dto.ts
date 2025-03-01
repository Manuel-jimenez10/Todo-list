import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  nueva_contraseña: string;

  @IsNotEmpty()
  @IsString()
  token: string; // Token enviado por correo para validar la solicitud
}