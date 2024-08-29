import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {

    @ApiProperty({ description: 'Title of the book' })
    @Prop({ required: true, unique: true })
    title: string;

    @ApiProperty({ description: 'Author of the book' })
    @Prop({ required: true })
    author: string;

    @ApiProperty({ description: 'Price of the book' })
    @Prop({ required: true })
    price: number;

}

export const BookSchema = SchemaFactory.createForClass(Book);