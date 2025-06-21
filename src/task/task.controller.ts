import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task.dto';

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

    @Delete(':id')
    deleteTask(@Param('id') id:string, @Req() req){
        return this.taskService.deleteUserTask(req.user.sub, id);
    }

    @Patch(':id')
    updateTask(@Param('id') id:string, @Body() dto: UpdateTaskDto, @Req() req) {
        return this.taskService.updateUserTask(req.user.sub, id, dto);
    }
    
}
