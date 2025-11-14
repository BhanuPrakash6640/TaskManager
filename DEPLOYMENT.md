# TaskMaster Deployment Guide

## Quick Deployment Checklist

### Pre-Deployment
- [ ] All tests passing
- [ ] Environment variables configured
- [ ] MongoDB Atlas cluster created
- [ ] Production build tested locally
- [ ] Security headers configured
- [ ] CORS configured for production domain

### Backend Deployment (Render)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up/Login with GitHub

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select `backend` folder

3. **Configure Service**
   ```
   Name: taskmaster-api
   Environment: Node
   Region: Choose nearest to users
   Branch: main
   Root Directory: backend
   Build Command: npm install
   Start Command: npm start
   ```

4. **Add Environment Variables**
   ```
   NODE_ENV=production
   PORT=10000
   MONGO_URI=mongodb+srv://...
   JWT_SECRET=<strong_secret_32+_chars>
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note the backend URL: `https://taskmaster-api.onrender.com`

### Frontend Deployment (Vercel)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Update Environment Variable**
   - Create `.env.production` in frontend:
   ```
   VITE_API_URL=https://taskmaster-api.onrender.com/api
   ```

3. **Deploy via CLI**
   ```bash
   cd frontend
   vercel --prod
   ```

4. **Or Deploy via Dashboard**
   - Go to https://vercel.com
   - Import project from GitHub
   - Configure:
     - Framework Preset: Vite
     - Root Directory: frontend
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Add Environment Variable: `VITE_API_URL`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records

### MongoDB Atlas Setup

1. **Create Cluster**
   - Login to https://cloud.mongodb.com
   - Create new cluster (Free M0 tier available)
   - Select region closest to your server

2. **Configure Security**
   - Database Access → Add New User
   - Network Access → Add IP Address → Allow from Anywhere (0.0.0.0/0)

3. **Get Connection String**
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` and `<database>`

4. **Update Backend .env**
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmaster?retryWrites=true&w=majority
   ```

### Post-Deployment

1. **Test API**
   ```bash
   curl https://taskmaster-api.onrender.com/health
   ```

2. **Test Frontend**
   - Visit your Vercel URL
   - Test login/register
   - Create a task
   - Verify all features

3. **Update CORS**
   - Add Vercel URL to backend CORS whitelist

4. **Monitor**
   - Set up monitoring in Render dashboard
   - Check Vercel analytics
   - Monitor MongoDB metrics

### Troubleshooting

#### Backend Issues
- Check Render logs: Dashboard → Your Service → Logs
- Verify environment variables
- Check MongoDB connection
- Ensure PORT is set correctly

#### Frontend Issues
- Check Vercel deployment logs
- Verify API URL is correct
- Check browser console for errors
- Ensure CORS is configured

#### Database Issues
- Verify MongoDB Atlas IP whitelist
- Check connection string
- Verify database user credentials

### Environment-Specific URLs

#### Development
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Database: mongodb://localhost:27017

#### Production
- Frontend: https://taskmaster.vercel.app
- Backend: https://taskmaster-api.onrender.com
- Database: MongoDB Atlas cluster

### Security Best Practices

1. **Strong JWT Secret**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. **Enable HTTPS Only**
   - Both Render and Vercel provide HTTPS by default

3. **Secure Headers**
   - Helmet.js is already configured

4. **Rate Limiting**
   - Already configured in backend

5. **Environment Variables**
   - Never commit `.env` files
   - Use platform-specific environment variable management

### Scaling Considerations

#### Free Tier Limitations
- Render: Sleeps after inactivity, 750 hours/month
- Vercel: 100GB bandwidth, 100 serverless function executions
- MongoDB Atlas: 512MB storage on M0

#### Upgrade Paths
- Render: Paid plans start at $7/month
- Vercel: Pro at $20/month
- MongoDB: Dedicated clusters from $0.08/hour

### CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: curl ${{ secrets.RENDER_DEPLOY_HOOK }}

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

### Monitoring & Alerts

1. **Uptime Monitoring**
   - Use UptimeRobot (free)
   - Monitor: https://your-backend.onrender.com/health

2. **Error Tracking**
   - Set up Sentry (free tier available)
   - Add Sentry DSN to environment variables

3. **Analytics**
   - Vercel Analytics (built-in)
   - Google Analytics for frontend

### Backup Strategy

1. **Database Backups**
   - MongoDB Atlas provides automatic backups
   - Configure backup schedule

2. **Code Backups**
   - GitHub repository (already backed up)
   - Tag releases: `git tag v1.0.0`

### Rollback Procedure

1. **Backend Rollback**
   - Render: Manual Deployment → Select previous version

2. **Frontend Rollback**
   - Vercel: Deployments → Promote previous deployment

3. **Database Rollback**
   - MongoDB Atlas: Restore from backup snapshot

---

## Alternative Deployment Options

### AWS Deployment
- **Backend**: AWS Elastic Beanstalk or ECS
- **Frontend**: AWS S3 + CloudFront
- **Database**: AWS DocumentDB or MongoDB Atlas

### Google Cloud Platform
- **Backend**: Google Cloud Run or App Engine
- **Frontend**: Firebase Hosting
- **Database**: MongoDB Atlas

### DigitalOcean
- **Backend**: App Platform
- **Frontend**: App Platform (Static Sites)
- **Database**: Managed MongoDB

---

For any deployment issues, refer to platform-specific documentation:
- Render: https://render.com/docs
- Vercel: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
