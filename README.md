<h1 align='center'><b>Exhibition</b></h1>
A simple buy exhibtion ticket platform, developed full-stack with Node.js, express framework and MySQL database.  

<br>
<br>
<br>

# Table of Contetns
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
  - [Run Server](#run-server)
- [Seed Users](#seed-users)
- [Tech Stack](#tech-stack)
- [Demo](#demo)

<br>
<br>

# Features
A few things you can do on Exhibition :
- Browse Exhibition, video and collections
- Buy tickets for the Exhibtions
- Use tickets for the Exhibtions 



<br>
<br>

# Getting Started
## **Prerequisites**
Make sure you already have `Node.js` and `npm` installed, and have `MySQL` account.

<br>

## **Installing**
1. Clone the project and go to the project directory
```
 git clone https://github.com/TallTall22/Exhibition_back_end

 cd exhibition-back-end
```

<br/>

2. Install dependencies
```
npm install
```

<br/>

3. Prepare your `.env` file. Please refer to `.env.example` for more details. 

<br/>

4. Create database at your `MySQL Workbench`
```
create database historic
```

<br/>

5. Apply migration and seed data  
**(Important: must apply migration FIRST)**
```
npx sequelize db:migrate
npx sequelize db:seed:all
```

<br/>

## **Run Server**

1. Start server
```
npm run dev
```

If you see  `App is listening on port3001`  on terminal, it means the server is running successfully and you can start exploring [Exhibition](http://localhost:3001/) on your browser.

<br>

2. Stop server
```
control + c
```
<br/>
<br/>

# Seed Users

## **Admin**
1 available account

* **account**: asd@asd
  **password**: qwer

<br/>

## **User**

* **account**: user1@example.com 
  **password**: 12345678

* **account**: user2@example.com
  **password**: 12345678



<br/>
<br/>

# Tech Stack
- Node.js ^18.13.0
- "axios": "^1.4.0",
- "bcryptjs": "^2.4.3",
- "dotenv": "^16.0.3",
- "express": "^4.18.2",
- "express-session": "^1.17.3",
- "imgur": "^1.0.2",
- "jsonwebtoken": "^9.0.0",
- "multer": "^1.4.5-lts.1",
- "mysql2": "^3.2.4",
- "passport": "^0.6.0",
- "passport-jwt": "^4.0.1",
- "passport-local": "^1.0.0",
- "sequelize": "^6.31.1",
- "sequelize-cli": "^6.6.0",
- "tslib": "^2.5.3"

<br>
<br>

#  Demo

---
