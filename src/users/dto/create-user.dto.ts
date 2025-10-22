import { IsEmail, IsEnum, IsNotEmpty, MinLength ,IsOptional} from "class-validator";
import { UserRole } from "../user.entity";


export class CreateUserDto{

    @IsNotEmpty()
    username:string

    @IsEmail()
    email:string

    @IsNotEmpty()
    @MinLength(8)
    password:string

    @IsOptional()
    @IsEnum(['Student','Admin','Teacher'])
    role?:UserRole
}