# Creating a full-fledged README.md file for the entire app

full_readme_content = """
# User & Captain Management API  

This API handles user and captain registrations, authentication, and profile management.  

---

## Endpoints  

### **1. User Endpoints**  

#### **POST** `/users/register`  
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

#### **POST** `/users/login`  
Login a user.  

**Request Body:**  
- `email` (string, required): Must be valid.  
- `password` (string, required): Must not be empty.  

**Response:**  
- `200 OK`: Returns a token and user details.  
- `400/401`: Invalid credentials.  

---

#### **GET** `/users/profile`  
Fetch the authenticated user's profile.  

**Headers:**  
- `Authorization` (string, required): Bearer token.  

**Response:**  
- `200 OK`: Returns user details.  
- `401 Unauthorized`: Invalid or expired token.  

---

#### **GET** `/users/logout`  
Logout the authenticated user.  

**Headers:**  
- `Authorization` (string, required): Bearer token.  

**Response:**  
- `200 OK`: Successfully logged out.  
- `401 Unauthorized`: Invalid or expired token.  

---

### **2. Captain Endpoints**  

#### **POST** `/captains/register`  
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

#### **Authentication and Validation Details**  
- **Password Hashing:** Passwords are hashed before storage for security.  
- **Token Generation:** Tokens are generated using JWT with a 24-hour expiry.  
- **Validation Middleware:** `express-validator` is used to validate request bodies.  

---

## **Models**  

### User Model  
- `fullname`: Contains `firstname` and `lastname`.  
- `email`: Must be unique and valid.  
- `password`: Encrypted before storage.  

### Captain Model  
- `fullname`: Contains `firstname` and `lastname`.  
- `email`: Must be unique and valid.  
- `password`: Encrypted before storage.  
- `vehicle`: Contains `color`, `plate`, `capacity`, and `vehicleType`.  

---

## **Setup**  

1. Clone the repository:  
   ```bash  
   git clone <repository_url>  
