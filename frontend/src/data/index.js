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
        title: 'E-Commerce Dashboard',
        description: 'Real-time inventory and sales tracking dashboard for e-commerce vendors with live charting and full data management.',
        tech: ['React', 'Node.js', 'Express', 'Tailwind', 'Chart.js'],
        githubUrl: 'https://github.com/ashmitt',
        liveUrl: 'https://demo-link-placeholder.com',
        image: '/assets/ecommerce.png',
        caseStudy: {
            problem: 'Vendors lacked a unified interface for real-time sales and inventory syncing without database caching lag.',
            approach: 'Built a lightweight internal API to sync JSON-based sales states across components instantly.',
            architecture: 'SPA built with Vite and React Context for instant vendor-state availability across the app.',
            challenges: 'Managing heavily nested component re-renders upon socket-like state changes.',
            future: 'Redis memory-caching and WebSockets for real-time live user mapping.',
        },
    },
    {
        title: 'Minimalist Note Engine',
        description: 'A stripped-down text editor for developers to map out pseudocode logic — fast, keyboard-driven, zero bloat.',
        tech: ['React', 'JavaScript', 'CSS Modules'],
        githubUrl: 'https://github.com/ashmitt',
        liveUrl: 'https://demo-link-placeholder.com',
        image: '/assets/notes.png',
        caseStudy: {
            problem: 'Existing developer note apps are bloated, slowing down quick ideation sessions.',
            approach: 'Keyboard shortcuts and markdown rendering only — every unnecessary UI element removed.',
            architecture: 'Client-side processing with LocalStorage for zero-latency typing.',
            challenges: 'Handling large raw-text blob conversions on the fly without UI freeze.',
            future: 'PWA support for offline cross-device sync.',
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
