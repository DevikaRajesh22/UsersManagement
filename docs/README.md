# User Management System with Redux, JWT, React, MongoDB, Express, and Node

## Overview

This User Management System is a full-stack application that utilizes Redux for global state management, JWT for authentication and authorization, React for the frontend, MongoDB for the backend database, and Express and Node.js for server-side development. The system is designed to have both a user-side and an admin-side.

## Features

### User-Side Features

1. **User Registration:**

   - Users can register with the system by providing necessary details such as name, email, phone, and password.

2. **User Login:**

   - Registered users can log in securely using their credentials.

3. **Home Page:**

   - Users are greeted with a home page displaying relevant information.

4. **Profile Page:**

   - Users can view their profile information, including name, email, phone, and other details.

5. **Update Profile:**
   - Users have the ability to update their profile details, ensuring accurate and up-to-date information.

### Admin-Side Features

1. **Admin Login:**

   - Admins can securely log in using their credentials.

2. **User List:**

   - Admins have access to a list of all users, providing an overview of registered users.

3. **Search Users:**

   - Admins can search for specific users using various criteria, facilitating efficient user management.

4. **Edit User Details:**

   - Admins can edit user details, allowing them to modify information when necessary.

5. **Add New User:**

   - Admins have the ability to add new users to the system, facilitating user onboarding.

6. **Delete User:**

   - Admins can delete user accounts, ensuring effective user management.

7. **Block User:**
   - Admins can block or deactivate user accounts if necessary.

## Technologies Used

- **Frontend:**

  - React
  - Redux for state management

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB for data storage

- **Authentication:**
  - JSON Web Tokens (JWT) for secure user authentication and authorization

## Getting Started

1. **Clone the Repository:**
   - git clone https://github.com/your-username/user-management-system.git
2. **Install dependencies:**
   - cd user-management-system
   - npm install
3. **Setup MongoDB:**
- Create a MongoDB database and update the connection string in the server configuration.
4. **Environment Variables:**
- Create a .env file in the server directory and configure environment variables, including JWT secret, MongoDB connection string, etc.
5. **Run the Application:**
- Start backend server :
cd server
npm start
- Start frontend client : 
cd client
npm start
6. **Access the Application:**
- Open your browser and go to http://localhost:3000 to access the User Management System.

## Folder Structure
- client/: React frontend application
- server/: Express.js backend server
- docs/: Documentation and README files

## License
- This project is licensed under the MIT License.

## Author
- Devika Rajesh


