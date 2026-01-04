// Portfolio Configuration
// Update this file with your personal information

const config = {
  // Branding
  branding: {
    logo: "Smrati Tech", // Your brand name or leave as "Portfolio"
  },

  // Personal Information
  personal: {
    name: "Smrati Tiwari",
    title: "Creative Developer & Designer",
    tagline: "Hello, I'm",
    description: "I craft beautiful digital experiences with passion and precision. Welcome to my creative space!",
    photo: '/Smrati_Tiwari_Photo.jpeg', // Leave null to use default gradient, or provide path to image
    coreSkills: ['React', 'NodeJS', 'TypeScript', 'MERN'], // Skills to show as floating badges in hero
  },

  // Contact Information
  contact: {
    email: "mailto:tiwarismrati90@gmail.com", // Updated to include mail link
    phone: "+91 7753060570",
    location: "Bangalore, India",
    whatsapp: "917753060570", // Format: country code + number (no + or spaces)
  },

  // Social Media Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },

  // About Section
  about: {
    description: [
      "I'm a passionate creative developer who loves building beautiful and functional digital experiences. With a keen eye for design and a love for clean code, I bring ideas to life through thoughtful development.",
      "When I'm not coding, you can find me exploring new design trends, experimenting with color palettes, or enjoying a good cup of coffee while brainstorming the next big project."
    ],
    skillCategories: [
      {
        category: "Frontend Development",
        skills: [
          { name: 'React', level: 90 },
          { name: 'JavaScript', level: 85 },
          { name: 'TypeScript', level: 70 },
          { name: 'CSS3', level: 95 },
          { name: 'HTML5', level: 95 },
        ]
      },
      {
        category: "Backend Development",
        skills: [
          { name: 'Node.js', level: 75 },
          { name: 'Express', level: 80 },
          { name: 'MongoDB', level: 70 },
          { name: 'REST APIs', level: 85 },
        ]
      },
      {
        category: "Design & Tools",
        skills: [
          { name: 'UI/UX Design', level: 80 },
          { name: 'Figma', level: 85 },
          { name: 'Creative Design', level: 88 },
          { name: 'Git', level: 90 },
        ]
      }
    ]
  },

  // Projects
  projects: [
    {
      title: "Dev Match",
      description: "A platform to connect developers.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "gradient-blue",
      link: "https://github.com/LearningTrackOfSmrati/dev-match" // Correct GitHub link
    },
    {
      title: 'E-Commerce Platform',
      description: 'Beautiful online store with smooth user experience and elegant design.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      gradient: 'gradient-2'
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system with reusable components and patterns.',
      tech: ['Figma', 'React', 'Storybook'],
      link: '#',
      gradient: 'gradient-1'
    }
  ],

  // Blog Posts
  blogs: [
    {
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to write cleaner and more maintainable code.',
      date: '2024-01-15',
      readTime: '5 min read',
      link: '#',
      category: 'React'
    },
    {
      title: 'Modern CSS Techniques',
      excerpt: 'Explore the latest CSS features and how to use them in your projects.',
      date: '2024-01-10',
      readTime: '7 min read',
      link: '#',
      category: 'CSS'
    },
    {
      title: 'UI/UX Design Principles',
      excerpt: 'Essential design principles every developer should know for better user experiences.',
      date: '2024-01-05',
      readTime: '6 min read',
      link: '#',
      category: 'Design'
    }
  ],

  // CV/Resume
  cv: {
    downloadLink: '/Smrati_Tiwari_FullStack_Resume.pdf', // Path to your CV in the public folder
    fileName: 'Smrati_Tiwari_FullStack_Resume.pdf' // Name of the file when downloaded
  }
}

export default config

