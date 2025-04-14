// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'hanpham32', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projecs: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Pokemon trainers best friend',
          description:
            'A pokemon web app to look up pokemon weaknesses, resistances, ev yields, etc',
          imageUrl: '/pikachu_flaticon.png',
          link: 'https://trainertool-sigma.vercel.app/',
        },
        {
          title: 'Code Judge',
          description:
            'A Rust CLI application that judges your code quality against OOP principles and architectural patterns',
          imageUrl:
            'https://black-necessary-felidae-964.mypinata.cloud/ipfs/bafkreihoqd3ew2ojsrf2enb6ig3jpejqqec5jdfzickylhfjfhbdmrbt3m',
          link: 'https://github.com/hanpham32/code-judge',
        },
        {
          title: 'Gaia EigenLayer AVS',
          description:
            'A EigenLayer Gaia Node Template provides a foundation for building and managing Gaia Node services on the EigenLayer testnet.',
          imageUrl:
            'https://black-necessary-felidae-964.mypinata.cloud/ipfs/bafkreicbvuwxkvowgwtmre3pw6biwbqdljphedh4r4e5diwj3chmpa43zi',
          link: 'https://github.com/hanpham32/gaia-eigenlayer-avs-blueprint',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Han Pham',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'hansopham',
    x: 'hanspham_',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'hanspham',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.hanspham.com',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1f7bJLny2kbHBFIw0Gwtb3k5-TbMCXaqz/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'React.js',
    'Rust',
    'C++',
    'TypeScript',
    'Shell',
    'React Native',
    'Node.js',
    'RestAPI',
    'GCP',
    'Langchain',
    'SQL',
    'NoSql',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
    'CI/CD',
    'Figma',
    'Vim',
  ],
  experiences: [
    {
      company: 'MoodRoom',
      position: 'Full-stack Developer | Founding Member',
      from: 'January 2025',
      to: 'Present',
      companyLink: 'https://moodroom.io/',
    },
    {
      company: 'Gaia',
      position: 'Ambassador',
      from: 'March 2025',
      to: 'Present',
      companyLink: 'https://www.gaianet.ai/',
    },
    {
      company: 'SeeAlgo',
      position: 'Sofware Engineer Intern',
      from: 'June 2024',
      to: 'September 2024',
      companyLink: '',
    },
    {
      company: 'UW Blockchain Society',
      position: 'Co-President',
      from: 'October 2021',
      to: 'November 2023',
      companyLink: 'https://www.uwblockchain.org/',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Washington - Bothell',
      degree: 'B.S. Computer Science & Software Engineering',
      from: '2021',
      to: '2024',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'hanspham', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'retro',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
