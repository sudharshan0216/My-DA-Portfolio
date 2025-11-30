# Sudharshan S - Data Analyst Portfolio

A modern Data Analyst Portfolio built with React, TypeScript, Vite, and Tailwind CSS. Showcases analytical skills with a clean UI and an interactive Sales Dashboard. Includes About, Projects, Skills, Education, Certificates, and Contact sections with 4 real-time visualizations powered by Recharts.

## 🚀 Live Demo

My Portfolio 🔗 : https://sudharshan-portfolio-b1y8u5thk-sudharshan0216s-projects.vercel.app

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Dashboard**: Sales Analysis Dashboard with 4 working visualizations using Recharts
- **Smooth Animations**: Framer Motion and AOS for polished user experience
- **Modern Stack**: React, Vite, Tailwind CSS, TypeScript
- **SEO Optimized**: Meta tags and Open Graph tags for better discoverability

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Extract the ZIP file
2. Navigate to the project directory:
   ```bash
   cd My-DA-Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── client/              # Frontend React application
│   ├── public/         # Static assets (resume PDF, profile image)
│   └── src/
│       ├── components/ # Reusable UI components
│       ├── data/       # Portfolio and dashboard data
│       ├── pages/      # Page components
│       └── lib/        # Utilities and configurations
├── server/             # Backend Express server
├── shared/             # Shared types and schemas
└── package.json        # Project dependencies
```

## Key Features

### Portfolio Sections
- Hero section with profile photo and introduction
- About section with internship experience
- Projects showcase with Sales Analysis Dashboard
- Skills display (Technical & Soft Skills)
- Education details
- Certificates
- Contact form with validation

### Interactive Dashboard
- **KPI Cards**: Total Sales, Avg Order Value, Total Profit, Profit Margin
- **Monthly Trend Chart**: Line chart showing sales and profit trends
- **Regional Sales Chart**: Interactive bar chart with click-to-filter
- **Category Distribution**: Pie chart for product categories
- **Top Customers Table**: Sortable and searchable data table

### Technologies Used

#### Frontend
- React 18
- Vite
- Tailwind CSS
- TypeScript
- Recharts (data visualization)
- Framer Motion (animations)
- React Hook Form (forms)
- Canvas Confetti (celebrations)

#### Backend
- Express.js
- TypeScript

## Resume Download

The resume PDF is located at `client/public/Sudharshan_Resume.pdf` and is accessible via the Download Resume button in the navigation.

## Deployment

This project can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Replit
The project is already configured for Replit deployment. Simply click the "Publish" button.

## Customization

### Update Portfolio Data
Edit `client/src/data/portfolioData.ts` to update your personal information, projects, skills, etc.

### Update Dashboard Data
Edit `client/src/data/dashboardData.ts` to modify the sales data or add new datasets.

### Update Colors
Edit `client/src/index.css` to change the color scheme (light and dark mode).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

**Sudharshan S**
- Email: sudharshan0212@gmail.com
- LinkedIn: https://www.linkedin.com/in/contactsudharshans/
- GitHub: https://github.com/sudharshan0216

---

Built with ❤️ using React, Vite, and Tailwind CSS
