import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";


export type TaskDocument = Task & Document;

@Schema({timestamps: true})
export class Task {
    @Prop({required: true})
    title: string;

    @Prop()
    description: string;

    @Prop({type: Types.ObjectId, ref: 'User', required: true})
    userId: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);