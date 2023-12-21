# 🛒 Nex-Cart E-Commerce Application 👥

Nex-Cart is an e-commerce web application built with Next.js that enables users to list their products for sale and make purchases. It is integrated with Firebase for authentication, database management, and other functionalities.

## Features

- User authentication via Firebase Authentication.
- Product listing and selling capabilities.
- Shopping cart functionality for users to add and purchase items.
- Integration with Firebase Firestore for database management.
- Responsive design for seamless user experience across devices.

## Requirements

- Node.js
- Next.js
- Firebase SDK
- Firebase Firestore (for database)
- Other dependencies (listed in package.json)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/tanavdev/nex-cart.git
cd nex-cart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Firebase

- Create a Firebase project at Firebase Console.
- Obtain Firebase configuration credentials.
- Set up Firebase Authentication and Firestore for the project.
- Add Firebase configuration to your Next.js app (usually in a file like ```firebaseConfig.js```).

### 4. Start the application

```bash
npm run dev
```
The app should now be running locally on [http://localhost:3000/](http://localhost:3000/).

## Usage

- Access the application by visiting `http://localhost:3000/`.
- Register for an account or log in if you already have an account.
- Use the functionalities to list products for sale, add items to the cart, and complete purchases.

## Firebase Integration

- Utilize Firebase Authentication for user login/signup.
- Store and manage product data using Firebase Firestore.
- Implement Firebase Cloud Functions for additional backend operations if needed.

## Contributing

Contributions are welcome! Please fork the repository, make changes, and submit a pull request.

