// All page copy lives here, separate from layout/markup. Edit freely — the
// section components just read from these objects.

export const about = {
  greeting: "Hi, I’m Piyush Agarwal.",
  bio: " I’m a web developer currently pursuing Computer & Communication Engineering. I love computer science, and absolutely hate MATLAB. I am always very eager to learn new things in the domains of science, finance and behaviour, too bad I don’t have the memory to retain most of it.",
  joke: 'Joke: My Engineering branch is known as CCE, the first C is written on my heart and the other one on my forehead. (iykyk)',
};

// Newest first — rendered as a timeline in the Education section.
export const education = {
  items: [
    {
      institution: 'The LNM Institute of Information Technology',
      degree: 'B.Tech · Computer & Communication Engineering',
      duration: '2024 – 2028 · CGPA 8.3',
    },
    {
      institution: 'Sharda Vidhaya Mandir Public School, Jaipur',
      degree: '12th',
      duration: '2023 – 2024 · 94%',
    },
    {
      institution: 'Sharda Vidhaya Mandir Public School, Jaipur',
      degree: '10th',
      duration: '2021 – 2022 · 98%',
    },
  ],
};

// Click a card to see its answers below. First project is selected by default.
export const projects = {
  items: [
    {
      name: 'DeployJS',
      link: 'https://github.com/suppiyush/deploy-js-backend',
      stack: ['React', 'Node', 'PostgreSQL', 'ECS', 'S3', 'Kafka', 'ClickHouse'],
      whatItDoes:
        'Just provide the GitHub URL and it can deploy your React frontends within minutes in just a few clicks. It builds your static assets, stores them onto content buckets and serves them through a custom proxy.',
      whyBuilt:
        'While learning the different ways to deploy my websites, Vercel caught my attention due to its simplicity and sheer elegance, so I decided to build something similar of my own.',
    },
    {
      name: 'Flow',
      link: 'https://github.com/suppiyush/flow',
      stack: ['Next.js', 'Tailwind CSS', 'tRPC', 'PostgreSQL', 'Inngest'],
      whatItDoes:
        'Create seamless, automated workflows with drag and drop gestures. It includes multiple triggers, AI nodes, and social nodes, so the limit is your imagination.',
      whyBuilt:
        'With all the boom in the world of AI agents, discovering how n8n worked delighted me. So I built a part of the grand project.',
    },
  ],
  note: {
    prefix: 'These are my major projects. Check out my ',
    linkText: 'GitHub',
    linkHref: 'https://github.com/suppiyush',
    suffix: ' for more.',
  },
};

export const skills = {
  groups: [
    { label: 'LANGUAGES', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++'] },
    { label: 'FRONTEND', items: ['React', 'Next.js', 'Tailwind CSS'] },
    { label: 'DATABASE', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    { label: 'CLOUD', items: ['AWS', 'EC2', 'S3', 'CDN', 'Load Balancers'] },
    { label: 'TECHNOLOGIES', items: ['Docker', 'Redis', 'Kafka', 'WebRTC', 'WebSockets', 'CI/CD'] },
  ],
};

export const experience = {
  jobs: [
    {
      title: 'Web Developer Intern',
      period: 'JUN – JUL 2025',
      company: 'Flexzistay Pvt. Ltd.',
      companyLink: 'https://www.linkedin.com/company/flexzistay/',
      location: 'Remote',
      points: [
        'Developed a manager portal for hotels to handle bookings, revenue, offers, and guest support.',
        'Implemented responsive, SEO-friendly UI/UX designs using Next.js.',
        'Implemented IP-based rate limiting on key routes and middleware to restrict upload sizes for different hotel assets.',
        'Integrated Cloudinary for secure file uploads with expiration for private documents.',
      ],
    },
  ],
};

export const hobbies = {
  items: [
    {
      icon: 'chess',
      title: 'Chess',
      text: 'I started playing chess around the time of the Covid lockdown. I have played about 6k games on chess.com and managed to reach 750 ELO, which just proves practice does not make a man perfect.',
      highlight: 'practice does not make a man perfect',
    },
    {
      icon: 'music',
      title: 'Hindi Music',
      text: 'I love listening to Hindi Bollywood music, especially old legends like Kishore Kumar and Lata Mangeshkar. Although my current favourite is this Indian folk singer, Rahgir.',
      highlight: 'Indian folk singer, Rahgir',
    },
    {
      icon: 'books',
      title: 'Collecting Books',
      text: 'I love books, they are pretty, aesthetic and smell so good, and of course when very occasionally I read them it opens me to a world of imagination and thought.',
      highlight: 'smell so good',
    },
    {
      icon: 'x',
      title: 'Doom Scrolling X',
      text: 'This is a rather new habit of mine. I migrated from doom scrolling reels to scrolling the X feed, it keeps me up to date with freebies and trends of the AI economy.',
      highlight: 'freebies and trends',
    },
  ],
};

export const futurePlans = {
  introLabel: 'Current Reality',
  intro:
    'Currently aiming at college on-campus placements, while making it through everyday college glitches, while also looking for remote startup based opportunities for work experience and contributing to someone building something cool.',
  items: [
    {
      icon: 'work',
      title: 'Well-paid Majdoor',
      text: 'Wanna work with people who are super ambitious and dedicated towards building something worthwhile, alongside being compensated enough for that effort.',
    },
    {
      icon: 'cards',
      title: 'Pretending to be cool with Cards',
      text: 'I really wanna learn cardistry, it looks so sick.',
    },
    {
      icon: 'books',
      title: 'Piles of Books',
      text: 'Wanna catch up with the piles of books I have collected over months and years.',
    },
  ],
};

export const contact = {
  intro: "Feel free to reach out, I'm always up for a good conversation about tech, projects, or opportunities.",
  links: [
    { label: 'Email', value: 'agarwalpiyush891@gmail.com', href: 'mailto:agarwalpiyush891@gmail.com', icon: 'email' },
    { label: 'GitHub', value: 'suppiyush', href: 'https://github.com/suppiyush', icon: 'github' },
    { label: 'LinkedIn', value: 'suppiyush', href: 'https://www.linkedin.com/in/suppiyush/', icon: 'linkedin' },
    { label: 'Instagram', value: 'its_piyushagarwal', href: 'https://www.instagram.com/its_piyushagarwal/', icon: 'instagram' },
    { label: 'Discord', value: 'suppiyush', href: null, icon: 'discord' },
  ],
};
