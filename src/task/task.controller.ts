import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
@UseGuards(JwtGuard)
export class TaskController {
    constructor(private taskService: TaskService) {}
    
    @Post()
    createTask(@Req() req, @Body() dto:CreateTaskDto) {
        return this.taskService.create(req.user.sub, dto);
    }
    
    @Get()
    getTasks(@Req() req){
       return this.taskService.getUserTask(req.user.sub);
    }
    
}
