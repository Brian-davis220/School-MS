import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Post()
    async createUser(@Body() createUserDto:CreateUserDto):Promise<User>{
        return this.usersService.create(createUserDto)
    }

    @Get()
    async getAllUsers():Promise<User[]>{
        return this.usersService.findAll()
    }

    @Get(':id')
    async getUserById(@Param('id') id:string):Promise<User|null>{
        const user =  this.usersService.findOne(id)
        if(!user){
            throw new NotFoundException('User not found')
        }
        return user
    }
}
