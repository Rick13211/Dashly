# DashLy

**DashLy** is a modern, personalized space designed to help you capture ideas and keep notes effortlessly. Built with a focus on premium aesthetics and seamless user experience, DashLy combines a sleek, dark-themed UI with robust functionality.


## ✨ Features

- **🔐 Secure Authentication**: Integrated with `NextAuth.js` for secure username/password credential authentication.
- **🎨 Premium UI/UX**:
    - **Glassmorphism & Dark Mode**: A visually stunning dark theme with glassmorphism effects.
    - **Dynamic Animations**: Powered by `Framer Motion` for smooth transitions and interactions.
    - **Interactive Elements**: Background meteor effects, glow overlays, and responsive grid layouts.
- **📱 Fully Responsive**: Optimized for all devices, ensuring a great experience on desktop, tablet, and mobile.
- **⚡ High Performance**: Built on **Next.js 16** (App Router) for server-side rendering and static generation.
- **🗄️ Database Integration**: Persistent data storage using **MongoDB** with `Mongoose`.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Twin Animate CSS](https://github.com/sorrentocorp/tw-animate-css)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- **npm** or **yarn**
- **MongoDB** instance (local or Atlas)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/dashly.git
    cd dashly
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_SECRET=your_nextauth_secret_key
    NEXTAUTH_URL=http://localhost:3000
    ```

    > **Tip:** You can generate a random secret key using `openssl rand -base64 32`.

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open your browser:**

    Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## 📂 Project Structure

```bash
dashly/
├── app/                  # Next.js App Router directory
│   ├── api/              # API Routes (Auth, etc.)
│   ├── auth/             # Authentication pages (SignIn, SignUp)
│   ├── dashboard/        # Main Dashboard application
│   ├── globals.css       # Global styles and Tailwind imports
│   └── page.tsx          # Landing page
├── components/           # Reusable UI components
├── lib/                  # Utility libraries
├── models/               # Mongoose data models
├── utils/                # Helper functions (DB connection, etc.)
├── public/               # Static assets
└── package.json          # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

