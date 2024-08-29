## Project Title
Book Management API using NestJS with Swagger Integration

## Description
RESTful API to manage a book inventory system, with Swagger for documentation and testing.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
Test the APIs with swagger or postman

## Using Swagger Documentation
This project utilizes Swagger to provide interactive API documentation and enable testing directly within the browser.

## Accessing Swagger UI:

Start your development server (e.g., npm run start:dev). By default, Swagger UI is usually accessible at http://localhost:3000/api-docs.

## Exploring the API:

The Swagger UI displays all available API endpoints, allowing you to explore their functionalities, parameters, request and response formats. You can click on each endpoint to see detailed information and available options.

## Testing with Swagger:

Swagger UI provides a convenient way to test your API endpoints directly from the browser. You can:

1. Select an endpoint (e.g., GET /users)
2. Set any required parameters in the request body
3. Click "Try it out" to send the request
4. View the response code and payload

This allows you to quickly test your API functionality and verify expected behavior.
Here are some more examples of how to use your API endpoints.
1. Method: GET
Endpoint: /books
Expected Response:
{
  "success": true,
  "message": "Books retrieved successfully!",
  "count":1
  "data": [{
    "_id": "64c49587f73672058648796d",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 19.99
  }]
}

2. Method: POST
Endpoint: /books
Request Body:
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 19.99
}

Expected Response:
{
  "success": true,
  "message": "Book has been added successfully.",
  "data": {
    "_id": "64c49587f73672058648796d",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 19.99
  }
}