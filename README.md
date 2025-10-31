# Professional Portfolio - Shaik Mohammad Khaleel

This is a professional portfolio website built with React.js for Shaik Mohammad Khaleel, a Java Full Stack Developer.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for:
  - About Me
  - Technical Skills
  - Internship Experience
  - Projects
  - Education
  - Certifications
  - Contact Form

## Technologies Used

- React.js
- Vite (Build tool)
- CSS3 (with modern features like Grid and Flexbox)
- Font Awesome (Icons)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

### Previewing the Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   ├── favicon.ico
│   │   └── profile.svg
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Customization

To customize this portfolio for your own use:

1. Update the content in each component file in the `src/components/` directory
2. Replace the placeholder profile image in `src/assets/profile.svg`
3. Update contact information in the Contact and Footer components
4. Modify the color scheme in the CSS files if desired

## Deployment

This portfolio can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

For Vercel deployment:
1. Push your code to a GitHub repository
2. Sign up/log in to Vercel
3. Import your repository
4. Vercel will automatically detect the build settings and deploy your site

## Author

Shaik Mohammad Khaleel

## License

This project is open source and available under the MIT License.