# TaskMaster - Production-Ready Full-Stack Task Management Application

A modern, scalable task management application built with the MERN stack (MongoDB, Express, React, Node.js) featuring a beautiful UI with glassmorphism effects, dark mode, and comprehensive task management capabilities.

## 🚀 Features

### Frontend
- ⚛️ **React 18** with Vite for lightning-fast development
- 🎨 **TailwindCSS** for modern, responsive UI
- 🌓 **Dark Mode** support with persistent theme
- ✨ **Framer Motion** for smooth animations and transitions
- 🔐 **JWT Authentication** with protected routes
- 📊 **Real-time Statistics** and task analytics
- 🔍 **Advanced Filtering** - Search, filter by status/priority, sorting
- 📄 **Pagination** for efficient data loading
- 🎭 **Glassmorphism** UI design
- 🔔 **Toast Notifications** for user feedback
- 📱 **Fully Responsive** design for all devices

### Backend
- 🚀 **Node.js + Express** REST API
- 🗄️ **MongoDB** with Mongoose ODM
- 🔒 **JWT Authentication** with token validation
- 🔐 **bcrypt** password hashing
- ✅ **Express Validator** for data validation
- 🛡️ **Helmet** for security headers
- ⚡ **Rate Limiting** to prevent abuse
- 📝 **Morgan** logging
- 🎯 **Clean MVC Architecture**
- 🔄 **CORS** configuration
- ⚠️ **Comprehensive Error Handling**

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Scaling for Enterprise](#scaling-for-enterprise)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd fullstack_task
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

## 🔑 Environment Variables

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
NODE_ENV=development
PORT=5000

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/taskmaster
# For MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmaster?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_min_32_chars

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# API Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Running the Application

### Development Mode

#### Start Backend Server
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:5000`

#### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

### Production Mode

#### Build Frontend
```bash
cd frontend
npm run build
```

#### Start Backend in Production
```bash
cd backend
NODE_ENV=production npm start
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

#### Verify Token
```http
GET /api/auth/verify
Authorization: Bearer <token>
```

### User Profile Endpoints

#### Get Profile
```http
GET /api/user/profile
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/user/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "bio": "Full-stack developer"
}
```

#### Update Password
```http
PUT /api/user/password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "password123",
  "newPassword": "newpassword123"
}
```

### Task Endpoints

#### Create Task
```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the task management app",
  "status": "pending",
  "priority": "high",
  "dueDate": "2025-12-31",
  "tags": ["urgent", "project"]
}
```

#### Get All Tasks (with filters)
```http
GET /api/tasks?page=1&limit=10&status=pending&priority=high&search=project&sortBy=createdAt&order=desc
Authorization: Bearer <token>
```

Query Parameters:
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search in title and description
- `status` - Filter by status (pending, in-progress, completed, cancelled)
- `priority` - Filter by priority (low, medium, high, urgent)
- `sortBy` - Sort field (createdAt, title, priority, dueDate)
- `order` - Sort order (asc, desc)
- `tags` - Filter by tags (comma-separated)

#### Get Task by ID
```http
GET /api/tasks/:id
Authorization: Bearer <token>
```

#### Update Task
```http
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated title",
  "status": "completed"
}
```

#### Delete Task
```http
DELETE /api/tasks/:id
Authorization: Bearer <token>
```

#### Get Task Statistics
```http
GET /api/tasks/stats
Authorization: Bearer <token>
```

### Health Check
```http
GET /health
```

## 🌐 Deployment

### Deploy Backend to Render/Railway

#### 1. Prepare for Deployment
- Ensure `package.json` has correct start script
- Set `NODE_ENV=production` in environment variables
- Configure MongoDB Atlas URI

#### 2. Deploy to Render
1. Create account on [Render.com](https://render.com)
2. Create new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: Add all `.env` variables

#### 3. Deploy to Railway
1. Create account on [Railway.app](https://railway.app)
2. Create new project
3. Deploy from GitHub
4. Add environment variables in Railway dashboard

### Deploy Frontend to Vercel

#### 1. Build Configuration
Update `vite.config.js` for production:
```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
```

#### 2. Deploy to Vercel
```bash
cd frontend
npm install -g vercel
vercel
```

Or use Vercel Dashboard:
1. Import project from GitHub
2. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**: Add `VITE_API_URL`

### MongoDB Atlas Setup

1. Create account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create new cluster
3. Add database user
4. Whitelist IP addresses (0.0.0.0/0 for all IPs)
5. Get connection string
6. Update `MONGO_URI` in backend `.env`

## 📁 Project Structure

```
fullstack_task/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── taskController.js    # Task CRUD operations
│   │   └── userController.js    # User profile operations
│   ├── middleware/
│   │   ├── auth.js              # JWT verification
│   │   ├── errorHandler.js      # Error handling middleware
│   │   └── rateLimiter.js       # Rate limiting middleware
│   ├── models/
│   │   ├── Task.js              # Task schema
│   │   └── User.js              # User schema
│   ├── routes/
│   │   ├── auth.js              # Auth routes
│   │   ├── tasks.js             # Task routes
│   │   └── user.js              # User routes
│   ├── .env.example             # Environment variables template
│   ├── package.json             # Backend dependencies
│   └── server.js                # Express app entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx       # Main layout wrapper
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── ProtectedRoute.jsx # Route protection
│   │   │   ├── Loader.jsx       # Loading component
│   │   │   ├── TaskCard.jsx     # Task display card
│   │   │   ├── TaskModal.jsx    # Create/Edit task modal
│   │   │   └── StatsOverview.jsx # Statistics dashboard
│   │   ├── context/
│   │   │   ├── AuthContext.jsx  # Authentication state
│   │   │   └── ThemeContext.jsx # Theme management
│   │   ├── pages/
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Register.jsx     # Registration page
│   │   │   ├── Dashboard.jsx    # Main dashboard
│   │   │   ├── Profile.jsx      # User profile page
│   │   │   └── NotFound.jsx     # 404 page
│   │   ├── api.js               # Axios configuration
│   │   ├── App.jsx              # Root component
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── .env.example             # Environment variables template
│   ├── index.html               # HTML template
│   ├── package.json             # Frontend dependencies
│   ├── tailwind.config.js       # Tailwind configuration
│   ├── postcss.config.js        # PostCSS configuration
│   └── vite.config.js           # Vite configuration
│
├── TaskMaster_API_Collection.json # Postman collection
└── README.md                    # This file
```

## 🎯 Scaling for Enterprise Use

### 1. API Versioning
```javascript
// server.js
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);
```

### 2. Services Layer
Create a services directory to separate business logic:
```javascript
// services/taskService.js
class TaskService {
  async createTask(userId, taskData) {
    // Business logic here
  }
}
```

### 3. Caching with Redis
```javascript
const redis = require('redis');
const client = redis.createClient();

// Cache frequently accessed data
app.get('/api/tasks', cache, taskController.getTasks);
```

### 4. Database Optimization
- Add compound indexes
- Implement database sharding
- Use read replicas
- Enable query optimization

### 5. Microservices Architecture
- Separate auth service
- Dedicated task service
- User service
- Notification service
- API Gateway (Kong, Nginx)

### 6. Containerization
```dockerfile
# Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```

### 7. Kubernetes Deployment
```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: taskmaster-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: taskmaster
```

### 8. Monitoring & Logging
- **Winston** for structured logging
- **Prometheus** for metrics
- **Grafana** for visualization
- **Sentry** for error tracking
- **New Relic** for APM

### 9. Load Balancing
- Nginx reverse proxy
- AWS ELB/ALB
- Kubernetes ingress

### 10. Security Enhancements
- Implement OAuth 2.0
- Add refresh tokens
- Enable 2FA
- Rate limiting per user
- Input sanitization
- SQL injection prevention
- XSS protection
- CSRF tokens

### 11. Performance Optimization
- Implement CDN (Cloudflare, AWS CloudFront)
- Enable gzip compression
- Image optimization
- Lazy loading
- Code splitting
- Tree shaking

### 12. CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to production
        run: npm run deploy
```

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm install --save-dev jest supertest
npm test
```

### Frontend Testing
```bash
cd frontend
npm install --save-dev vitest @testing-library/react
npm test
```

## 📝 API Testing with Postman

Import the `TaskMaster_API_Collection.json` file into Postman to test all API endpoints with pre-configured requests.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ using the MERN stack

## 🙏 Acknowledgments

- React team for an amazing framework
- TailwindCSS for the utility-first CSS framework
- Framer Motion for smooth animations
- MongoDB team for the excellent database
- All open-source contributors

---

**Happy Coding! 🚀**
