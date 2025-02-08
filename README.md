
# Lab 04 – Mongoose Validation

This project is a NodeJS + Express + MongoDB application created for **COMP 3133 – Full Stack Development II**. 
It demonstrates data validation using **Mongoose** and includes RESTful APIs to perform CRUD operations on user data.

## Project Setup and Requirements

### 1. Install Dependencies
Run the following command to install the required modules:
```bash
npm install
```

### 2. Technologies Used
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- dotenv

### 3. Setup Instructions
1. Clone the repository.
2. Create a `.env` file in the project root with the following content:
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   PORT=8081
   ```
3. Start the server:
   ```bash
   node server.js
   ```

## Schema and Validation
The following fields are validated using Mongoose:

- **name**: Required field.
- **username**: Minimum length of 4 characters.
- **email**: Must be a valid email format.
- **address.city**: Only alphabets and spaces allowed.
- **address.zipcode**: Must follow the format `12345-1234`.
- **phone**: Format `1-123-123-1234` (1-XXX-XXX-XXXX).
- **website**: Must be a valid URL (`http://` or `https://`).

## REST API Endpoints

### **1. POST `/users`**
- Inserts a single user into the database.
- Example JSON request body:
  ```json
  {
    "name": "John Doe",
    "username": "john_doe",
    "email": "john.doe@example.com",
    "address": {
      "street": "123 Main St",
      "suite": "Apt 1",
      "city": "Springfield",
      "zipcode": "12345-6789"
    },
    "phone": "1-123-456-7890",
    "website": "http://example.com",
    "company": {
      "name": "Example Corp",
      "catchPhrase": "Example catchphrase",
      "bs": "example business"
    }
  }
  ```

### **2. POST `/users/bulk-insert`**
- Inserts multiple users from the `UsersData.json` file.
- No request body required.

### **Validation Errors**
- Username too short: Returns a validation error.
- Invalid email, phone, URL, or zip code format: Returns a validation error with a descriptive message.

## Testing Instructions
 Used **Postman** to test the endpoints.


---

### **Author**
- **Student Name**: Melina Behzadi Nejad
- **Student ID**: 101447858
