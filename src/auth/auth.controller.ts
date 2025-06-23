import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Get('ping')
    @HttpCode(HttpStatus.OK)
    pingJob(){
        return { message: 'Successful'};
    }

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    }

    @Post('login')
    login(@Body() dto: AuthDto ) {
        return this.authService.login(dto);
    }
}
