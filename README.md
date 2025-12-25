# Showcase Hub - Stylish Portfolio Website

A beautiful, modern portfolio website built with React featuring:

- ✨ Responsive design with auto-crop photo functionality
- 💬 WhatsApp connection feature (header & contact section)
- 🌓 Light and dark theme switch
- 🎨 Beautiful color scheme with gradients (pinks, purples, lavenders)
- 📱 Fully responsive layout
- 📝 Blog section
- 📄 Download CV feature
- 🔗 Social media links (GitHub, LinkedIn, Twitter)
- 📞 Contact information (phone, email, location)
- ⚙️ Fully configurable via single config file

## Features

### Responsive Photo with Auto-Crop
- Configure your profile photo directly from the config file
- Automatically cropped to a perfect circle
- Responsive sizing that adapts to different screen sizes
- Fallback to beautiful gradient if no photo provided

### WhatsApp Integration
- Quick access button in the header
- Detailed contact option in the contact section
- Opens WhatsApp with a pre-filled message

### Theme Switcher
- Toggle between light and dark themes
- Smooth transitions
- Theme preference saved in localStorage

### Modern Design
- Gradient color schemes (pinks, purples, lavenders)
- Smooth animations and transitions
- Beautiful hover effects
- Modern typography

### Blog Section
- Display your latest blog posts
- Category tags and read time
- Fully configurable blog entries

### Social Media Integration
- GitHub, LinkedIn, Twitter links
- Beautiful hover effects with brand colors
- Easy to customize and add more platforms

### Skills with Progress Bars
- Visual representation of skill levels
- Animated progress bars with shimmer effect
- Configurable skill names and proficiency levels

### Interactive Mini Games
- **Tic Tac Toe**: Classic strategy game with score tracking
- **Word Scramble**: Unscramble words with hints
- **Simon Says**: Memory game with color sequences
- Fun way to engage visitors and showcase creativity
- Track high scores and personal bests

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Configuration

**All customization is now done through a single configuration file!**

Edit `src/config/portfolio.js` to customize your portfolio:

### Personal Information
```javascript
personal: {
  name: "Your Name",
  title: "Creative Developer & Designer",
  tagline: "Hello, I'm",
  description: "Your personal tagline...",
  photo: null, // Leave null for default gradient or provide image path
}
```

### Contact Information
```javascript
contact: {
  email: "your.email@example.com",
  phone: "+1 (234) 567-8900",
  location: "Your City, Country",
  whatsapp: "1234567890", // Format: country code + number (no + or spaces)
}
```

### Social Media Links
```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
}
```

### About Section
```javascript
about: {
  description: [
    "First paragraph about you...",
    "Second paragraph about you..."
  ],
  skillCategories: [
    {
      category: "Frontend Development",
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        // Add more skills with proficiency level (0-100)
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: 'Node.js', level: 75 },
        // Add more backend skills
      ]
    },
    // Add more categories as needed
  ]
}
```

### Projects
```javascript
projects: [
  {
    title: 'Project Name',
    description: 'Project description...',
    tech: ['React', 'Node.js'],
    link: 'https://project-link.com',
    gradient: 'gradient-1' // or 'gradient-2'
  },
  // Add more projects...
]
```

### Blog Posts
```javascript
blogs: [
  {
    title: 'Blog Post Title',
    excerpt: 'Brief description...',
    date: '2024-01-15', // Format: YYYY-MM-DD
    readTime: '5 min read',
    link: 'https://blog-link.com',
    category: 'Category Name'
  },
  // Add more blog posts...
]
```

### CV/Resume
```javascript
cv: {
  downloadLink: '/sample-cv.pdf', // Path to your CV in public folder
  fileName: 'YourName_CV.pdf'
}
```

**To add your CV:**
1. Place your CV PDF file in the `public` folder
2. Update the `downloadLink` path in the config file

## Sections

- **Hero**: Introduction with name, title, photo, social icons (email, GitHub, LinkedIn, Twitter), floating animated skill badges, and CTA buttons (including Download CV)
- **About**: Personal description and skills showcase with animated progress bars
- **Projects**: Featured projects with tech stack
- **Blogs**: Latest blog posts with categories
- **Games**: Three interactive mini-games for visitor engagement
- **Contact**: Modern two-column layout with contact information, social links, and contact form
- **Footer**: Copyright and attribution

## Header Features

- Responsive navigation with smooth scrolling
- WhatsApp quick connect button
- Light/Dark theme toggle
- Highlighted "Hire Me" button for easy access

## Technologies Used

- React 18
- Vite
- CSS3 (Custom Properties for theming)
- HTML5
- Canvas API (for image cropping)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips

1. **Colors**: Modify CSS variables in `src/index.css` to change the color scheme
2. **Fonts**: Update the font-family in `src/index.css`
3. **Sections**: Add or remove sections in `src/App.jsx`
4. **Components**: Customize individual components in `src/components/`
5. **Profile Photo**: 
   - Place your photo in the `public` folder (e.g., `public/profile.jpg`)
   - Update `photo: '/profile.jpg'` in `src/config/portfolio.js`
   - Leave as `null` for the default gradient
6. **Skills Levels**: Adjust the percentage (0-100) for each skill in the config
7. **Games**: Customize game parameters in `src/components/Games.jsx`

## License

Free to use for personal and commercial projects.

