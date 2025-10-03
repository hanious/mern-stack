# MERN Stack Social Media Platform

A social media platform web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite as the build tool.

## Project Structure

```
mern-stack/
├── client/          # React frontend with Vite
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── server/          # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── index.js
│   └── package.json
├── .gitignore       # Git ignore rules for entire repository
├── package.json     # Root package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-stack
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install all dependencies (client + server)
   npm run install-all
   ```

3. **Environment Setup**
   - Copy `server/.env.example` to `server/.env`
   - Update the environment variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/mernstack
     JWT_SECRET=your_jwt_secret_key_here
     NODE_ENV=development
     ```

4. **Start MongoDB**
   - Make sure MongoDB is running locally, or
   - Use MongoDB Atlas and update the MONGODB_URI

## Running the Application

### Development Mode
```bash
# Run both client and server concurrently
npm run dev

# Run only the server
npm run server

# Run only the client
npm run client
```

### Production Mode
```bash
# Build the client
npm run build

# Start the server
npm start
```

## Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios (HTTP client)
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- CORS

### Development Tools
- Nodemon
- Concurrently
- Tailwind CSS
- PostCSS & Autoprefixer
- ESLint
