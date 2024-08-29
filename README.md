# **My React & Node.js Application**

This project is a full-stack web application built using React, Node.js, TypeScript, Prisma, and PostgreSQL. The frontend is a React application, while the backend is a Node.js server using Express and Prisma ORM to interact with a PostgreSQL database. The backend application is hosted on Render.

### Backend URL :: https://future-skills.onrender.com/ping

## **Table of Contents**

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)

## **Features**

- Full-stack application with a React frontend and Node.js backend.
- Uses Prisma ORM to interact with a PostgreSQL database.
- Hosted on Render with continuous deployment from GitHub.
- Responsive design with Tailwind CSS.
- Built-in error handling and validation.

## **Prerequisites**

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **PostgreSQL** (v12 or higher, if running the database locally)

## **Installation**

Follow these steps to install and set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   Navigate to the `backend` and `frontend` directories and install the dependencies:

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

## **Environment Variables**

Create a `.env` file in the `backend` directory with the following environment variables:

```bash
# .env
DATABASE_URL=postgresql://username:password@host:port/database_name?schema=public
PORT=5000
```

Make sure to replace the placeholders with your actual database credentials.

Create a `.env` file in the `frontend` directory with the following environment variables:

```bash
# .env
VITE_BACKEND_URL=https://future-skills.onrender.com
```

Or your backend server

## **Database Setup**

1. **Prisma Migrations:**

   Run the following commands to set up the database and apply migrations:

   ```bash
   npx prisma generate --schema=./prisma/schema.prisma
   npx prisma migrate dev --schema=./prisma/schema.prisma

   ```

   These commands will apply the necessary database schema migrations and generate the Prisma client.

## **Running the Application**

### **Backend:**

To start the backend server:

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:5000`.

### **Frontend:**

To start the frontend React application:

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:3000`.

Then make the post request ony by one to enter the data in database.

# 1. Insert "Branches" card

curl -X POST http://localhost:5000/api/cards \
 -H "Content-Type: application/json" \
 -d '{
"title": "Branches",
"description": "Abstract Branches lets you manage, version, and document your designs in one place."
}'

# 2. Insert "Manage your account" card

curl -X POST http://localhost:5000/api/cards \
-H "Content-Type: application/json" \
-d '{
"title": "Manage your account",
"description": "Configure your account settings, such as your email, profile details, and password."
}'

# 3. Insert "Manage organizations, teams, and projects" card

curl -X POST http://localhost:5000/api/cards \
-H "Content-Type: application/json" \
-d '{
"title": "Manage organizations, teams, and projects",
"description": "Use Abstract organizations, teams, and projects to organize your people and your work."
}'

# 4. Insert "Manage billing" card

curl -X POST http://localhost:5000/api/cards \
-H "Content-Type: application/json" \
-d '{
"title": "Manage billing",
"description": "Change subscriptions and payment details."
}'

# 5. Insert "Authenticate to Abstract" card

curl -X POST http://localhost:5000/api/cards \
-H "Content-Type: application/json" \
-d '{
"title": "Authenticate to Abstract",
"description": "Set up and configure SSO, SCIM, and Just-in-Time provisioning."
}'

# 6. Insert "Abstract support" card

curl -X POST http://localhost:5000/api/cards \
-H "Content-Type: application/json" \
-d '{
"title": "Abstract support",
"description": "Get in touch with a human."
}'

## **API Documentation**

### **Base URL**

The base URL for all API endpoints is `http://localhost:5000/api`.

### **List of APIs**

#### **1. Get All Cards**

- **Endpoint**: `/cards`
- **Method**: `GET`
- **Description**: Retrieves a list of all help cards.
- **Response**:
  ```json
  [
    {
      "id": "1",
      "title": "Branches",
      "description": "Abstract Branches lets you manage, version, and document your designs in one place."
    },
    ...
  ]
  ```

#### **2. Get a Specific Card by Title**

- **Endpoint**: `/cards/:title`
- **Method**: `GET`
- **Description**: Retrieves a specific card by its title.
- **Path Parameters**:
  - `title`: The title of the card you want to retrieve.
- **Response**:
  ```json
  {
    "id": "1",
    "title": "Branches",
    "description": "Abstract Branches lets you manage, version, and document your designs in one place."
  }
  ```

#### **3. Create a New Card**

- **Endpoint**: `/cards`
- **Method**: `POST`
- **Description**: Creates a new help card.
- **Request Body**:
  ```json
  {
    "title": "New Card Title",
    "description": "Description of the new card."
  }
  ```
- **Response**:
  ```json
  {
    "id": "generated_id",
    "title": "New Card Title",
    "description": "Description of the new card."
  }
  ```

## **Technologies Used**

- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for Node.js.
- **Typescript**: For type safety.
- **Prisma**: ORM for PostgreSQL.
- **PostgreSQL**: Relational database.
- **Tailwind CSS**: Utility-first CSS framework.
- **Render**: Hosting platform for web apps and databases.

## **Troubleshooting**

If you encounter issues during setup or deployment, check the following:

- Ensure your environment variables are set correctly.
- Check the Render logs for any deployment errors.
- Ensure your PostgreSQL database is accessible.
