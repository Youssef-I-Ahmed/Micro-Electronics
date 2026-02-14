# 🚀 MICRO-ELECTRONICS Backend API

### Phase 1 -- Authentication & User Management

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![bcrypt](https://img.shields.io/badge/Bcrypt-12100E?style=for-the-badge&logo=security&logoColor=white)
![dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)

------------------------------------------------------------------------

## 📌 Project Overview

This project represents **Phase 1** of the Micro Electronics E-Commerce
Backend System.

The objective of this phase is to build a **secure, scalable
authentication foundation** that will support future e-commerce features
such as product management, shopping cart, and order processing.

This backend is designed with clean architecture and scalability in
mind, ensuring that additional features can be integrated without
restructuring the system.

------------------------------------------------------------------------

## 🎯 Phase 1 Objectives

-   Implement secure user registration
-   Implement secure login authentication
-   Hash and protect user passwords
-   Enforce unique email accounts
-   Introduce role-based user structure (Admin / User)
-   Prepare architecture for future expansion

------------------------------------------------------------------------

## 🧱 Tech Stack

-   **Node.js** -- JavaScript runtime environment\
-   **Express.js** -- Web framework for building REST APIs\
-   **MongoDB** -- NoSQL database\
-   **Mongoose** -- ODM for MongoDB\
-   **bcrypt** -- Password hashing\
-   **dotenv** -- Environment variable management

------------------------------------------------------------------------

## 📂 Project Structure

    MICRO-ELECTRONICS/
    │
    ├── Models/
    │   └── User.js
    │
    ├── node_modules/
    ├── .env
    ├── .gitignore
    ├── app.js
    ├── package.json
    └── package-lock.json

------------------------------------------------------------------------

## 🧠 Database Design

### User Schema

    {
      username: String (required, trimmed),
      email: String (required, unique),
      password: String (required, minlength: 6),
      role: ["admin", "user"] (default: "user")
    }

### Key Features

-   Unique email validation
-   Password minimum length enforcement
-   Enum-based role validation
-   Automatic timestamps (createdAt, updatedAt)
-   Secure password storage using bcrypt hashing

------------------------------------------------------------------------

## 🔐 Authentication Flow

### 🔹 Register User

**POST** `/register`

**Request Body**

    {
      "username": "John",
      "email": "john@example.com",
      "password": "123456",
      "role": "user"
    }

**Response**

    {
      "msg": "Done Created User",
      "data": { ...userObject }
    }

------------------------------------------------------------------------

### 🔹 Login User

**POST** `/login`

**Request Body**

    {
      "email": "john@example.com",
      "password": "123456"
    }

**Response**

    {
      "msg": "Success Login"
    }

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

    git clone <your-repository-link>
    cd MICRO-ELECTRONICS

### 2️⃣ Install Dependencies

    npm install

### 3️⃣ Configure Environment Variables

Create a `.env` file:

    PORT=4000
    DB_URL=mongodb://127.0.0.1:27017/micro-electronics

### 4️⃣ Run Server

    node app.js

or

    npx nodemon app.js

Server runs at:

    http://localhost:4000

------------------------------------------------------------------------

## 📌 API Endpoints Summary

  Method   Endpoint    Description
  -------- ----------- -------------------
  POST     /register   Create new user
  POST     /login      Authenticate user

------------------------------------------------------------------------

## 🚧 Upcoming Features (Phase 2)

-   JWT-based Authentication
-   Role-based Authorization Middleware
-   Product Management (Admin)
-   Product Browsing & Search (User)
-   Shopping Cart System
-   Order Processing
-   Centralized Error Handling
-   Standardized API Response Structure

------------------------------------------------------------------------

## 🏁 Project Status

🟢 Phase 1: Completed\
🟡 Phase 2: In Progress\
🔵 Final System: Under Development

------------------------------------------------------------------------

## 👨‍💻 Author

Developed as part of a backend engineering practice project focused on
building scalable and secure REST APIs.

## 🔗 LinkedIn:
Yousef Ismail

Data Science & AI-Based Software Development Trainee

👉 (https://www.linkedin.com/in/yousef-ismail87/)


------------------------------------------------------------------------

### ⭐ If you found this project helpful, consider giving it a star!
