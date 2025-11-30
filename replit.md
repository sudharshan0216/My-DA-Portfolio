# Sudharshan S - Data Analyst Portfolio

## Overview

A production-ready portfolio website showcasing data analytics expertise through interactive visualizations and professional presentation. The application features a complete home page with multiple sections (About, Projects, Skills, Education, Certificates, Contact) and a dedicated Sales Analysis Dashboard with real-time data visualization.

Built as a single-page application with client-side routing between the main portfolio and an interactive dashboard page. The project demonstrates modern web development practices while highlighting data analysis capabilities through working charts and interactive components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Single-page application with manual page routing (home/dashboard toggle via React state)

**UI Component System**
- Radix UI primitives for accessible, unstyled components (accordions, dialogs, dropdowns, etc.)
- shadcn/ui component library configured with "new-york" style variant
- Custom design system based on CSS variables for theming (light/dark mode support via Tailwind)
- Tailwind CSS for utility-first styling with custom configuration

**State Management**
- TanStack Query (React Query) for server state management and caching
- Local React state for UI interactions (navigation, dashboard filters)
- Context API not currently used but available through query client provider

**Data Visualization**
- Recharts library for interactive chart components (LineChart, BarChart, PieChart)
- Dashboard features 4 main visualizations: monthly trends, regional sales, category distribution, top customers table
- Generated sample dataset (~800 records) for realistic dashboard interactions
- Client-side data filtering and cross-chart interactions

**Animation & UX**
- Framer Motion integration (imported but usage not visible in provided files)
- AOS (Animate On Scroll) library for scroll-triggered animations
- Canvas Confetti for celebration effects (contact form submission)
- Smooth scroll behavior and scroll-to-top functionality

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Custom middleware for request logging and JSON parsing
- Development mode includes Vite middleware integration for HMR

**API Endpoints**
- `/api/download-project` - Generates and streams ZIP archive of project source code
- Uses Archiver library to dynamically package selected files/directories
- No authentication or database operations in current implementation

**Development Tools**
- Vite plugin integration for runtime error overlay
- Replit-specific plugins for development banner and cartographer (conditional on environment)
- Custom logging with formatted timestamps

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured with PostgreSQL dialect
- Schema defines a simple users table (id, username, password)
- Database migrations output to `./migrations` directory
- Connection via `DATABASE_URL` environment variable

**In-Memory Storage**
- `MemStorage` class implements temporary user storage using JavaScript Map
- Provides CRUD interface for user operations
- No persistent database connection in current implementation (storage layer is abstracted)

**Static Data**
- Portfolio content (profile, projects, skills, education, certificates) stored as TypeScript exports in `client/src/data/portfolioData.ts`
- Dashboard sample data generated programmatically in `client/src/data/dashboardData.ts`
- No external API calls for content delivery

### Design System

**Typography**
- Inter font family for headings and body text (Google Fonts)
- JetBrains Mono for code/technical elements
- Responsive type scale using Tailwind utilities (text-5xl to text-xs)

**Color System**
- HSL-based color variables for flexible theming
- Semantic color naming (primary, secondary, muted, accent, destructive)
- Separate color definitions for card, popover, and sidebar contexts
- Border colors computed using CSS variables with opacity modifiers

**Layout Patterns**
- Container-based layouts with max-width constraints (max-w-7xl, max-w-4xl)
- Responsive grid systems (1/2/3 column layouts)
- Consistent spacing using Tailwind's spacing scale (4px increments)
- Mobile-first responsive design approach

## External Dependencies

### Core Framework Dependencies
- **React**: UI library (v18+)
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the codebase
- **Express**: Node.js web framework for backend

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI component primitives (20+ component packages)
- **shadcn/ui**: Pre-built component library on top of Radix
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Utility for merging Tailwind classes

### Data Visualization
- **Recharts**: React charting library for interactive visualizations
- **canvas-confetti**: Celebration animations

### State & Data Management
- **TanStack Query**: Server state management
- **React Hook Form**: Form state management
- **Zod**: Schema validation (via @hookform/resolvers and drizzle-zod)

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: PostgreSQL driver (serverless-compatible)
- **drizzle-kit**: CLI tools for migrations

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: JavaScript bundler (used in production build)
- **@replit plugins**: Development-specific tooling for Replit environment

### Utilities
- **archiver**: ZIP file creation for project download
- **nanoid**: Unique ID generation
- **aos**: Scroll animation library
- **lucide-react**: Icon library

### Notes
- The application uses Drizzle ORM but the actual PostgreSQL database may need to be provisioned separately
- Project download functionality packages the source code for distribution
- The design system is heavily customized beyond standard Tailwind defaults