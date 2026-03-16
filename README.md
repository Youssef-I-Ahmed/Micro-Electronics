# 🚀 MICRO-ELECTRONICS Backend API

### Phase 3 Complete — Auth · Products · Cart · Role-Based Authorization

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/Bcrypt-12100E?style=for-the-badge&logo=security&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-0080FF?style=for-the-badge&logo=joi&logoColor=white)
![dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![Multer](https://img.shields.io/badge/Multer-FF6600?style=for-the-badge&logo=files&logoColor=white)
------------------------------------------------------------------------

## 📌 Project Overview

This project is the Micro Electronics E-Commerce Backend System, currently **3 out of 5 phases completed**.

The system so far covers secure user authentication, JWT-based authorization, role-based access control, product management, and a full shopping cart with real-time stock tracking. Order processing and production hardening are planned for the upcoming phases.

------------------------------------------------------------------------

## 🎯 Project Objectives (All 5 Phases)

**Phase 1 — Authentication & User Management**
- ✅ Secure user registration with hashed passwords (bcrypt)
- ✅ Login with credential validation
- ✅ Unique email enforcement & role-based user structure (Admin / User)

**Phase 2 — Products & Shopping Cart**
- ✅ JWT token issuance on login & protected route access
- ✅ Auth middleware + role-based authorization
- ✅ Joi schema validation on registration
- ✅ Product creation (Admin only), listing, and search
- ✅ Shopping cart: add, view, update, and remove items
- ✅ Real-time stock management on cart operations

**Phase 3 — Bug Fixes & Code Hardening**
- ✅ All critical bugs fixed across controllers
- ✅ Joi validated `value` used instead of raw `req.body`
- ✅ Consistent `500` error responses across all catch blocks
- ✅ Deprecated `item.remove()` replaced with `cart.items.pull()`

**Phase 4 — Order System** *(Upcoming)*
- 🔲 Checkout: create an official order from the active cart
- 🔲 Product name & price snapshot saved at time of purchase
- 🔲 Cart automatically cleared after successful order placement
- 🔲 View all orders & view single order by ID

**Phase 5 — Centralized Error Handling & Scalability** *(Upcoming)*
- 🔲 Global error handler middleware (Mongoose, JWT, duplicate key, CastError)
- 🔲 Standardized API response structure (`success`, `msg`, `data`)
- 🔲 System architected for future expansion without restructuring

------------------------------------------------------------------------

## 🧱 Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | REST API framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **bcrypt** | Password hashing |
| **jsonwebtoken** | JWT generation & verification |
| **Joi** | Request body validation |
| **dotenv** | Environment variable management |

------------------------------------------------------------------------

## 📂 Project Structure

```
MICRO-ELECTRONICS/
│
├── Controllers/
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   └── validation/
│       └── registerSchema.js
│
├── Middlewares/
│   └── authMiddleware.js
│
├── Models/
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
│
├── Routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   └── cartRoutes.js
│
├── node_modules/
├── .env
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
```

------------------------------------------------------------------------

## 🧠 Database Design

### User Schema
```json
{
  "username":   "String (required, trimmed)",
  "email":      "String (required, unique)",
  "password":   "String (required, minlength: 6, hashed)",
  "role":       "enum: ['admin', 'user'] (default: 'user')",
  "timestamps": true
}
```

### Product Schema
```json
{
  "name":  "String (required, lowercase, trimmed)",
  "stock": "Number (required)",
  "price": "Number (required)"
}
```

### Cart Schema
```json
{
  "userId": "ObjectId → ref: User (required)",
  "items": [
    {
      "productId": "ObjectId → ref: Product (required)",
      "quantity":  "Number (required, min: 1)"
    }
  ]
}
```

------------------------------------------------------------------------

## 🔐 Authentication Endpoints

### 🔹 Register User
**POST** `/api/register`

**Request Body**
```json
{
  "username": "John",
  "email": "john@example.com",
  "password": "123456",
  "role": "user"
}
```

**Response** `201`
```json
{
  "msg": "User created successfully",
  "data": { "...userObject" }
}
```

---

### 🔹 Login User
**POST** `/api/login`

**Request Body**
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

**Response** `200`
```json
{
  "msg": "Login successful",
  "token": "<JWT_TOKEN>"
}
```

> **Note:** Use the returned token as a `Bearer` token in the `Authorization` header for all protected routes.

------------------------------------------------------------------------

## 🛍️ Product Endpoints

### 🔹 Create Product *(Admin only)*
**POST** `/api/createProduct` — `Authorization: Bearer <token>`

**Request Body**
```json
{
  "name": "Arduino Uno",
  "stock": 50,
  "price": 12.99
}
```

**Response** `201`
```json
{
  "message": "Product created successfully",
  "data": { "...productObject" }
}
```

---

### 🔹 Get All Products
**GET** `/api/products`

**Response** `200`
```json
{
  "success": true,
  "count": 10,
  "data": [ "...products" ]
}
```

---

### 🔹 Get Product by Name
**GET** `/api/products/:name`

**Response** `200`
```json
{
  "msg": "Product fetched successfully",
  "success": true,
  "count": 1,
  "data": [ "...product" ]
}
```

------------------------------------------------------------------------

## 🛒 Cart Endpoints

> All cart routes require: `Authorization: Bearer <token>`

### 🔹 Add Item to Cart
**POST** `/api/cart/add`

**Request Body**
```json
{ "productId": "<product_id>", "quantity": 2 }
```

**Response** `200`
```json
{
  "msg": "Product added to cart successfully!!",
  "success": true,
  "count": 1,
  "data": { "...cart" },
  "totalPrice": 25.98
}
```

---

### 🔹 Get Cart Items
**GET** `/api/cart/items`

**Response** `200`
```json
{
  "items": [ "...cartItems" ]
}
```

---

### 🔹 Update Cart Item Quantity
**PUT** `/api/cart/update/:itemId`

**Request Body**
```json
{ "quantity": 5 }
```

**Response** `200`
```json
{
  "success": true,
  "msg": "Cart item updated successfully",
  "count": 1,
  "data": { "...cart" },
  "totalPrice": 64.95
}
```

---

### 🔹 Remove Item from Cart
**DELETE** `/api/cart/remove/:itemId`

**Response** `200`
```json
{
  "success": true,
  "msg": "Cart item removed successfully!!",
  "count": 0,
  "data": { "...cart" },
  "totalPrice": 0
}
```

------------------------------------------------------------------------

## 📌 API Endpoints Summary

| Method | Endpoint | Auth | Role | Description |
|--------|----------|------|------|-------------|
| POST | `/api/register` | ❌ | Any | Register new user |
| POST | `/api/login` | ❌ | Any | Login & receive JWT |
| POST | `/api/createProduct` | ✅ | Admin | Create a product |
| GET | `/api/products` | ❌ | Any | Get all products |
| GET | `/api/products/:name` | ❌ | Any | Search product by name |
| POST | `/api/cart/add` | ✅ | User | Add item to cart |
| GET | `/api/cart/items` | ✅ | User | View cart items |
| PUT | `/api/cart/update/:itemId` | ✅ | User | Update item quantity |
| DELETE | `/api/cart/remove/:itemId` | ✅ | User | Remove item from cart |

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone <your-repository-link>
cd MICRO-ELECTRONICS
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:
```env
PORT=4000
DB_URL=mongodb://127.0.0.1:27017/micro-electronics
JWT_SECRET=your_super_secret_key
```

### 4️⃣ Run Server
```bash
node app.js
# or with auto-reload
npx nodemon app.js
```

Server runs at: `http://localhost:4000`

------------------------------------------------------------------------

## 🏁 Project Status

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Authentication & User Management | 🟢 Completed |
| Phase 2 | Products, Cart & Authorization | 🟢 Completed |
| Phase 3 | Bug Fixes & Code Hardening | 🟢 Completed |
| Phase 4 | Order System & Checkout | 🟡 In Progress |
| Phase 5 | Centralized Error Handling & Scalability | 🔵 Planned |

------------------------------------------------------------------------

## 👨‍💻 Author

Developed as part of a backend engineering practice project focused on building scalable and secure REST APIs.

**Yousef Ismail**
Data Science & AI-Based Software Development Trainee

🔗 [LinkedIn Profile](https://www.linkedin.com/in/yousef-ismail87/)

------------------------------------------------------------------------

### ⭐ If you found this project helpful, consider giving it a star!
