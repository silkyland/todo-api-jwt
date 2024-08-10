Here's a `README.md` file that provides instructions for setting up, running, and using your Todo API, including the `create`, `read`, `update`, and `delete` (CRUD) operations for todos.

### 1. **Create the `README.md` File**

Create the `README.md` file in the root directory of your project:

```bash
touch README.md
```

### 2. **Add Content to `README.md`**

Open the `README.md` file and add the following content:

```markdown
# Todo API

A simple Todo API built with Node.js, Express, TypeScript, MongoDB, and Docker. This API allows users to manage their todos with authentication via JWT.

## Features

- User authentication with JWT
- CRUD operations for todos
- TypeScript for strong typing
- MongoDB for data storage
- Docker for containerization

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/todo-api.git
   cd todo-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create an `.env` file**:

   Create an `.env` file in the root directory and add the following environment variables:

   ```bash
   JWT_SECRET=your_jwt_secret
   MONGO_URI=mongodb://mongo:27017/todoapp
   ```


## API Endpoints

### Authentication

- **Register a new user**: `POST /api/auth/register`
- **Login a user**: `POST /api/auth/login`

### Todos

- **Create a new todo**: `POST /api/todos`

  **Request Body**:

  ```json
  {
    "title": "Sample Todo",
    "description": "This is a sample todo."
  }
  ```

- **Get all todos for the authenticated user**: `GET /api/todos`

- **Update a todo**: `PUT /api/todos/:id`

  **Request Body**:

  ```json
  {
    "title": "Updated Todo",
    "description": "This is an updated todo.",
    "completed": true
  }
  ```

- **Delete a todo**: `DELETE /api/todos/:id`

## Usage

1. **Register a new user**:

   Send a `POST` request to `/api/auth/register` with a JSON body containing `username`, `email`, and `password`.

   Example:

   ```json
   {
     "username": "johndoe",
     "email": "johndoe@example.com",
     "password": "yourpassword"
   }
   ```

2. **Login a user**:

   Send a `POST` request to `/api/auth/login` with a JSON body containing `email` and `password`.

   Example:

   ```json
   {
     "email": "johndoe@example.com",
     "password": "yourpassword"
   }
   ```

   The response will include a JWT token that should be used for authenticated requests.

3. **Create a new todo**:

   Send a `POST` request to `/api/todos` with a JSON body containing `title` and `description`.

   Example:

   ```json
   {
     "title": "New Todo",
     "description": "This is a new todo."
   }
   ```

   Make sure to include the JWT token in the `Authorization` header as `Bearer <token>`.

4. **Get all todos**:

   Send a `GET` request to `/api/todos`.

   Include the JWT token in the `Authorization` header as `Bearer <token>`.

5. **Update a todo**:

   Send a `PUT` request to `/api/todos/:id` with a JSON body containing `title`, `description`, and `completed`.

   Example:

   ```json
   {
     "title": "Updated Todo",
     "description": "This todo has been updated.",
     "completed": true
   }
   ```

   Include the JWT token in the `Authorization` header as `Bearer <token>`.

6. **Delete a todo**:

   Send a `DELETE` request to `/api/todos/:id`.

   Include the JWT token in the `Authorization` header as `Bearer <token>`.

## Running the Application Locally

1. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application will be running on `http://localhost:3000`.

2. **Build the TypeScript files**:

   ```bash
   npm run build
   ```

3. **Start the production server**:

   ```bash
   npm start
   ```

## Running with Docker

To run the application using Docker, simply use the provided `easy.sh` script:

```bash
./easy.sh
```

This will build the Docker containers and start the application. The API will be accessible at `http://localhost:3000`.

## License

This project is licensed under the MIT License.
```

### 3. **Save the `README.md` File**

After adding the content, save the `README.md` file.

This `README.md` provides a comprehensive guide on setting up, running, and using your Todo API, including how to perform CRUD operations on todos.

Let me know if you need any more details or further adjustments!