import { ApiProperty } from "@nestjs/swagger";
import { Book } from "../entities/book.entity";

export class GeneralApiResponse {
    @ApiProperty({ description: 'Success flag' })
    success: boolean;

    @ApiProperty({ description: 'Message' })
    message: string;

    @ApiProperty({ description: 'List of books' })
    data: Book[];
}

export class GetAllBooksResponse {
    @ApiProperty({ description: 'Success flag' })
    success: boolean;

    @ApiProperty({ description: 'Message' })
    message: string;
    
    @ApiProperty({ description: 'Count of books' })
    count: number;

    @ApiProperty({ description: 'List of books' })
    data: Book[];
}