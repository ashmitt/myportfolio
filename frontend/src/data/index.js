export const marqueeItems = [
    'I BUILD SYSTEMS, NOT JUST WEBSITES',
    'BACKEND ENGINEERING',
    'SCALABLE ARCHITECTURES',
    'FASTAPI • DJANGO • POSTGRESQL',
    'DOCKER • REDIS • CI/CD',
    'PERFORMANCE • SECURITY • RELIABILITY',
];

export { skillCategories } from './skills';

export const projects = [
    {
        title: 'Money Matters',
        subtitle: 'AI Financial Analyzer',
        description: 'A full-stack financial management platform built with Next.js and Firebase, powered by Gemini API for AI-assisted spending insights and personalized financial recommendations.',
        tech: ['Next.js', 'Firebase', 'Gemini API', 'Tailwind CSS', 'Vercel'],
        githubUrl: 'https://github.com/ashmitt/money-matters',
        liveUrl: 'https://money-matters-cyan.vercel.app/',
        image: '/assets/money_matters.png',
        status: 'Live',
        caseStudy: {
            problem: 'Users struggle to track expenses meaningfully and get actionable, personalized financial advice without paying for expensive subscription tools or doing manual data analysis.',
            approach: 'Leveraged Next.js for a fast, server-rendered experience. Coupled with Firebase for real-time CRUD and secure authentication. Integrated Gemini API with carefully engineered system prompts to generate context-aware, tailored spending insights.',
            architecture: 'Full-stack serverless architecture — Next.js pages with API routes, Firestore for real-time syncing, Firebase Auth for secure sign-ins, and Gemini API as the intelligence layer for financial recommendations and insights.',
            challenges: 'Engineering robust prompt schemas for the Gemini API that guarantee structured JSON response parsing while maintaining minimal token usage and sub-second response latencies at scale.',
            future: 'Integrating Plaid API for automated bank feed ingestion and building predictive budgeting algorithms using historical spending data and ML models.',
        },
    },
    {
        title: 'CliqMart',
        subtitle: 'E-Commerce Platform',
        description: 'A production-grade full-stack e-commerce platform deployed on a Linode VPS with Docker, PostgreSQL, CI/CD via GitHub Actions, and Nginx reverse proxy for scalable production hosting.',
        tech: ['Django', 'React', 'Docker', 'PostgreSQL', 'Nginx', 'GitHub Actions'],
        githubUrl: 'https://github.com/ashmitt/CliqMart',
        liveUrl: null,
        image: '/assets/ecommerce.png',
        status: 'In Progress',
        caseStudy: {
            problem: 'Building a production-ready e-commerce system that handles real traffic with reliable deployments, scalable infrastructure, and zero-downtime rollout processes.',
            approach: 'Containerized the entire Django + React stack using Docker Compose. Automated the CI/CD pipeline with GitHub Actions for seamless deployments. Configured Nginx as a reverse proxy and Gunicorn as the WSGI server for production-grade reliability.',
            architecture: 'Django REST Framework backend serving a React SPA frontend. PostgreSQL as the primary database, Docker containers for service isolation, Nginx handling HTTPS termination and reverse proxying, GitHub Actions CI/CD for automated testing and deployment to Linode VPS.',
            challenges: 'Configuring multi-container Docker networking, setting up SSL (Let\'s Encrypt), and orchestrating GitHub Actions workflows to zero-downtime deploy on a self-managed Linode VPS.',
            future: 'Implementing Redis caching for product catalog performance, WebSocket-based order status updates, and Kubernetes migration for horizontal scaling.',
        },
    },
];

export const principles = [
    {
        title: 'Problem-First',
        description: 'I understand the core problem before writing code. Solutions should solve real user pain points, not just look good.',
    },
    {
        title: 'Modular Architecture',
        description: 'Systems as independent, reusable pieces. Platforms scale gracefully without tightly-coupled technical debt.',
    },
    {
        title: 'Clean Code',
        description: 'Code is read 10x more than it\'s written. Explicit naming, simple logic flows, and self-documenting structure.',
    },
    {
        title: 'Scalability Mindset',
        description: 'MVPs designed for tomorrow. From DB schemas to frontend components, foundations are built to grow.',
    },
];
