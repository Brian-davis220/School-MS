import { Body, Controller, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

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

    @Patch(":id")
    async updateUser(@Param('id') id:string,@Body() updateUserDto:UpdateUserDto){
        return this.usersService.update(id,updateUserDto)
    }
}
