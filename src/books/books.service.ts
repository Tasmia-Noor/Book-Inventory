import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './entities/book.entity';
import { STATUS_CODES } from 'http';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }


  async create(createBookDto: CreateBookDto) {
    try {
      const newBook = new this.bookModel(createBookDto);
      const res = await newBook.save();
      return {
        success: true,
        message: `Book has been added successfully.`,
        data: res
      }
    }
    catch (err) {
      if (err.name === 'ValidationError') {
        throw new BadRequestException('Validation error: Please check that all required fields are provided.');
      }
      throw new InternalServerErrorException('An error occurred while creating the book.');
    }
  }


  async findAll() {
    try {
      const books = await this.bookModel.find();
      const count = await this.bookModel.countDocuments();
      return {
        success: true,
        message: 'Books retrieved successfully!',
        count,
        data: books
      }
    }
    catch (err) {
      throw new InternalServerErrorException('An error occurred while fetching books.');
    }
  }

  async findOne(id: string) {
    try {
      const book = await this.bookModel.findById(id);
      if (!book) {
        throw new NotFoundException(`Book with ID ${id} not found.`);
      }
      return {
        success: true,
        message: `Book with ID ${id} has been retrieved.`,
        data: book
      }
    }
    catch (err) {
      if (err.name === 'NotFoundException') {
        throw err;
      }
      throw new InternalServerErrorException(`An error occurred while fetching the book with id ${id}.`);
    }
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    try {
      const updatedBook = await this.bookModel.findByIdAndUpdate(id, updateBookDto, {
        new: true,
      });
      if (!updatedBook) {
        throw new NotFoundException(`Book with ID ${id} not found.`);
      }
      return {
        success: true,
        message: `Book with ID ${id} has been updated successfully.`,
        data: updatedBook
      }
    }
    catch (err) {
      if (err.name === 'NotFoundException') {
        throw err;
      }
      throw new InternalServerErrorException(`An error occurred while updating the book with id ${id}.`);
    }
  }

  async remove(id: string) {
    try {
      const deletedBook = await this.bookModel.findByIdAndDelete(id);
      if (!deletedBook) {
        throw new NotFoundException(`Book with ID ${id} not found.`);
      }
      return {
        success: true,
        message: `Book with ID ${id} has been deleted successfully.`
      }
    }
    catch (err) {
      if (err.name === 'NotFoundException') {
        throw err;
      }
      throw new InternalServerErrorException(`An error occurred while deleting the book with id ${id}.`);
    }
  }
}
