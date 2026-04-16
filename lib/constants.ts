export const EDUCATIONS = [
  {
    title: 'B.Sc. Information Technology',
    school: 'Prince of Songkla University',
  },
  {
    title: 'High School Diploma',
    school: 'Hatyaiwittayalaisomboonkulkanya School',
  },
]

export const EXPERIENCES = [
  {
    title: 'Lead Full-Stack Developer & AI Engineer',
    company: 'Turfmapp',
  },
  {
    title: 'Senior Full-Stack Developer & IoT Engineer',
    company: 'Smart&Connective',
  },
  {
    title: 'Full-Stack Developer',
    company: 'IMT-ASE',
  },
  {
    title: 'POS & PMS System Support',
    company: 'NATechnosys',
  },
  {
    title: 'IT Administrator',
    company: 'WANNET',
  },
  {
    title: 'Freelance Software Developer',
    company: 'Self-employed',
  },
];

export const PROJECTS = [
  {
    id: 'eureka',
    span: 'col-span-1 md:col-span-2 md:row-span-2',
    title: 'Eureka ERP/ESN',
    description:
      'Eureka ERP/ESN is a comprehensive, centralized production logistics module designed to bridge the gap between physical production tools and digital management systems. By integrating production units via APIs and web services, the platform enables businesses to automate manufacturing triggers based on real-time data such as sales orders or low-stock alerts. The system provides deep operational visibility, offering a live dashboard that tracks the status of individual production units, current job progress, and technical metrics like success rates and media types. Beyond simple monitoring, it features a programmable notification engine that sends alerts via email or SMS, alongside automated stock pre-entry to ensure the entire supply chain remains synchronized and efficient.',
    badges: ['Angular', 'Express.js', 'Node.js', 'Neo4j', 'MongoDB', 'MySQL', 'WebSocket', 'Electron', 'TypeScript', 'CronJob'],
    detail: 'IMT-ASE',
    accent: true,
  },
  {
    id: 'coconuts-wifi',
    span: 'col-span-1 md:row-span-2',
    title: 'Coconuts WIFI',
    description:
      'Coconuts is a comprehensive plug-and-play Wi-Fi management solution featuring custom OpenWrt firmware and a centralized Linux dashboard for real-time monitoring of network health and user consumption. The platform includes a multi-language captive portal that supports seamless roaming and various access models, including free trials and paid credit systems.',
    badges: ['Angular', 'Node.js', 'OpenWrt', 'LUA', 'MySQL', 'Neo4j', 'Captive Portal', 'Radius'],
    detail: 'IMT-ASE',
    accent: true,
  },
  {
    id: 'bpk-inventory',
    span: 'col-span-1',
    title: 'BPK Inventory',
    description:
      'Resource management for kitchen builders featuring project-based cost calculation and loss prevention protocols for material tracking.',
    badges: ['Angular.js', 'Node.js', 'Express.js', 'Neo4j'],
    detail: 'Freelancer',
  },
  {
    id: 'callmeprincess',
    span: 'col-span-1',
    title: 'CallMePrincess',
    description:
      'A specialized garment manufacturing and MRP system managing sewing patterns, production workflows, and real-time order tracking.',
    badges: ['Angular.js', 'PHP', 'MySQL'],
    detail: 'Freelancer',
  },
  {
    id: 'bizs-search-app',
    span: 'col-span-1',
    title: 'Bizs Search',
    description:
      'A geospatial discovery mini-app facilitating business searches via interactive mapping, proximity filtering, and category-based indexing.',
    badges: ['Angular', 'PHP', 'Slim Framework', 'MySQL'],
    detail: 'Freelancer',
  },
  {
    id: 'number-x',
    span: 'col-span-1',
    title: 'Number X',
    description:
      'A predictive data management platform featuring offline-first synchronization for tracking client datasets and statistical number modeling.',
    badges: ['Angular', 'Node.js', 'PouchDB', 'Electron'],
    detail: 'Freelancer',
  },
  {
    id: 'bcp-wrongdi',
    span: 'col-span-1',
    title: 'Wrongdi',
    description:
      'An internal knowledge-sharing hub designed to facilitate collaborative problem-solving and peer-to-peer learning for improved productivity.',
    badges: ['Django', 'Python', 'PostgreSQL'],
    detail: 'Freelancer',
  },
  {
    id: 'sc-engineer-app',
    span: 'col-span-1',
    title: 'Engineer App',
    description:
      'A specialized industrial IoT suite for facility managers to monitor, test, and control distributed hardware. Features real-time health diagnostics, energy consumption analytics, and live sensor data across building infrastructures.',
    badges: ['React Native', 'Redux', 'JavaScript', 'Push Notification', 'MQTT'],
    detail: 'Smart & Connective',
    accent: true,
  },
  {
    id: 'sc-facility-energy-saving-system',
    span: 'col-span-1 md:row-span-2',
    title: 'Facility Energy Saving System',
    description: 'A centralized IoT command center for commercial energy optimization, featuring real-time device orchestration, predictive data modeling, and automated energy-saving scenarios.',
    badges: ['Angular', 'Node.js', 'Hapi.js', 'WebSocket', 'MQTT', 'CronJob'],
    detail: 'Smart & Connective',
    accent: true,
  },
  {
    id: 'guest-app',
    span: 'col-span-1 md:col-span-2 md:row-span-2',
    title: 'Guest App',
    description:
      'A premium, brand-customizable mobile interface for guest room automation. Enables seamless control over lighting, climate, and curated lifestyle scenes—such as Sleep, Movie, and Reading—powered by high-performance, low-latency protocols.',
    badges: ['React Native', 'Redux', 'JavaScript', 'Push Notification', 'MQTT'],
    detail: 'Smart & Connective',
    accent: true,
  },
  {
    id: 'tm-jleague-international-website',
    span: 'col-span-1 md:col-span-3 md:row-span-2',
    title: 'J.League International Website',
    description:
      'The official international gateway for the Japanese Professional Football League. Engineered for high traffic and global reach, the platform processes real-time match telemetry for live scores and events. It features highly automated media pipelines that instantly generate and publish match summaries and granular, player-specific goal highlights. Architected with advanced GEO-IP routing, the system ensures fans receive region-specific, SEO-optimized content, localized ticketing portals, and live match streams. Fully localized for the Southeast Asian market with comprehensive multi-language support across English, Thai, Indonesian, and Vietnamese.',
    badges: ['Django', 'Wagtail', 'Python', 'PostgreSQL', 'SFTP', 'CronJob', 'GEO-IP', 'SEO', 'Docker', 'Traefik', 'DigitalOcean', 'Cloudflare', 'Redis'],
    detail: 'Turfmapp',
    accent: true,
  },
  {
    id: 'tm-content-maker-v1',
    span: 'col-span-1',
    title: 'Content Maker (CMv1)',
    description: 'An internal productivity suite designed to streamline digital marketing workflows for the J.League. It centralizes match data and brand assets, featuring a dynamic graphics engine that automatically generates platform-specific matchday posters and promotional media.',
    badges: ['React', 'Next.js', 'Redux', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Traefik', 'DigitalOcean', 'Cloudflare'],
    detail: 'Turfmapp',
    accent: true,
  },
  {
    id: 'tm-open-source-custom',
    span: 'col-span-1',
    title: 'Open Source Customization',
    description: 'Engineered bespoke modules and feature extensions for enterprise open-source platforms including Mattermost, Odoo, and Planka. By tailoring these systems to exact business specifications, the custom integrations optimized internal workflows and eliminated operational bottlenecks.',
    badges: ['React', 'Next.js', 'Redux', 'Sails.js', 'Node.js', 'PostgreSQL', 'Python', 'XML', 'Docker', 'Traefik', 'DigitalOcean', 'Cloudflare'],
    detail: 'Turfmapp',
    accent: true,
  },
  {
    id: 'tm-football-rag-for-ai-chatbot',
    span: 'col-span-1',
    title: 'Football Crawler/Scrapper',
    description: 'A domain-specific conversational AI engineered for football analytics. Utilizing an advanced RAG architecture, it ingests human-curated, authoritative data to deliver highly precise, hallucination-free insights regarding teams, players, and match statistics.',
    badges: ['Python', 'PostgreSQL', 'PG Vector', 'Embeddings', 'LlamaIndex', 'CronJob', 'Crawl4AI', 'PlayWright', 'Scrapy', 'BeautifulSoup', 'Bash'],
    detail: 'Turfmapp',
    accent: true,
  },
  {
    id: 'tm-football-chat-ui',
    span: 'col-span-1',
    title: 'Football Chat UI',
    description: 'A simple chat UI for any football data such as match scores, player stats, comparison, and analytics. All in one place. this project AI agent can answer any question about football data using Ochestrator(Master Agent) and ReAct Agent with `Tool call` and `Function call`. the data is supplied by Football Crawler/Scrapper. This project is a demo of how to use AI agent to answer any question about football data.',
    badges: ['React', 'Next.js', 'Redux', 'FastAPI', 'Python', 'PostgreSQL', 'PG Vector', 'LlamaIndex', 'ReAct Agent', 'CronJob', 'Web Crawler/Scraping', 'Web Canvas API', 'Docker', 'Traefik', 'DigitalOcean', 'Cloudflare'],
    detail: 'Turfmapp',
    accent: true,
  },
  {
    id: 'tm-content-maker-v2',
    span: 'col-span-1 md:col-span-2',
    title: 'Content Maker (CMv2)',
    description: 'An advanced, AI-driven evolution engineered to automate high-volume content creation. Leveraging ReAct agents and RAG architectures, the system autonomously researches content strategies, generates media guidelines, and utilizes predictive analytics to determine optimal publishing schedules.',
    badges: ['React', 'Next.js', 'Redux', 'FastAPI', 'Python', 'PostgreSQL', 'PG Vector', 'LlamaIndex', 'ReAct Agent', 'CronJob', 'Web Crawler/Scraping', 'Web Canvas API', 'Docker', 'Traefik', 'DigitalOcean', 'Cloudflare'],
    detail: 'Turfmapp',
    accent: true,
  },
];

export const HERO_TECHS = [
  'Django',
  'FastAPI',
  'Node.js',
  'Angular',
  'React',
  'Next.js',
  'Vite'
];

export const TECH_CATEGORIES = [
  {
    label: 'Generative AI & Agentic Systems',
    items: [
      'RAG', 'LangChain', 'LangGraph', 'LlamaIndex', 'Hugging Face', 'Ollama', 'CrewAI', 'ReAct Agent', 'Agentic Workflows', 'Agentic AI', 'AgentsSDK', 'ClaudeCode', 'GeminiCLI', 'OpenCode', 'Codex', 'Pi Code', 'Kilo Code', 'Agent Skills', 'MCP'
    ],
  },
  {
    label: 'Frontend & Modern UI',
    items: [
      'React', 'Next.js', 'Tailwind CSS', 'Shadcn/ui', 'TanStack', 'Framer Motion', 'Angular', 'React Native',
      'Fabric.js', 'Three.js', 'WebGL', 'Canvas API', 'GSAP', 'Chart.js', 'AG-Grid', 'Leaflet', 'PrimeNG', 'PrimeReact', 'Plotly.js'
    ],
  },
  {
    label: 'Backend & Orchestration',
    items: [
      'Node.js', 'FastAPI', 'Django', 'Celery', 'MQTT', 'WebSockets (WS)', 'FTP/SFTP', 'SSH', 'Hapi.js', 'Express.js', 'Flask', 'Wagtail', 'RabbitMQ',
    ],
  },
  {
    label: 'Data Architecture & Languages',
    items: [
      'TypeScript', 'Python', 'SQL', 'JavaScript', 'PostgreSQL', 'pgvector', 'Supabase', 'Redis', 'MongoDB', 'Drizzle ORM', 'Neo4j', 'SQLAlchemy', 'SQLite', 'Pydantic', 'Neon', 'CSS', 'HTML', 'Bash', 'PHP', 'LUA',
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    items: [
      'Docker', 'Traefik', 'Nginx', 'AWS', 'DigitalOcean', 'Cloudflare', 'Vercel', 'Linux', 'Ubuntu', 'Debian', 'Raspbian', 'Alpine', 'OpenWrt', 'Apache',
    ],
  },
];
