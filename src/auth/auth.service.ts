import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/user.schema';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwt: JwtService
    ) {}

    //SIGNUP LOGIC
    async signup(dto: AuthDto){
        //check if usrname exists
        const existingUser = await this.userModel.findOne({username: dto.username});

        if(existingUser){
            throw new ForbiddenException('User already exists');
        }

        //Hash Password
        const hash = await argon.hash(dto.password);

        //to create user
        const newUser = new this.userModel({
            username: dto.username,
            hash
        })

        await newUser.save();

        return {message: 'User added successfully'};
    }

    //LOGIN LOGIC
    async login(dto: AuthDto) {
        const user = await this.userModel.findOne({username: dto.username});
        //If user doesn't exist
        if(!user){
            throw new ForbiddenException('Invalid User');
        }

        const passwordMatch = await argon.verify(user.hash, dto.password);
        if(!passwordMatch){
            throw new ForbiddenException('Incorrect Password');
        }

        //Jwt Payload
        const payload = {sub: user._id, username: user.username};
        const token = await this.jwt.signAsync(payload);

        return {
            access_token: token,
        };

    }
}
