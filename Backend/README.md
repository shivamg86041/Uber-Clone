# Writing the comprehensive README.md file for the entire application.

readme_content = """
# User & Captain Management API  

This API manages users and captains, handling registration, authentication, profile management, and token-based security.  

---

## **1. User Endpoints**  

### **POST** `/users/register`  
Register a new user.  

**Request Body:**  
- `fullname.firstname` (string, required): Min 3 characters.  
- `fullname.lastname` (string, optional): Min 3 characters.  
- `email` (string, required): Must be a valid email.  
- `password` (string, required): Min 6 characters.  

**Response:**  
- `201 Created`: Returns a token and user details.  
- `400 Bad Request`: Validation errors.  

---

### **POST** `/users/login`  
Authenticate a user.  

**Request Body:**  
- `email` (string, required): Must be valid.  
- `password` (string, required): Must not be empty.  

**Response:**  
- `200 OK`: Returns a token and user details.  
- `400/401`: Invalid credentials.  

---

### **GET** `/users/profile`  
Retrieve the authenticated user's profile.  

**Headers:**  
- `Authorization` (string, required): Bearer token.  

**Response:**  
- `200 OK`: Returns user details.  
- `401 Unauthorized`: Invalid or expired token.  

---

### **GET** `/users/logout`  
Log out the authenticated user.  

**Headers:**  
- `Authorization` (string, required): Bearer token.  

**Response:**  
- `200 OK`: Successfully logged out.  
- `401 Unauthorized`: Invalid or expired token.  

---

## **2. Captain Endpoints**  

### **POST** `/captains/register`  
Register a new captain.  

**Request Body:**  
- `fullname.firstname` (string, required): Min 3 characters.  
- `fullname.lastname` (string, optional): Min 3 characters.  
- `email` (string, required): Must be a valid email.  
- `password` (string, required): Min 6 characters.  
- `vehicle.color` (string, required): Min 3 characters.  
- `vehicle.plate` (string, required): Min 3 characters.  
- `vehicle.capacity` (number, required): Min value 1.  
- `vehicle.vehicleType` (string, required): Must be one of `car`, `motorcycle`, or `auto`.  

**Response:**  
- `201 Created`: Returns a token and captain details.  
- `400 Bad Request`: Validation errors or captain already exists.  

---

### **POST** `/captains/login`  
Authenticate a captain.  

**Request Body:**  
- `email` (string, required): Must be valid.  
- `password` (string, required): Must not be empty.  

**Response:**  
- `200 OK`: Returns a token and captain details.  
- `400/401`: Invalid credentials.  

---

### **GET** `/captains/profile`  
Retrieve the authenticated captain's profile.  

**Headers:**  
- `Authorization` (string, required): Bearer token or valid cookie.  

**Response:**  
- `200 OK`: Returns captain profile details.  
- `401 Unauthorized`: Invalid or expired token.  

---

### **GET** `/captains/logout`  
Log out the authenticated captain by blacklisting the token.  

**Headers:**  
- `Authorization` (string, required): Bearer token or valid cookie.  

**Response:**  
- `200 OK`: Successfully logged out.  
- `401 Unauthorized`: Invalid or expired token.  
- `401 Unauthorized`: Token is blacklisted.  

---

## **Authentication Middleware**  

### `authCaptain` Middleware  
Authenticates captains by verifying their tokens and checking if the token is blacklisted.  

**Process:**  
1. Extracts the token from cookies or the `Authorization` header.  
2. Validates the token existence.  
3. Checks if the token is blacklisted.  
4. Verifies the token using `JWT_SECRET`.  
5. Attaches captain details to `req.captain`.  

**Error Responses:**  
- `401 Unauthorized`: Missing, blacklisted, invalid, or expired token.  

---

## **Setup**  

1. Clone the repository:  
   ```bash  
   git clone <repository_url>  
