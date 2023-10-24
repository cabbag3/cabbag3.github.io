// gitprofile.config.js

const config = {
  github: {
    username: 'cabbag3', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['a1-gettingstarted'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mirandi-mccormick',
    facebook: 'Mirandi McCormick',
    instagram: 'cab.b.age',
    email: 'mirandi.info@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1xgWMrxd4kRSZjzXQq_7SR4QgCfBcjGW4/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'JavaScript',
    'React.js',
    'MySQL',
    'C/C++',
    'Git',
    'Bitbucket',
    'Jenkins',
    'Docker',
    'HTML',
    'CSS',
    'Python',
    'ZBrush',
    'WebGL',
    'MongoDB',
  ],
  experiences: [
    {
      company: 'Athenahealth',
      position: 'Software Engineer Intern',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://www.athenahealth.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Worcester Polytechnic Institute',
      degree: 'Bachelors of Science in Computer Science',
      from: 'August 2020',
      to: 'December 2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '3D Art Modeling Final',
      description:
        'Model of Catboy Jerma985, a popular twitch streamer. Click the image to see more pics on Reddit!',
      imageUrl: 'https://preview.redd.it/p3m695ru82t71.jpg?width=1080&crop=smart&auto=webp&s=4a26e88cf810b807c4b938bbce8517cc8be30e0c',
      link: 'https://www.reddit.com/r/jerma985/comments/q6s6mb/jerma_catboy_model_i_made_for_my_3d_modeling_class/',
    },
    {
      title: 'Plush Commissions',
      description:
        'In my free time I make plush commissions in "fumo" style',
      imageUrl: 'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/305209662_1805881829761606_2970234533935137576_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c4roXM7PEeIAX-GeJE1&_nc_ht=scontent-iad3-1.xx&oh=00_AfDDXslNSVku3nfR5ncssq0fWMoNBLmQ4iTVRLhgWqMubw&oe=653DD3EA',
      link: 'https://www.instagram.com/cabbage.plush/',
    },
  ],
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
