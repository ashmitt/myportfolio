export const skills = {
    frontend: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express', 'RESTful APIs', 'Authentication'],
    core: ['System Design', 'Algorithms', 'Data Structures', 'Object-Oriented Programming'],
    tools: ['Git', 'GitHub', 'Vite', 'Postman', 'Vercel', 'Render']
};

export const projects = [
    {
        title: 'E-Commerce Dashboard',
        description: 'A scalable tracking and inventory dashboard for e-commerce vendors. Features real-time charting and complete data management tools.',
        tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Chart.js'],
        githubUrl: 'https://github.com/ashmitt',
        liveUrl: 'https://demo-link-placeholder.com',
        image: '/assets/placeholder-project1.jpg',
        caseStudy: {
            problem: 'Vendors lacked a unified interface providing them real-time sales and inventory syncing without database caching lag.',
            approach: 'Built a lightweight internal API to sync JSON-based sales states across components instantly.',
            architecture: 'Single Page Application wrapped dynamically using Vite and React Context for instant vendor-state availability.',
            challenges: 'Managing heavily nested component-re-renders upon socket-like state changes.',
            future: 'Implementing Redis for memory-caching and websockets for real-time live users map.'
        }
    },
    {
        title: 'Minimalist Note Engine',
        description: 'A beautifully designed text editor specifically catered towards developers mapping out pseudocode logic.',
        tech: ['React', 'JavaScript', 'CSS Modules'],
        githubUrl: 'https://github.com/ashmitt',
        liveUrl: 'https://demo-link-placeholder.com',
        image: '/assets/placeholder-project2.jpg',
        caseStudy: {
            problem: 'Existing developer notes apps are bloated with features making quick ideation slow.',
            approach: 'Focused entirely on keyboard shortcuts and markdown rendering, stripping away unnecessary UI elements.',
            architecture: 'Client-side only processing using native browser LocalStorage to ensure 0-latency typing.',
            challenges: 'Handling large raw-text blob conversions on the fly without causing UI freeze.',
            future: 'Adding PWA support for offline cross-device sync.'
        }
    }
];

export const principles = [
    {
        title: 'Problem-First Approach',
        description: 'I deeply understand the core problem before writing a single line of code, ensuring solutions actually solve user pain points.'
    },
    {
        title: 'Modular Architecture',
        description: 'I design systems as independent, reusable pieces. This allows platforms to scale gracefully preventing tightly-coupled technical debt.'
    },
    {
        title: 'Clean Code Philosophy',
        description: 'Code is read 10x more than its written. I prioritize explicit variable naming, simple logic flows, and thorough self-documentation.'
    },
    {
        title: 'Scalability Mindset',
        description: 'I build MVP systems designed to handle tomorrow. From DB schemas to frontend components, my foundations are scalable.'
    }
];
