import {
    SiAmazonaws,
    SiAndroid,
    SiCelery,
    SiChakraui,
    SiDjango,
    SiElasticsearch,
    SiExpo,
    SiFastapi,
    SiGithub,
    SiGmail,
    SiGoogle,
    SiJavascript,
    SiJenkins,
    SiJsonwebtokens,
    SiLinkedin,
    SiMicrosoftazure,
    SiMicrosoftteams,
    SiMui,
    SiOpenai,
    SiPostgresql,
    SiPuppeteer,
    SiPython,
    SiReact,
    SiReactquery,
    SiReactrouter,
    SiReacttable,
    SiRedis,
    SiRedux,
    SiShadcnui,
    SiSlack,
    SiSocketdotio,
    SiStackoverflow,
    SiStripe,
    SiTailwindcss,
    SiUbuntu,
    SiUpwork,
    SiX,
} from 'react-icons/si';

export const navItems = [
    {
        id: 'about',
        name: 'About',
        url: '#about',
    },
    {
        id: 'skills',
        name: 'Skills',
        url: '#skills',
    },
    {
        id: 'work',
        name: 'Work',
        url: '#work',
    },
    {
        id: 'experience',
        name: 'Experience',
        url: '#experience',
    },
    {
        id: 'contact',
        name: 'Contact',
        url: '#contact',
    },
];

export const skillItems = [
    {
        id: 'javascript',
        name: 'JavaScript',
        Icon: SiJavascript,
    },
    {
        id: 'react',
        name: 'React',
        Icon: SiReact,
    },
    {
        id: 'react-router',
        name: 'React Router',
        Icon: SiReactrouter,
    },
    {
        id: 'redux',
        name: 'Redux',
        Icon: SiRedux,
    },
    {
        id: 'react-query',
        name: 'React Query',
        Icon: SiReactquery,
    },
    {
        id: 'react-table',
        name: 'React Table',
        Icon: SiReacttable,
    },
    {
        id: 'material-ui',
        name: 'Material UI',
        Icon: SiMui,
    },
    {
        id: 'tailwindcss',
        name: 'TailwindCSS',
        Icon: SiTailwindcss,
    },
    {
        id: 'chakra-ui',
        name: 'Chakra UI',
        Icon: SiChakraui,
    },
    {
        id: 'shadcn-ui',
        name: 'ShadCN UI',
        Icon: SiShadcnui,
    },
    {
        id: 'python',
        name: 'Python',
        Icon: SiPython,
    },
    {
        id: 'django',
        name: 'Django',
        Icon: SiDjango,
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        Icon: SiPostgresql,
    },
    {
        id: 'fastapi',
        name: 'FastAPI',
        Icon: SiFastapi,
    },
    {
        id: 'websocket',
        name: 'Websocket',
        Icon: SiSocketdotio,
    },
    {
        id: 'openai-api',
        name: 'OpenAI API',
        Icon: SiOpenai,
    },
    {
        id: 'github-api',
        name: 'GitHub API',
        Icon: SiGithub,
    },
    {
        id: 'google-sdk',
        name: 'Google SDK',
        Icon: SiGoogle,
    },
    {
        id: 'teams-sdk',
        name: 'Teams SDK',
        Icon: SiMicrosoftteams,
    },
    {
        id: 'slack-sdk',
        name: 'Slack SDK',
        Icon: SiSlack,
    },
    {
        id: 'stripe',
        name: 'Stripe',
        Icon: SiStripe,
    },
    {
        id: 'elasticsearch',
        name: 'Elasticsearch',
        Icon: SiElasticsearch,
    },
    {
        id: 'celery',
        name: 'Celery',
        Icon: SiCelery,
    },
    {
        id: 'redis',
        name: 'Redis',
        Icon: SiRedis,
    },
    {
        id: 'jwt',
        name: 'JWT',
        Icon: SiJsonwebtokens,
    },
    {
        id: 'azure',
        name: 'Azure',
        Icon: SiMicrosoftazure,
    },
    {
        id: 'jenkins',
        name: 'Jenkins',
        Icon: SiJenkins,
    },
    {
        id: 'puppeteer',
        name: 'Puppeteer',
        Icon: SiPuppeteer,
    },
];

export const workItems = [
    {
        id: 'work-1',
        title: 'Dashboard with top nav',
        photo: '/projects/dashboard-header-top.png',
        githubUrl:
            'https://github.com/moshfiqrony/m-cube-dashboard/tree/main/frontend',
        liveUrl: 'https://m-cube-dashboard.vercel.app/',
    },
    {
        id: 'work-2',
        title: 'Dashboard with side nav',
        photo: '/projects/dashboard-header-left.png',
        githubUrl:
            'https://github.com/moshfiqrony/m-cube-dashboard/tree/main/frontend',
        liveUrl: 'https://m-cube-dashboard.vercel.app/',
    },
    {
        id: 'work-3',
        title: 'UseDisclosure hook with isAlive state(Coming soon)',
        photo: '/placeholder.svg',
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        id: 'work-4',
        title: 'Opening portal animation(Coming soon)',
        photo: '/placeholder.svg',
        githubUrl: '#',
        liveUrl: '#',
    },
    {
        id: 'work-5',
        title: 'Position animation using anchor(Coming soon)',
        photo: '/placeholder.svg',
        githubUrl: '#',
        liveUrl: '#',
    },
];

export const experienceItems = [
    {
        id: 'experience-1',
        title: 'Software Engineer',
        companyName: 'Worklife Inc.',
        companyUrl: 'https://worklife.so/',
        duration: 'May 2021 - Present',
        skills: [
            SiReact,
            SiDjango,
            SiPostgresql,
            SiMicrosoftazure,
            SiGithub,
            SiJenkins,
            SiUbuntu,
            SiMicrosoftteams,
            SiSlack,
            SiPuppeteer,
            SiMui,
            SiTailwindcss,
            SiChakraui,
            SiReactquery,
            SiRedux,
            SiReactrouter,
        ],
        responsibilities: {
            type: 'list',
            items: [
                'Frontend and backend architecture design.',
                'CI/CD, CDN, Ubuntu server, and AWS and Azure service management.',
                'Frontend development in React, Redux, React query, Bootstrap, React router, EmotionJS, ChakraUI and MUI',
                'Backend development in Django REST framework and PostgreSQL.',
                'Slack, Google services, Github, Microsoft services, and many more integration implementations.',
                'Dynamic image generation tool development using Pyppteer, Pillow and headless chrome.',
                'Custom API development using AWS lambda function and API gateway.',
                'Microsoft Teams app development using bot builder and teams app python sdk.',
                'Advanced Slack app architecture and feature development.',
            ],
        },
    },
    {
        id: 'experience-2',
        title: 'Software Engineer',
        companyName: 'D2(mPower)',
        companyUrl: 'https://www.mpower-social.com/',
        duration: 'Jul 2019 - May 2021',
        skills: [
            SiReact,
            SiDjango,
            SiPostgresql,
            SiAmazonaws,
            SiJenkins,
            SiUbuntu,
            SiMui,
            SiRedux,
            SiReactrouter,
            SiExpo,
            SiAndroid,
        ],
        responsibilities: {
            type: 'list',
            items: [
                'Manage EC2, Route53, S3, Cloudfront, Credential, Load balancer, Code deploy, and all required AWS services.',
                'Developing data visualization and survey management tools using React and Bootstrap.',
                'Frontend and Backend development using React and DRF.',
                'Adding features in the Shujog(Android) app.',
                'Server configuration using NGINX.',
            ],
        },
    },
    {
        id: 'experience-3',
        title: 'Software Engineer Intern',
        companyName: 'D2(mPower)',
        companyUrl: 'https://www.mpower-social.com/',
        duration: 'Jan 2019 - Jul 2019',
        skills: [
            SiReact,
            SiDjango,
            SiPostgresql,
            SiRedux,
            SiReactrouter,
            SiAndroid,
        ],
        responsibilities: {
            type: 'paragraph',
            items: [
                'I was assigned to learn JS, React, Python, DJjngo, and PostgreSQL and to develop a web application using these technologies for the Community managers for Shujog. I also worked on the Shujog Android app and added some features to it. At the end of my internship, I was assigned to develop a data visualization tool for the Shujog community managers.',
            ],
        },
    },
    {
        id: 'experience-4',
        title: 'Teaching Assistant, Department of CSE',
        companyName:
            'International University of Business Agriculture and Technology',
        companyUrl: 'https://cse.iubat.edu/',
        duration: 'Jan 2018 - Jan 2019',
        skills: [],
        responsibilities: {
            type: 'paragraph',
            items: [
                'My responsibility was to assist and teach students all the subjects of Computer Science and Engineering that the university offered. e.g. - Software Engineering, System Analysis, Database, Data Structure, Algorithm, Java, C#, Theory of Computation, Discrete Mathematics etc.',
            ],
        },
    },
];

export const contactItems = [
    {
        id: 'stackoverflow',
        title: 'StackOverflow',
        url: 'https://stackoverflow.com/users/9418800/moshfiqrony',
        Icon: SiStackoverflow,
    },
    {
        id: 'twitter',
        title: 'Twitter',
        url: 'https://twitter.com/moshfiqrony',
        Icon: SiX,
    },
    {
        id: 'linkedin',
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/moshfiqrony/',
        Icon: SiLinkedin,
    },
    {
        id: 'github',
        title: 'GitHub',
        url: 'https://github.com/moshfiqrony',
        Icon: SiGithub,
    },
    {
        id: 'email',
        title: 'Email',
        url: 'mailto:moshfiq.dev@gmail.com',
        Icon: SiGmail,
    },
    {
        id: 'upwork',
        title: 'Upwork',
        url: 'https://www.upwork.com/freelancers/~01387848eb0fd5d28d',
        Icon: SiUpwork,
    },
];
