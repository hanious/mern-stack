# MERN Stack Social Media Platform

A social media platform web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite as the build tool.

## 🚀 Features

- **Frontend**: React.js with Vite for fast development and building
- **Styling**: Tailwind CSS for modern, responsive design
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication
- **Development**: Hot reloading for both client and server

## 📁 Project Structure

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

## 🛠️ Installation

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

## 🚀 Running the Application

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

## 🎨 Styling with Tailwind CSS

This project uses Tailwind CSS for styling, providing:

- **Utility-first approach**: Build designs directly in your markup
- **Responsive design**: Mobile-first responsive utilities
- **Dark mode support**: Automatic dark mode capabilities
- **Custom components**: Pre-built component classes in `src/index.css`
- **Plugins included**:
  - `@tailwindcss/forms` - Better form styling
  - `@tailwindcss/typography` - Beautiful typography
- **Custom theme**: Extended with primary color palette and animations

### Using Tailwind CSS

```jsx
// Example component with Tailwind classes
<button className="btn-primary">
  Primary Button
</button>

<div className="card p-6">
  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
    Card Title
  </h2>
</div>
```

## 📝 Available Scripts

### Root Level
- `npm run dev` - Run both client and server in development mode
- `npm run server` - Run only the backend server
- `npm run client` - Run only the frontend client
- `npm run build` - Build the frontend for production
- `npm run install-all` - Install dependencies for both client and server

### Client (Frontend)
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server (Backend)
- `npm run dev` - Start server with nodemon
- `npm start` - Start server in production mode

## 🔧 Technologies Used

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

## 📚 API Endpoints

```
GET  /                 # Welcome message
POST /api/auth/register # User registration
POST /api/auth/login    # User login
GET  /api/users         # Get all users
GET  /api/users/:id     # Get user by ID
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the MONGODB_URI in your .env file

2. **Port Already in Use**
   - Change the PORT in your .env file
   - Kill the process using the port: `npx kill-port 5000`

3. **Dependencies Issues**
   - Delete node_modules and package-lock.json
   - Run `npm install` again
