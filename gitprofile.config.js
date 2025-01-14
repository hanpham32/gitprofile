// gitprofile.config.js

const config = {
  github: {
    username: 'hanpham32', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['hanpham32', 'han-gitprofile'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'hansopham',
    twitter: 'hanspham_',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'hanspham',
    mirror: 'hanpham.eth',
    substack: 'hanspham',
    dev: '',
    website: '',
    phone: '',
    email: 'phamhan@uw.edu',
    telegram: 'hanspham',
    calendly: 'hanspham',
    goodreads: 'hanpham',
  },
  skills: [
    'Python',
    'C++',
    'JavaScript',
    'TypeScript',
    'Solidity',
    'React.js',
    'Django',
    'Tailwind',
    'Git',
    'Vim',
    'Linux',
    'Latex',
  ],
  experiences: [
    {
      company: 'UW Blockchain Society',
      position: 'Co-President',
      from: 'June 2022',
      to: 'Present',
    },
  ],
  education: [
    {
      institution: 'University of Washington, Bothell',
      degree: 'Bachelor of Computer Science & Software Engineering',
      from: '2021',
      to: '2024',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@hanspham', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
