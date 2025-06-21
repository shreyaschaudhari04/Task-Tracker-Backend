import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    //Create task
    async create(userId: string, dto: CreateTaskDto){
        const task = new this.taskModel({
            ...dto,
            userId,
        });
        return await task.save();
    }

    //GEt task for a particular user using userId
    async getUserTask(userId: string) {
        return this.taskModel.find({userId});
    }

    //Delete a task for a user with user id
    async deleteUserTask(userId: string, taskId: string) {
        return this.taskModel.deleteOne({_id: taskId, userId})
    }

    //Update User
    async updateUserTask(userId: string, taskId: string, dto: UpdateTaskDto) {
        const updatedTask = await this.taskModel.findOneAndUpdate(
            {_id: taskId, userId},
            {$set: dto},
            {new: true}
        );
        if(!updatedTask) {
            throw new NotFoundException('Task not found');
        }
        return updatedTask;
    }
}
