# AI-Habit Builder (MERN Stack)

The **AI-Habit Builder** is a modern, full-stack application designed to help users create, track, and manage their habits . Built using the **MERN stack** (MongoDB, Express, React, Node.js), it features a clean, dark-themed user interface powered by **Tailwind CSS** and **DaisyUI**.

The application is structured as a monolithic repository, with separate **frontend** and **backend** directories for easy development and deployment.

<img width="952" height="470" alt="image" src="https://github.com/user-attachments/assets/e0bcfa97-172b-4cf0-ad4d-38e540f00ec8" />
<img width="953" height="470" alt="image" src="https://github.com/user-attachments/assets/7d83366d-5899-4424-afe5-846ea6cbd7ee" />
<img width="950" height="471" alt="image" src="https://github.com/user-attachments/assets/bd69a1e4-9798-4a07-add1-34c4fc52f897" />




---

## ✨ Features

This application provides robust CRUD (Create, Read, Update, Delete) functionality for managing habits and includes built-in security and performance features:

- **Create Habits/Notes:** Easily add new habits with a title and content.  
- **View All Habits:** Display a list of all existing habits on the homepage, sorted by creation date.  
- **Detailed View & Edit:** Click on any habit card to view full details and update the title/content.  
- **Delete Habits:** Permanently remove a habit from the database.  
- **Rate Limiting:** Protect the backend API from abuse using a rate limiter powered by **Upstash Redis**.  
- **Responsive UI:** Dark theme built with **Tailwind CSS** and **DaisyUI**, ensuring a modern look across devices.  

---

## 💻 Tech Stack

### Frontend (`frontend/`)
- **Framework:** React  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS and DaisyUI (night theme)  
- **State/Data Fetching:** axios  
- **Routing:** react-router-dom  

### Backend (`backend/`)
- **Server:** Node.js with Express  
- **Database:** MongoDB via Mongoose ODM  
- **Rate Limiting:** @upstash/ratelimit and @upstash/redis  
- **Configuration:** dotenv  

---

## 🌐 Deployment

The app is live at: [https://habbit-builder.onrender.com/](https://habbit-builder.onrender.com/)  

> ⚠️ **Note:** If the site takes a while to load, please wait about **1 minute** because the free Render plan puts inactive sites to sleep.

---

## 💡 Future Plans: Integrating AI

The next step is to integrate AI capabilities:

- **AI-Powered Habit Planning:**  
Analyze a user's habit and generate a structured, personalized plan (e.g., daily steps, milestones, resources) to help them successfully adopt that habit.
