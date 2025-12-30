# IIT Kanpur E-Cell Startup Expo

A modern, responsive website for the IIT Kanpur E-Cell Startup Expo built with React and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Vite
- 🎯 Smooth scrolling navigation
- 💼 Startup showcase section
- 📅 Event schedule
- 📧 Contact form
- 🌈 Beautiful gradient designs

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
startup expo/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Startups.jsx
│   │   ├── Events.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Technologies Used

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Customization

You can customize the website by:

1. **Colors**: Edit `tailwind.config.js` to change the primary color scheme
2. **Content**: Update the content in each component file
3. **Startups**: Modify the startups array in `Startups.jsx`
4. **Events**: Update the events array in `Events.jsx`

## License

This project is created for IIT Kanpur E-Cell Startup Expo.
