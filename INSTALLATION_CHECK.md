# Installation Verification Checklist

## ✅ Backend Verification

### 1. File Structure
Check that all backend files exist:
```bash
cd backend

# Core files
ls server.js package.json .env.example

# Config
ls config/database.js

# Controllers
ls controllers/authController.js
ls controllers/taskController.js
ls controllers/userController.js

# Middleware
ls middleware/auth.js
ls middleware/errorHandler.js
ls middleware/rateLimiter.js

# Models
ls models/Task.js
ls models/User.js

# Routes
ls routes/auth.js
ls routes/tasks.js
ls routes/user.js
```

### 2. Dependencies Installation
```bash
cd backend
npm install
```

Expected packages:
- ✅ express
- ✅ mongoose
- ✅ jsonwebtoken
- ✅ bcryptjs
- ✅ cors
- ✅ helmet
- ✅ morgan
- ✅ express-validator
- ✅ express-rate-limit
- ✅ dotenv

### 3. Environment Configuration
```bash
# Copy and configure .env
cp .env.example .env

# Edit .env with your values
# - MONGO_URI
# - JWT_SECRET
# - FRONTEND_URL
```

### 4. Start Backend
```bash
npm run dev
```

Expected output:
```
✅ MongoDB Connected: localhost
📊 Database: taskmaster
🚀 Server running in development mode
🚀 Port: 5000
🚀 URL: http://localhost:5000
```

### 5. Test Backend Health
```bash
curl http://localhost:5000/health
```

Expected response:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "...",
  "environment": "development"
}
```

## ✅ Frontend Verification

### 1. File Structure
Check that all frontend files exist:
```bash
cd frontend

# Core files
ls package.json vite.config.js tailwind.config.js postcss.config.js index.html .env.example

# Source files
ls src/main.jsx
ls src/App.jsx
ls src/api.js
ls src/index.css

# Components
ls src/components/Layout.jsx
ls src/components/Navbar.jsx
ls src/components/ProtectedRoute.jsx
ls src/components/Loader.jsx
ls src/components/TaskCard.jsx
ls src/components/TaskModal.jsx
ls src/components/StatsOverview.jsx

# Context
ls src/context/AuthContext.jsx
ls src/context/ThemeContext.jsx

# Pages
ls src/pages/Login.jsx
ls src/pages/Register.jsx
ls src/pages/Dashboard.jsx
ls src/pages/Profile.jsx
ls src/pages/NotFound.jsx
```

### 2. Dependencies Installation
```bash
cd frontend
npm install
```

Expected packages:
- ✅ react
- ✅ react-dom
- ✅ react-router-dom
- ✅ axios
- ✅ framer-motion
- ✅ react-hot-toast
- ✅ lucide-react
- ✅ tailwindcss
- ✅ vite

### 3. Environment Configuration
```bash
# Copy and configure .env
cp .env.example .env

# Should contain:
# VITE_API_URL=http://localhost:5000/api
```

### 4. Start Frontend
```bash
npm run dev
```

Expected output:
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### 5. Test Frontend
Open browser to http://localhost:5173

Expected:
- ✅ Login page loads
- ✅ No console errors
- ✅ Dark/Light mode toggle works
- ✅ Responsive design visible

## ✅ Integration Testing

### 1. User Registration
1. Navigate to http://localhost:5173
2. Click "Create one now"
3. Fill registration form
4. Submit

Expected:
- ✅ Success toast notification
- ✅ Redirect to dashboard
- ✅ User avatar visible in navbar

### 2. User Login
1. Logout from navbar
2. Return to login page
3. Enter credentials
4. Submit

Expected:
- ✅ Success toast notification
- ✅ Redirect to dashboard
- ✅ Tasks list visible (empty initially)

### 3. Task Creation
1. Click "Create Task" button
2. Fill form:
   - Title: "Test Task"
   - Description: "Testing the app"
   - Priority: High
   - Status: Pending
3. Submit

Expected:
- ✅ Success toast notification
- ✅ Modal closes
- ✅ Task appears in dashboard
- ✅ Statistics update

### 4. Task Filtering
1. Use search bar
2. Filter by status
3. Filter by priority
4. Sort by different fields

Expected:
- ✅ Results update immediately
- ✅ Statistics remain accurate
- ✅ Pagination works

### 5. Profile Management
1. Click "Profile" in navbar
2. Update name
3. Submit

Expected:
- ✅ Success toast notification
- ✅ Name updates in navbar
- ✅ Changes persist after refresh

## ✅ Database Verification

### MongoDB Local
```bash
mongo
> use taskmaster
> show collections
> db.users.find()
> db.tasks.find()
```

Expected collections:
- ✅ users
- ✅ tasks

### MongoDB Atlas
1. Login to MongoDB Atlas
2. Browse Collections
3. Verify data exists

## ✅ API Testing with Postman

### 1. Import Collection
1. Open Postman
2. Import → File
3. Select TaskMaster_API_Collection.json

### 2. Test Authentication
1. Run "Register User" request
2. Run "Login User" request
3. Token should be set automatically

### 3. Test Tasks API
1. Run "Create Task" request
2. Run "Get All Tasks" request
3. Run "Update Task" request
4. Run "Delete Task" request

Expected:
- ✅ All requests return 200/201
- ✅ Data structure matches schema
- ✅ Authentication works

## ✅ Browser DevTools Check

### Console Tab
Expected:
- ✅ No errors
- ✅ No warnings (except development mode)

### Network Tab
Expected:
- ✅ API calls to http://localhost:5000/api/*
- ✅ Status codes 200/201
- ✅ Response times < 1s

### Application Tab
Expected:
- ✅ localStorage contains 'token'
- ✅ localStorage contains 'user'
- ✅ localStorage contains 'theme'

## ✅ Performance Check

### Backend
```bash
# Test response time
time curl http://localhost:5000/health
```

Expected:
- ✅ Response time < 100ms

### Frontend
Open Chrome DevTools → Lighthouse
Run audit

Expected scores:
- Performance: > 80
- Accessibility: > 90
- Best Practices: > 90

## 🐛 Common Issues & Solutions

### Issue: MongoDB connection failed
**Solution:**
```bash
# Start MongoDB
mongod

# Or check MongoDB Atlas connection string
```

### Issue: Port 5000 already in use
**Solution:**
```bash
# Change PORT in backend/.env
PORT=5001
```

### Issue: Frontend API calls fail
**Solution:**
```bash
# Check VITE_API_URL in frontend/.env
# Verify backend is running
# Check browser console for CORS errors
```

### Issue: Dark mode not persisting
**Solution:**
```bash
# Clear browser localStorage
localStorage.clear()
# Refresh page
```

### Issue: npm install fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

## ✅ Final Checklist

Before considering installation complete:

### Backend
- [ ] All dependencies installed
- [ ] MongoDB connected
- [ ] Server starts without errors
- [ ] Health endpoint responds
- [ ] Can create user via API

### Frontend
- [ ] All dependencies installed
- [ ] Vite server starts
- [ ] No console errors
- [ ] Can register new user
- [ ] Can login
- [ ] Can create tasks
- [ ] Dark mode works
- [ ] Filters work
- [ ] Profile updates work

### Documentation
- [ ] README.md read
- [ ] QUICKSTART.md followed
- [ ] DEPLOYMENT.md reviewed
- [ ] Postman collection imported

### Optional
- [ ] MongoDB Compass connected
- [ ] Environment variables secured
- [ ] Git repository initialized
- [ ] .gitignore configured

## 🎉 Success!

If all checks pass, your TaskMaster installation is complete and ready for:
- ✅ Development
- ✅ Testing
- ✅ Deployment
- ✅ Portfolio showcase

**Next Steps:**
1. Read DEPLOYMENT.md for production setup
2. Customize features to your needs
3. Deploy to production
4. Share your project!

---

**Installation Date:** _____________
**Verified By:** _____________
**Status:** ✅ Complete / ⚠️ Issues Found
