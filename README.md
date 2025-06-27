# 🔗 URL Shortener Web App

A full-stack URL Shortener built with **React**, **Material UI**, **Express.js**, and **MongoDB**. Users can generate short URLs, view their expiry, track click stats, and manage links easily.

---

## 📦 Tech Stack

- **Frontend**: React, Material UI, Axios
- **Backend**: Node.js, Express, Mongoose (MongoDB)
- **Database**: MongoDB

---

## 📂 Project Structure

root/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── App.js
├── README.md

yaml
Copy
Edit

---

## 🚀 Backend Setup (`/backend`)

### 1. Install dependencies

cd backend
npm install
2. Environment setup
Create a .env file:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/urlshortener
3. Run the server
bash
Copy
Edit
npm start
Server runs at: http://localhost:5000

API Endpoints
Method	Endpoint	Description
POST	/shorturls	Create a short URL
GET	/shorturls/:shortcode	Get stats for a short URL
GET	/:shortcode	Redirect to original URL
GET	/shorturls/all	 to get all URLs


💻 Frontend Setup (/frontend)
1. Install dependencies
bash
Copy
Edit
cd frontend
npm install
2. Start development server
bash
Copy
Edit
npm start
Runs at: http://localhost:3000

Pages & Features
🔗 URL Shortener Form: Submit up to 5 URLs with optional validity and custom name

📊 Statistics Page: View details of short URL (creation time, expiry, total clicks)

📋 Table View: Shows all URLs with their stats

🔍 Client-side redirection: Opens original link in a new tab

🧑‍💻 Author
Praveen Kumar Kaikala
