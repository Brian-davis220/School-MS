import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async create(createUserDto:CreateUserDto): Promise<User>{
        if(createUserDto.role==='Admin'){
            throw new Error('Cannot create admin via this endpoint')
        }

        const hashedpassword = await bcrypt.hash(createUserDto.password,10);
        const user = this.userRepository.create({
            ...createUserDto,
            password:hashedpassword
        })

        return this.userRepository.save(user)
    }

    async findAll():Promise<User[]>{
       return  this.userRepository.find({
        select:['id','username','email','role']
       });
    }

    async findOne(id:string):Promise<User|null>{
        return this.userRepository.findOne({where:{id},
        select:['id','username','email','role']})
    }
}
