📄 PRODUCT REQUIREMENTS DOCUMENT (PRD)
Product Name

Ashmit Rai – Engineering Portfolio

1️⃣ Product Overview

This product is a single-page, startup-style engineering portfolio built using React (frontend) and Express (backend) without a database.

The platform showcases:

Technical capability

System thinking

Project depth

Professional positioning

The product must feel production-ready, modern, and intentional — not a template.

2️⃣ Product Vision

To create a premium personal brand platform that:

Positions Ashmit as a serious full-stack engineer

Demonstrates structured problem-solving

Appeals to recruiters, professors, founders, and developers

Reflects startup-level UI/UX standards

3️⃣ Target Audience

Primary:

Internship recruiters

Startup founders

Professors

Secondary:

Fellow developers

Technical collaborators

4️⃣ Technical Scope

Frontend:

React

Tailwind CSS

Framer Motion (subtle animations)

Backend:

Node.js

Express

Nodemailer (for contact form)

Database:

None

Deployment:

Frontend → Vercel

Backend → Render

5️⃣ Product Structure (Single Page Scroll Architecture)

All sections exist on one scrollable page with smooth scrolling navigation.

🔹 Section 1: Hero

Purpose:
Instantly communicate identity and value.

Content:

Full name (large headline)

Professional role descriptor

2-line positioning statement

Primary CTA: “View Projects”

Secondary CTA: “Contact”

Social links (GitHub, LinkedIn)

Subtle cyan gradient glow background

Success Criteria:
User understands value within 5 seconds.

🔹 Section 2: About

Purpose:
Humanize and contextualize.

Content:

Short founder-style narrative

“What I Build”

“What I’m Learning”

Optional professional image

Tone:
Clear, confident, no fluff.

🔹 Section 3: Skills

Purpose:
Show breadth and technical foundation.

Categories:

Languages

Frontend

Backend

Core Concepts

Tools

Presentation:

Tag or card-based UI

Cyan hover accents

Clean grid layout

Data Source:
Local structured JS file.

🔹 Section 4: Featured Projects (Core Section)

Purpose:
Demonstrate engineering depth.

Each Project Includes:

Title

Short description

Tech stack badges

GitHub link

Live demo link

“View Case Study” expandable modal

Case Study Content:

Problem Statement

Approach

Architecture Overview

Challenges Faced

Improvements / Future Scope

This section defines credibility.

🔹 Section 5: “How I Think”

Purpose:
Differentiate from generic portfolios.

Content:
4–6 engineering principles, such as:

Problem-first approach

Modular architecture preference

Clean code philosophy

Scalability mindset

Debugging methodology

Impact:
Shows maturity beyond coding.

🔹 Section 6: Contact

Purpose:
Enable professional communication.

Fields:

Name

Email

Message

Backend Integration:
POST /api/contact

Behavior:

Form validation

Toast notification on success/failure

Clear input after submission

Security:

Rate limiting

Input sanitization

Environment variable usage

🔹 Section 7: Footer

Content:

Social links

Resume link

Minimal branding

“Built with React & Express”

6️⃣ Design Requirements

Theme:
Dark-mode only

Color Palette:

Background: Deep charcoal

Primary accent: Cyan

Hover accent: Light cyan

Secondary text: Soft gray

Design Principles:

Generous spacing

Large bold typography

Rounded cards

Subtle glow accents

Minimalistic layout

No clutter

Visual Inspiration:

Stripe

Vercel

Linear

Animation Guidelines:

Subtle fade-in on scroll

Soft hover transitions

No excessive motion

7️⃣ Functional Requirements

Frontend:

Smooth scrolling navigation

Responsive design

Expandable project case studies

Animated section reveal

Mobile-first responsiveness

Backend:

Contact API endpoint

Email delivery functionality

Proper error handling

8️⃣ Non-Functional Requirements

Performance:

Lighthouse score ≥ 90

Load time under 2.5 seconds

Optimized assets

Lazy-loaded images

Maintainability:

Modular components

Clean folder structure

Clear naming conventions

Scalable architecture

Security:

No exposed API keys

Basic rate limiting

Input validation

CORS configuration

9️⃣ Constraints

No database

Single-page architecture

Dark mode only

No heavy animations

No unnecessary complexity

🔟 Future Enhancements (Phase 2)

Optional upgrades:

Blog integration

Admin dashboard

Analytics tracking

Multi-page routing

Case study dedicated pages

Personal branding expansion

1️⃣1️⃣ Success Metrics

The product is successful if:

Recruiters understand value within 30 seconds

Professors recognize structured engineering thinking

Founders see system-level maturity

Visitors remember the portfolio

Final Product Identity

This is not just a portfolio.

It is a technical positioning platform that signals:

Structured thinking

Production awareness

Engineering discipline

Professional maturity