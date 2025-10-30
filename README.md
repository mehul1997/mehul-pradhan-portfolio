# Mehul Pradhan - Portfolio Website

A professional portfolio website built with React showcasing experience, projects, resume, and GitHub profile.

## Features

- **Home Page**: Professional introduction and skills overview
- **Resume**: Downloadable resume with detailed work history and education
- **Experience**: Timeline view of professional experience
- **Recommendations**: Testimonials from colleagues and managers
- **GitHub Integration**: Live GitHub profile and repository showcase

## Tech Stack

- React 18
- React Router v6
- Vite
- CSS3 with modern styling
- GitHub API integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd mehul-pradhan-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Update Personal Information

1. **GitHub Username**: Edit `src/pages/GitHub.jsx` and change the `GITHUB_USERNAME` constant
2. **Contact Information**: Update email and LinkedIn links in `src/pages/Home.jsx`
3. **Experience**: Modify the experiences array in `src/pages/Experience.jsx`
4. **Recommendations**: Update the recommendations array in `src/pages/Recommendations.jsx`
5. **Profile Picture**: Replace the placeholder in `src/pages/Home.jsx` with your own image

### Add Your Resume PDF

1. Create an `assets` folder: `mkdir src/assets`
2. Place your resume PDF as `src/assets/resume.pdf`
3. Uncomment the iframe in `src/pages/Resume.jsx`
4. Update the download button link to point to your resume

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed.

## Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repo and deploy
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Cloudflare Pages**: Connect repository for automatic deployments

## Project Structure

```
mehul-pradhan-portfolio/
├── src/
│   ├── components/      # Reusable components (if needed)
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Resume.jsx
│   │   ├── Experience.jsx
│   │   ├── Recommendations.jsx
│   │   └── GitHub.jsx
│   ├── assets/          # Static assets (images, PDFs, etc.)
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global app styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Base styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features to Add

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project showcase with detailed case studies
- [ ] Contact form with email integration
- [ ] Animations and transitions
- [ ] Loading states and error boundaries
- [ ] SEO optimization
- [ ] Analytics integration

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Mehul Pradhan - [Your Email] - [Your LinkedIn]

Project Link: [https://github.com/mehulpradhan/portfolio](https://github.com/mehulpradhan/portfolio)
