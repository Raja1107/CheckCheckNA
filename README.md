# Welcome to CheckCheckNA

CheckCheckNA is a React Native application for managing your tasks and uses React Native with Expo, Supabase, and TypeScript. This Project was developed for a Bachelorthesis.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Raja1107/CheckCheckNA.git
   cd CheckCheckNA
   ```

2. **Install dependencies:**
   Make sure you have Node.js and npm installed. Then run:

   ```sh
   npm install
   ```

3. **Set up Environment Variable:**

   Create a `.env` file in the root of your project and add your Supabase key:

   ```sh
   SUPABASE_KEY=your_supabase_key
   ```

## Running the Project

1. Start the Expo development server:

   ```sh
   npm start
   ```

2. Run **CheckCheckNA** on Android or iOS:

A) Testing on a Smartphone:

- Install the **Expo Go** app from [Playstore](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or [AppStore](https://itunes.apple.com/app/apple-store/id982107779)
- After starting the Expo development server, a QR code will be displayed in the terminal.
- Open the **Expo Go** app on your smartphone and scan the QR code to run the app on your device.

B) If you have an Android or iOS Emulator installed:

- For iOS: Press `I` to open in an iOS simulator.
- For Android: Press `A` to open in an Android emulator.

C) Run **CheckCheckNA** in your Browser

- In the Terminal press `W` to run the App in your Browser.

## Project Structure

```
CheckCheckNA/
├── .expo/                   # Expo configuration files
├── assets/                  # Static assets
├── src/                     # Source files
│   ├── components/          # React components
│   │   ├── Form.tsx         # Form component
│   │   ├── Supabase.ts      # Supabase utility
│   │   ├── Todo.tsx         # Todo component
│   │   └── ToDoList.tsx     # ToDoList component
│   ├── types.ts             # TypeScript types
├── styles/                  # Styling files
│   └── styles.ts            # Global styles
├── App.tsx                  # Main App component
├── app.json                 # Expo app configuration
├── babel.config.js          # Babel configuration
├── env.d.ts                 # TypeScript declaration for environment variables
├── package.json             # Project metadata and dependencies
├── .env                     # Environment variables
└── tsconfig.json            # TypeScript configuration
```
