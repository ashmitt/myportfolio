# Ashmit Rai - Startup Portfolio To-Do List

Based on the Product Requirements Document (PRD), Design Document, and Tech Stack details, here is a structured to-do list for building the single-page engineering portfolio.

## Phase 1: Project Initialization & Setup
- [x] **Frontend Repository Setup**: Initialize a new React project using Vite.
- [x] **Backend Repository Setup**: Initialize a new Node.js & Express project.
- [x] **Tailwind CSS Configuration**: Install and configure Tailwind CSS in the frontend.
- [x] **Design Tokens Setup**: Configure Tailwind theme with the project colors:
  - Background: Deep charcoal/navy (`#0B0F14`)
  - Primary Accent: Cyan (`#00FFFF`, `#00E5FF`)
  - Text Primary: White (`#FFFFFF`)
  - Text Secondary: Soft gray (`#9CA3AF`)
- [x] **Dependencies**: 
  - Install `framer-motion` for animations in React.
  - Install `nodemailer`, `cors`, and a basic rate-limiter in Node/Express.
- [x] **Typography Setup**: Import and configure a modern sans-serif font (e.g., Inter, Roboto).

## Phase 2: Backend Development (Small Express Service)
- [x] **Server Setup**: Set up the Express server structure (e.g., `server.js` or `app.js`).
- [x] **Security & Middleware**: Add CORS middleware, generic error handling, and basic rate limiting.
- [x] **Contact API Endpoint**: Create the `POST /api/contact` route.
- [x] **Form Validation**: Add input sanitization and validation for the contact form fields.
- [x] **Nodemailer Integration**: Configure Nodemailer to send an email upon successful valid POST request.
- [x] **Environment Variables**: Hook up `.env` for email sending credentials and CORS allowed origins.

## Phase 3: Frontend Foundation & Architecture
- [ ] **Global Styling**: Add dark-mode only base styles, generous spacing overrides, and soft inert-based smooth scrolling in CSS/Tailwind config.
- [ ] **Data Setup**: Create a local structured JS/JSON file for Skills, Projects, and Experience data.
- [ ] **Component Architecture**: Scaffold basic reusable UI components:
  - Cyan Accent Buttons
  - Tech Stack Badges
  - Project Cards
  - Typography Header variants

## Phase 4: Frontend Sections (Single Page Scroll)
- [ ] **Header / Navigation**: Fixed top header or floating nav indicating scroll position with smooth scroll anchor links.
- [ ] **Hero Section**:
  - Implement full layout (Left: Big Text, Right: Abstract glow).
  - Add "Building Scalable Digital Systems" heading.
  - Add primary (cyan) and secondary CTA buttons.
  - Add subtle fade-in and parallax motion.
- [ ] **About Section**:
  - Implement the "start-up narrative" grid layout.
  - Add "What I Build" and "What I'm Learning" stats grid.
- [ ] **Skills / Tech Stack Section**:
  - Build the grid of skills split by categories (Frontend, Backend, Core Concepts, Tools).
  - Add minimal icons and cyan hover effects.
- [ ] **Featured Projects Section (Core Section)**:
  - Build large project cards showcasing big screenshots.
  - Add tech stack badges, GitHub link, and Live Demo link.
  - Create the "View Case Study" expandable modal layout (Problem, Approach, Architecture, etc.).
  - Implement cyan border glow and slight zoom on project hover.
- [ ] **"How I Think" Section**:
  - List 4-6 engineering principles in a clean layout to emphasize structured problem-solving.
- [ ] **Experience / Timeline Section**:
  - Implement a vertical timeline with a cyan connecting line and minimal card blocks.
- [ ] **Contact Section**:
  - Build the split layout (Left: Contact text + Socials, Right: Minimal contact form).
  - Connect form to backend API.
  - Add success/failure Toast notifications.
  - Clear the form state after a successful submission.
- [ ] **Footer**:
  - Add social links, resume link, "Built with React & Express" text, and minimal branding.

## Phase 5: Polish & Animations (Framer Motion)
- [ ] **Scroll Animations**: Add subtle section content reveal (fade-in sliding up) as the user scrolls.
- [ ] **Micro-interactions**: Fine-tune hover glow on buttons, cyan underlines on links, and general interactivity.
- [ ] **Responsiveness**: Audit every section on Mobile and Tablet viewports. Ensure seamless degradation to solitary columns.

## Phase 6: Performance & Launch Prep
- [ ] **Performance Pass**:
  - Add lazy-loading to project images.
  - Ensure SEO meta tags are setup.
  - Minify and optimize assets.
- [ ] **Testing**: Verify API rate limiting and CORS validation restrictions on form submission. Validate "no exposed API keys".
- [ ] **Lighthouse Audit**: Test with Lighthouse targeting a score of ≥ 90 and load time < 2.5sec.

## Phase 7: Deployment
- [ ] **Deploy Backend**: Push Express app to **Render** and configure runtime environment variables securely.
- [ ] **Deploy Frontend**: Push React/Vite app to **Vercel** and connect to the live backend Render URL.
- [ ] **Final QA**: Do a live smoke test of the scroll navigation, modals, and the live contact form delivery.
