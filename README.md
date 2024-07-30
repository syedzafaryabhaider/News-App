
# News App

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔄 [Project Updates](#project-updates)

## 🤖 Introduction

News App is a dynamic web application developed using React.js and Tailwind CSS. It fetches real-time news articles from various categories, providing users with up-to-date information and an intuitive browsing experience.

## ⚙️ Tech Stack

- React.js
- Tailwind CSS
- Axios
- React Router

## 🔋 Features

👉 **Dynamic News Fetching**: Retrieves real-time news articles using Axios from the News API.

👉 **Category-Based Browsing**: Allows users to browse news articles based on different categories like business, entertainment, health, science, sports, and technology.

👉 **Light and Dark Themes**: Provides users with an option to switch between light and dark modes for better readability.

👉 **Pagination**: Implements pagination for efficient navigation through news articles.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/syedzafaryabhaider/News-App.git
cd news-app
```

**Configuration**

1. Create the `.env` file in your root directory.
2. Add your News API key to the `.env` file:
   ```bash
   VITE_NEWS_API_KEY=your_api_key_here
   ```
Note: With a free API key, the app will only run on localhost. For production, a paid API key is required.

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the app.

# 🔄 Project Updates

This project is still ongoing and needs some fine-tuning. Current areas of focus include:

- **Improving Responsiveness:** Working on making the app fully responsive across various devices.
- **UI Enhancements:** Making changes to improve the user experience.
- **Error Handling:** Implementing better error handling mechanisms to enhance reliability.
