# TaskMaster - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Step 2: Set Up Environment Variables

#### Backend (.env)
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```env
MONGO_URI=mongodb://localhost:27017/taskmaster
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
FRONTEND_URL=http://localhost:5173
```

#### Frontend (.env)
```bash
cd frontend
cp .env.example .env
```

The frontend `.env` should contain:
```env
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Start MongoDB

**Option A: Local MongoDB**
```bash
# Make sure MongoDB is running on localhost:27017
mongod
```

**Option B: MongoDB Atlas (Recommended)**
1. Create free account at https://cloud.mongodb.com
2. Create a cluster
3. Get connection string
4. Update `MONGO_URI` in backend/.env

### Step 4: Run the Application

Open **two terminal windows**:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Backend running on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
✅ Frontend running on http://localhost:5173

### Step 5: Create Your First Account

1. Open http://localhost:5173
2. Click "Create one now"
3. Register with:
   - Name: Your Name
   - Email: your@email.com
   - Password: password123
4. You'll be automatically logged in!

### Step 6: Create Your First Task

1. Click "Create Task" button
2. Fill in:
   - Title: "My First Task"
   - Description: "Getting started with TaskMaster"
   - Priority: High
   - Status: Pending
3. Click "Create Task"
4. Your task appears on the dashboard! 🎉

## 📱 Test the Features

### Dashboard Features
- ✅ Create, edit, delete tasks
- 🔍 Search tasks by keyword
- 🎯 Filter by status (Pending, In Progress, Completed, Cancelled)
- ⚡ Filter by priority (Low, Medium, High, Urgent)
- 📊 View statistics
- 🔄 Sort and paginate

### Profile Features
- 👤 Update profile information
- 🔒 Change password
- 🌓 Toggle dark/light mode

## 🧪 Test with Postman

Import the Postman collection:
```bash
# Import TaskMaster_API_Collection.json into Postman
```

## 🐛 Troubleshooting

### Backend won't start
- ✅ Check if MongoDB is running
- ✅ Verify .env file exists and is configured
- ✅ Check if port 5000 is available

### Frontend won't start
- ✅ Check if backend is running
- ✅ Verify .env file has correct API URL
- ✅ Check if port 5173 is available

### Can't connect to database
- ✅ Verify MongoDB is running
- ✅ Check MONGO_URI in .env
- ✅ For Atlas, verify IP whitelist

### Login/Register not working
- ✅ Check backend console for errors
- ✅ Open browser DevTools → Network tab
- ✅ Verify API calls are reaching backend

## 📚 Next Steps

1. **Explore the Dashboard** - Create multiple tasks
2. **Try Filtering** - Search and filter your tasks
3. **Update Profile** - Personalize your account
4. **Toggle Dark Mode** - Switch themes
5. **Read API Docs** - Check README.md for API details
6. **Deploy** - See DEPLOYMENT.md for production setup

## 🎯 Development Tips

### Hot Reload
Both frontend and backend support hot reload:
- Frontend: Vite auto-refreshes on file changes
- Backend: Nodemon restarts on file changes

### Debug Mode
Enable detailed logging:
```bash
NODE_ENV=development npm run dev
```

### API Testing
Use the Postman collection or:
```bash
# Test backend health
curl http://localhost:5000/health
```

### Database GUI
Use MongoDB Compass to view your data:
- Download: https://www.mongodb.com/products/compass
- Connect to: mongodb://localhost:27017

## 💡 Pro Tips

1. **Use Dark Mode** - Toggle in the navbar
2. **Keyboard Shortcuts** - Navigate faster
3. **Search Everything** - Use the search bar
4. **Filter Smartly** - Combine filters for precision
5. **Track Progress** - Watch your completion stats

## 🆘 Get Help

- 📖 Read the full README.md
- 🚀 Check DEPLOYMENT.md for deployment
- 📝 Review API documentation
- 🐛 Check browser console for errors

---

**You're all set! Start managing your tasks efficiently with TaskMaster! 🎉**
