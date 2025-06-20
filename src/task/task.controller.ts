import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';

@Controller('tasks')
@UseGuards(JwtGuard)
export class TaskController {
    @Get()
    getTasks(@Req() req){
        console.log('User: ', req.user);
        return [{title: "First Task", createdBy: req.user.username}];
    }
    
}
