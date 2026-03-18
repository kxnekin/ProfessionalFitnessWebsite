# 🐆 Panthers Fitness Club — Official Website

A modern, fully responsive fitness club website built for **Panthers Fitness Club, Bengaluru**. Designed with a dark, high-energy aesthetic using React, Vite, and Tailwind CSS.

🔗 **Live Site:** [professional-fitness-website.vercel.app](https://professional-fitness-website.vercel.app)

---

## ✨ Features

- ⚡ Lightning fast with Vite + React
- 🎨 Dark theme with orange gradient branding
- 📱 Fully responsive — Mobile, Tablet & Desktop
- 🧭 Smooth scroll navigation
- 📬 Contact form connected to Google Sheets via Apps Script
- 🏋️ Sections: Hero, Programs, Trainers, Pricing, Contact, Footer

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 18 | UI Framework |
| Vite | Build Tool |
| Tailwind CSS v4 | Styling |
| Google Apps Script | Form Backend |
| Vercel | Deployment |

---

## 📁 Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Programs.jsx
│   ├── Trainers.jsx
│   ├── Pricing.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation
```bash
# Clone the repo
git clone https://github.com/kxnekin/ProfessionalFitnessWebsite.git

# Navigate into the project
cd ProfessionalFitnessWebsite

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

---

## 📬 Contact Form Setup

The contact form submits to a **Google Sheet** via Google Apps Script.

1. Create a Google Sheet with columns: `Timestamp`, `Name`, `Email`, `Phone`, `Message`
2. Go to **Extensions → Apps Script** and deploy a web app
3. Replace the `SCRIPT_URL` in `Contact.jsx` with your deployed script URL

---



## 👤 Author

**Sameera**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/sameera-b-b-b53bb8327/)


