# Basic REST API

A simple RESTful API built with **Node.js**, **Express.js**, and **MongoDB** that performs CRUD (Create, Read, Update, Delete) operations on user data. This project demonstrates backend development fundamentals and API testing using Postman.

---

## Features

- Create a new user
- Get all users
- Get a user by ID
- Update user details
- Delete a user
- MongoDB database integration
- RESTful API architecture
- JSON request and response handling

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon
- Postman

---

## Project Structure

```
basic-rest-api/
│
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/basic-rest-api.git
```

### 2. Navigate to the project

```bash
cd basic-rest-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/basic-rest-api
```

### 5. Run the application

```bash
npm run dev
```

Server will start on:

```
http://localhost:5000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

---

## Sample Request Body

```json
{
  "name": "Ashutosh Mohanty",
  "email": "ashutosh@gmail.com",
  "age": 22
}
```

---

## Sample Success Response

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "_id": "...",
    "name": "Ashutosh Mohanty",
    "email": "ashutosh@gmail.com",
    "age": 22
  }
}
```

---

## Testing

The API was tested using **Postman** for all CRUD operations.

---

## Author

**Ashutosh Mohanty**

GitHub: https://github.com/ashutoshmohanty1/basic-rest-api