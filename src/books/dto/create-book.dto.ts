import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ description: 'Title of the book' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Author of the book' })
  @IsString()
  author: string;

  @ApiProperty({ description: 'Price of the book' })
  @IsNumber()
  price: number;
}