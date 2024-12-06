
# User Registration Endpoint Documentation

## **POST** `/users/register`

This endpoint registers a new user and returns an authentication token along with user details.

---

### **Request Body**

The following fields are required in the request body:

| Field               | Type     | Description                                       | Validation                                              |
|---------------------|----------|---------------------------------------------------|--------------------------------------------------------|
| `fullname.firstname`| `string` | First name of the user                            | Must be at least 3 characters long.                   |
| `fullname.lastname` | `string` | Last name of the user (optional)                  | If provided, must be at least 3 characters long.       |
| `email`             | `string` | Email address of the user                         | Must be a valid email format.                         |
| `password`          | `string` | Password for the user                             | Must be at least 6 characters long.                   |

---

### **Response**

#### **Success (201: Created)**  
When the user is successfully registered, the endpoint returns the following response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60f6a7f95c12f9aef8abcd12",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### **Error Responses**

| Status Code | Error Message                          | Description                                            |
|-------------|----------------------------------------|--------------------------------------------------------|
| `400`       | `"All fields are required"`           | Missing required fields in the request body.          |
| `400`       | `"Invalid Email"`                     | The provided email format is invalid.                 |
| `400`       | `"First name must be at least 3 characters long"` | The `firstname` does not meet the minimum length requirement. |
| `400`       | `"Password must be at least 6 characters long"` | The `password` does not meet the minimum length requirement. |

---

### **Validation**

The request body is validated using `express-validator`. The server ensures all required fields are present and meet the specified criteria.

```javascript
[
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
]
```

---

### **Usage Example**

**Request:**
```http
POST /users/register HTTP/1.1
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

**Response:**
```http
HTTP/1.1 201 Created
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60f6a7f95c12f9aef8abcd12",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
