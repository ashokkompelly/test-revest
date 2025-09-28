# Microservice-based Application Assignment

## Overview

This project demonstrates a **microservice-based application** using:

- **Backend:** NestJS (with Products and Orders modules)
- **Frontend:** Next.js + TypeScript (dynamic form rendering based on JSON)
- **Communication:** Orders module calls Products module internally
- **Styling:** Material UI
- **Data Persistence:** In-memory (simulated with arrays)

---

## Folder Structure

```
app/
├── backend/
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── services/products/
│   │   └── services/orders/
│   ├── package.json
│   ├── tsconfig.json
│   └── nest-cli.json
└── frontend/
    ├── src/
    ├── package.json
    └── tsconfig.json
```

---

## Backend (NestJS) Setup

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Run the backend server

```bash
npm run start:dev
```

- Products API: `http://localhost:3001/products`  
- Orders API: `http://localhost:3001/orders`  

### 3. Test APIs

- **Add Product:**

```bash
POST /products
{
  "name": "Laptop",
  "price": 1200,
  "stock": 5
}
```

- **List Products:** `GET /products`
- **Create Order:**

```bash
POST /orders
{
  "productId": 1,
  "quantity": 2
}
```

- **List Orders:** `GET /orders`

---

## Frontend (Next.js) Setup

### 1. Install dependencies

```bash
cd frontend
npm install
```

### 2. Run the frontend server

```bash
npm run dev
```

- Open browser at `http://localhost:3000` (or the port your frontend uses)

### 3. Features

- Dynamic form rendering based on JSON configuration
- Supports **TEXT**, **LIST**, and **RADIO** field types
- Form validation using **React Hook Form**
- Sends data to backend APIs for creating products/orders
- Responsive design with Material UI

---

## JSON Form Example

```json
{
  "data": [
    {
      "id": 1,
      "name": "Full Name",
      "fieldType": "TEXT",
      "minLength": 1,
      "maxLength": 100,
      "defaultValue": "John D",
      "required": true
    },
    {
      "id": 2,
      "name": "Email",
      "fieldType": "TEXT",
      "minLength": 1,
      "maxLength": 50,
      "defaultValue": "hello@mail.com",
      "required": true
    },
    {
      "id": 6,
      "name": "Gender",
      "fieldType": "LIST",
      "defaultValue": "1",
      "required": true,
      "listOfValues1": ["Male", "Female", "Others"]
    },
    {
      "id": 7,
      "name": "Love React?",
      "fieldType": "RADIO",
      "defaultValue": "1",
      "required": true,
      "listOfValues1": ["Yes", "No"]
    }
  ]
}
```

> Changing the `fieldType` or label in JSON automatically updates the frontend form.

---

## Notes

- Currently, backend data is stored **in-memory**; restarting the server clears data.
- This project demonstrates **microservice principles** in a single NestJS app with multiple modules.
- Frontend dynamically adapts to JSON changes without changing code.

---

## How to Run Full Application

1. Start backend:  
```bash
cd backend
npm run start:dev
```

2. Start frontend:  
```bash
cd frontend
npm run dev
```

3. Open browser and test form and APIs.

---

## Author

Ashok Kompelly

