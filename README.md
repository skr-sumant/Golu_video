# Golu Videography & Photography 🎬

A gorgeous, highly animated, premium wedding videography portfolio featuring interactive image carousels, custom video portals, dynamic scheduling buttons, and a live automated **YouTube Wedding Film Search Engine**.

---

## 🚀 Deployment Instructions

This project is a monorepo containing:
- `/client` - A React app built with Vite, Tailwind CSS, Framer Motion, and Lucide icons.
- `/server` - A Node.js & Express backend serving YouTube playlist search integrations and MongoDB video storage.

---

### Step 1: Uploading to GitHub

We have initialized a git repository at the root of the project and created the first commit with all files staged correctly. To upload it to your GitHub:

1. Open your browser and go to [github.com](https://github.com/) (log in or sign up).
2. Click the **New** button to create a new repository.
3. Name your repository (e.g., `golu-videography`) and click **Create repository**.
4. In your terminal, run the following commands (replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub details):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 2: Deploying the Backend on Render

Render is excellent for hosting Express + Node.js servers for free.

1. Go to [render.com](https://render.com/) and log in with your GitHub account.
2. Click **New +** → **Web Service**.
3. Select **Build and deploy from a Git repository**.
4. Connect your new `golu-videography` GitHub repository.
5. Configure the Web Service:
   - **Name**: `golu-videography-server`
   - **Environment**: `Node`
   - **Root Directory**: `server` (⚠️ *Very Important: This points to the server subfolder*)
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
6. Click **Advanced** to add your Environment Variables:
   - `PORT` = `10000` (Render's default)
   - `MONGO_URI` = `mongodb://sumantraj9908_db_user:Skr%409905@ac-me9otgq-shard-00-00.cpemkyw.mongodb.net:27017,ac-me9otgq-shard-00-01.cpemkyw.mongodb.net:27017,ac-me9otgq-shard-00-02.cpemkyw.mongodb.net:27017/?tls=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
   - `YOUTUBE_API_KEY` = `AIzaSyAULb_YSvEu-PkJEZlwb-eWUWNe7tNTso0`
   - `YOUTUBE_CHANNEL_ID` = `UCq9QbTxOVxyGxga0sIy1kbw`
7. Click **Create Web Service**. Once deployed, Render will provide you with a live URL (e.g. `https://golu-videography-server.onrender.com`). Copy this URL!

---

### Step 3: Deploying the Frontend on Vercel

Vercel is the gold standard for deploying Vite React applications.

1. Go to [vercel.com](https://vercel.com/) and log in with your GitHub account.
2. Click **Add New** → **Project**.
3. Import your `golu-videography` GitHub repository.
4. Configure the Vercel Project:
   - **Framework Preset**: `Vite` (Vercel auto-detects this)
   - **Root Directory**: Click *Edit* and select the `client` folder.
   - **Build & Development Settings**: Keep defaults (`npm run build` and `dist`).
5. Open the **Environment Variables** accordion and add:
   - `VITE_API_BASE_URL` = `https://your-render-service-url.onrender.com` (⚠️ *Paste the Live Render Server URL you copied in Step 2*)
6. Click **Deploy**! Vercel will build and deploy your beautiful site in under a minute!
