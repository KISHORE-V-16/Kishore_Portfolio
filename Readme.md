# Kishore V Portfolio Website

## Overview

A premium, interactive portfolio website for Kishore V, a Full-Stack Developer and Computer Science student at NIT Trichy. The site features a futuristic, minimal design with an elegant white-first aesthetic, 3D WebGL backgrounds, and smooth micro-interactions. Built as a single-page application showcasing projects, experience, skills, and contact information with accessibility considerations including reduced motion support and dark mode.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing (single-page portfolio structure)
- **State Management**: TanStack React Query for server state, React hooks for local state
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **3D Graphics**: Three.js with React Three Fiber and Drei for interactive WebGL backgrounds and visual effects

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Pattern**: RESTful API structure with `/api` prefix (currently minimal, portfolio is primarily static)
- **Build System**: Vite for development and production builds, esbuild for server bundling
- **Static Serving**: Express static middleware serves built client assets in production

### Design System
- **Color Palette**: White-first design with blue (#0066FF), light-blue (#00A3FF), and black accents
- **Typography**: Inter font family with Space Grotesk for code/monospace elements
- **Spacing**: Tailwind's spacing scale with generous padding (py-20 to py-32 for sections)
- **Animations**: CSS keyframe animations with reduced motion preference detection

### Data Storage
- **Schema**: Drizzle ORM with PostgreSQL dialect configured (users table defined)
- **Current Storage**: In-memory storage implementation (MemStorage class) for development
- **Database Ready**: Drizzle config points to DATABASE_URL environment variable when provisioned

### Key Design Patterns
- **Component Structure**: Portfolio sections as standalone components (Hero, About, Projects, Experience, Skills, Contact)
- **Accessibility**: Reduced motion toggle, semantic HTML, ARIA labels, keyboard navigation support
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Theme System**: CSS variables for colors enabling light/dark mode switching

## External Dependencies

### Third-Party Libraries
- **UI Framework**: Radix UI primitives (dialog, dropdown, tabs, tooltip, etc.)
- **3D Rendering**: @react-three/fiber, @react-three/drei, three.js
- **Form Handling**: React Hook Form with Zod validation
- **Date Utilities**: date-fns for date formatting
- **Styling**: Tailwind CSS, class-variance-authority, clsx

### Database & ORM
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema Validation**: drizzle-zod for generating Zod schemas from database tables

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Strict mode enabled with path aliases (@/, @shared/)
- **Replit Integration**: vite-plugin-runtime-error-modal, cartographer, dev-banner plugins

### External Services (Potential)
- **LinkedIn**: Content sourced from LinkedIn profile (kishore-v-835047265)
- **Contact Form**: Email functionality may require nodemailer/SMTP configuration
- **Deployment**: Configured for Replit hosting with static asset serving