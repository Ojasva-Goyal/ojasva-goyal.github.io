# Ojasva Goyal - Portfolio

Welcome to the repository for my personal portfolio website! This project showcases my skills, experience, and projects in an interactive way.

## 🌐 Live Demo

You can view the live version of the portfolio here: [Ojasva Goyal Portfolio](https://ojasva-goyal.github.io)

---

## 📂 Project Structure

The project is built using modern web technologies and follows a modular structure for scalability and maintainability.

### Key Directories:
- **`src/`**: Contains the source code for the application.
  - **`components/`**: Reusable React components.
  - **`pages/`**: Individual pages for the portfolio (e.g., Home, About, Projects).
  - **`styles/`**: Tailwind CSS configurations and custom styles.
- **`public/`**: Static assets like images and the `_redirects` file for routing.
- **`dist/`**: The production build of the application (generated after running `npm run build`).

---

## 🛠️ Technologies Used

This portfolio is built with the following technologies:

- **[React](https://reactjs.org/)**: For building the user interface.
- **[Vite](https://vitejs.dev/)**: A fast build tool for modern web projects.
- **[TypeScript](https://www.typescriptlang.org/)**: For type safety and better developer experience.
- **[Tailwind CSS](https://tailwindcss.com/)**: For styling the application.
- **[shadcn/ui](https://shadcn.dev/)**: For prebuilt UI components.
- **[React Router](https://reactrouter.com/)**: For client-side routing.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ojasva-goyal/ojasva-portfolio.git
   ```

### 2. Navigate to the project directory:

```bash
cd ojasva-portfolio
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Start the development server:

```bash
npm run dev
```

### 5. Open your browser and visit:

```
http://localhost:8080
```

---

## 🛠️ Building and Deployment

### To build the project for production:

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Deploying to GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Push the `dist` folder to the `gh-pages` branch:

```bash
git add dist -f
git commit -m "Deploy portfolio"
git subtree push --prefix dist origin gh-pages
```

---

## ✨ Features

- **Responsive Design**: Fully responsive and optimized for all devices.
- **Interactive UI**: Smooth animations and transitions for a better user experience.
- **Dynamic Content**: Easily update content like projects, skills, and experience.
- **Fast Loading**: Optimized for performance using Vite and Tailwind CSS.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.