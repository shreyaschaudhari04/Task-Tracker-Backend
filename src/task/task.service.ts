import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async create(userId: string, dto: CreateTaskDto){
        const task = new this.taskModel({
            ...dto,
            userId,
        });
        return await task.save();
    }

    async getUserTask(userId: string) {
        return this.taskModel.find({userId});
    }
}
