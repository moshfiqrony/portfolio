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
import Card from '../../components/common/Card';

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-gray-950">
            <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 text-gray-50 px-4 lg:px-6 h-14 flex items-center">
                <a className="flex items-center justify-center" href="">
                    <CodeIcon className="h-6 w-6" />
                    <span className="sr-only">Md. Moshfiqur Rahman Rony</span>
                </a>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <a
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#about"
                    >
                        About
                    </a>
                    <a
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#skills"
                    >
                        Skills
                    </a>
                    <a
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#work"
                    >
                        Work
                    </a>
                    <a
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#experience"
                    >
                        Experience
                    </a>
                    <a
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#contact"
                    >
                        Contact
                    </a>
                </nav>
            </header>
            <main className="flex-1 max-w-[1200px] mx-auto">
                <section
                    className="w-full h-[100dvh] flex items-center justify-center bg-gray-950 relative overflow-hidden"
                    id="hero"
                >
                    <div className="z-10 text-center space-y-6 px-4 md:px-6">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-50 tracking-tight">
                            Md. Moshfiqur Rahman Rony
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300">
                            Full Stack Software Engineer |{' '}
                            <a href="https://worklife.so">Worklife Inc.</a>
                        </p>
                        <div className="flex flex-row flex-wrap gap-16 text-gray-100 justify-center text-[60px] pt-16 pb-16">
                            <SiJavascript /> <SiReact /> <SiPython />{' '}
                            <SiDjango /> <SiPostgresql /> <SiMicrosoftazure />{' '}
                            <SiAmazonaws />
                        </div>
                        <div className="flex justify-center gap-8">
                            <a
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                href="#work"
                            >
                                View Work
                            </a>
                            <a
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-50 bg-transparent px-6 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                href="#contact"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#6366F1] to-[#EC4899] opacity-50" />
                </section>
                <section
                    className="w-full py-24 md:py-32 lg:py-40 bg-gray-950 text-gray-50 justify-center flex"
                    id="about"
                >
                    <div className="container px-4 md:px-6 grid grid-cols-1 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-center">
                                About Me
                            </h2>
                            <p className="text-lg md:text-xl text-justify">
                                As a frontend-focused full stack engineer, I
                                have a deep passion for creating visually
                                stunning and highly interactive web
                                applications. With a strong foundation in HTML,
                                CSS, and JavaScript, I excel at crafting
                                responsive and user-friendly interfaces that
                                deliver an exceptional user experience.
                            </p>
                            <p className="text-lg md:text-xl text-justify">
                                Beyond my technical expertise, I'm also a
                                creative problem-solver who thrives on tackling
                                complex challenges. I stay up-to-date with the
                                latest web development trends and technologies,
                                constantly exploring new ways to push the
                                boundaries of what's possible on the web.
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className="w-full py-24 md:py-32 lg:py-40 bg-gray-950 text-gray-50 flex justify-center"
                    id="skills"
                >
                    <div className="container px-4 md:px-6 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                My Skills
                            </h2>
                            <p className="text-lg md:text-xl">
                                Explore the wide range of technologies and tools
                                I use to bring your ideas to life.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            <div className="flex flex-col items-center space-y-2">
                                <SiJavascript className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    JavaScript
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiReact className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    React
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiReactrouter className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    React router
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiRedux className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Redux
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiReactquery className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    React query
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiReacttable className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    React table
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiMui className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Material UI
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiTailwindcss className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    TailwindCSS
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiChakraui className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Chakra UI
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiShadcnui className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    ShadCN UI
                                </span>
                            </div>

                            <div className="flex flex-col items-center space-y-2">
                                <SiPython className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Python
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiDjango className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Django
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiPostgresql className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    PostgreSQL
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiFastapi className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    FastAPI
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiSocketdotio className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Websocket
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiOpenai className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    OpenAI API
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiGithub className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    GitHub API
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiGoogle className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Google SDK
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiMicrosoftteams className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Teams SDK
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiSlack className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Slack SDK
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiStripe className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Stripe
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiElasticsearch className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Elasticsearch
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiCelery className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Celery
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiRedis className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Redis
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiJsonwebtokens className="h-12 w-12" />
                                <span className="text-lg font-medium">JWT</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiMicrosoftazure className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Azure
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiJenkins className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Jenkins
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <SiPuppeteer className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    Puppeteer
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="w-full py-24 md:py-32 lg:py-40 bg-gray-950 text-gray-50 flex justify-center"
                    id="work"
                >
                    <div className="container px-4 md:px-6 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                My Portfolio
                            </h2>
                            <p className="text-lg md:text-xl max-w-[929px] mx-auto">
                                Explore my RND, personal projects, open source
                                contributions, and more. I'm always working on
                                something new and exciting to showcase my skills
                                apart from my professional work.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="bg-gray-900 rounded-lg overflow-hidden group">
                                <div className="flex flex-col h-full">
                                    <img
                                        alt="Project 1"
                                        className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-t-lg"
                                        height={400}
                                        src="/projects/dashboard-header-top.png"
                                        style={{
                                            aspectRatio: '600/400',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                        }}
                                        width={600}
                                    />
                                    <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                                        <h3 className="text-2xl font-bold">
                                            Dashboard with top nav
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            <a
                                                href="https://github.com/moshfiqrony/m-cube-dashboard/tree/main/frontend"
                                                className="flex items-center space-x-2"
                                            >
                                                <SiGithub className="h-5 w-5" />
                                                <span className="text-sm text-gray-400">
                                                    View on GitHub
                                                </span>
                                            </a>
                                            <a
                                                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                                href="https://m-cube-dashboard.vercel.app/dashboards/top-header"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <Card className="bg-gray-900 rounded-lg overflow-hidden group">
                                <div className="flex flex-col h-full">
                                    <img
                                        alt="Project 2"
                                        className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-t-lg"
                                        height={400}
                                        src="/projects/dashboard-header-left.png"
                                        style={{
                                            aspectRatio: '600/400',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                        }}
                                        width={600}
                                    />
                                    <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                                        <h3 className="text-2xl font-bold">
                                            Dashboard with sidebar
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            <a
                                                href="https://github.com/moshfiqrony/m-cube-dashboard/tree/main/frontend"
                                                className="flex items-center space-x-2"
                                            >
                                                <SiGithub className="h-5 w-5" />
                                                <span className="text-sm text-gray-400">
                                                    View on GitHub
                                                </span>
                                            </a>
                                            <a
                                                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                                href="https://m-cube-dashboard.vercel.app/dashboards/left-sidebar"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <Card className="bg-gray-900 rounded-lg overflow-hidden group">
                                <div className="flex flex-col h-full">
                                    <img
                                        alt="Project 3"
                                        className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                        height={400}
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: '600/400',
                                            objectFit: 'cover',
                                        }}
                                        width={600}
                                    />
                                    <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                                        <h3 className="text-2xl font-bold">
                                            UseDisclosure hook with isAlive
                                            state(Coming soon)
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            <a
                                                href="https://github.com/moshfiqrony/m-cube-dashboard/tree/main/frontend"
                                                className="flex items-center space-x-2"
                                            >
                                                <SiGithub className="h-5 w-5" />
                                                <span className="text-sm text-gray-400">
                                                    View on GitHub
                                                </span>
                                            </a>
                                            <a
                                                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                                href="#"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
                <section
                    className="w-full py-24 md:py-32 lg:py-40 bg-gray-950 text-gray-50 flex justify-center"
                    id="experience"
                >
                    <div className="container px-4 md:px-6 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                My Experience
                            </h2>
                            <p className="text-lg md:text-xl">
                                Explore my previous job experience as a software
                                engineer in different companies.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">
                                    Software Engineer
                                </h3>
                                <p className="text-lg text-gray-400">
                                    <a
                                        href="https://worklife.so"
                                        target="_blank"
                                    >
                                        Worklife Inc.
                                    </a>
                                    , May 2021 - Present
                                </p>
                                <div className="text-gray-100 flex flex-row gap-2">
                                    <SiReact /> <SiDjango /> <SiPostgresql />{' '}
                                    <SiMicrosoftazure />
                                    <SiGithub /> <SiJenkins /> <SiUbuntu />{' '}
                                    <SiMicrosoftteams /> <SiSlack />{' '}
                                    <SiPuppeteer /> <SiMui /> <SiTailwindcss />{' '}
                                    <SiChakraui /> <SiReactquery /> <SiRedux />{' '}
                                    <SiReactrouter />
                                </div>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        Frontend and backend architecture
                                        design.
                                    </li>
                                    <li>
                                        CI/CD, CDN, Ubuntu server, and AWS and
                                        Azure service management.
                                    </li>
                                    <li>
                                        Frontend development in React, Redux,
                                        React query, Bootstrap, React router,
                                        EmotionJS, ChakraUI and MUI
                                    </li>
                                    <li>
                                        Backend development in Django REST
                                        framework and PostgreSQL.
                                    </li>
                                    <li>
                                        Slack, Google services, Github,
                                        Microsoft services, and many more
                                        integration implementations.
                                    </li>
                                    <li>
                                        Dynamic image generation tool
                                        development using Pyppteer, Pillow and
                                        headless chrome.
                                    </li>
                                    <li>
                                        Custom API development using AWS lambda
                                        function and API gateway.
                                    </li>
                                    <li>
                                        Microsoft Teams app development using
                                        bot builder and teams app python sdk.
                                    </li>
                                    <li>
                                        Advanced Slack app architecture and
                                        feature development.
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">
                                    Software Engineer
                                </h3>
                                <p className="text-lg text-gray-400">
                                    <a
                                        href="https://www.mpower-social.com/"
                                        target="_blank"
                                    >
                                        D2(mPower)
                                    </a>
                                    , Jul 2019 - May 2021
                                </p>
                                <div className="text-gray-100 flex flex-row gap-2">
                                    <SiReact /> <SiDjango /> <SiPostgresql />{' '}
                                    <SiAmazonaws /> <SiJenkins /> <SiUbuntu />{' '}
                                    <SiMui />
                                    <SiRedux /> <SiReactrouter /> <SiExpo />{' '}
                                    <SiAndroid />
                                </div>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        Manage EC2, Route53, S3, Cloudfront,
                                        Credential, Load balancer, Code deploy,
                                        and all required AWS services.
                                    </li>
                                    <li>
                                        Developing data visualization and survey
                                        management tools using React and
                                        Bootstrap.
                                    </li>
                                    <li>
                                        Frontend and Backend development using
                                        React and DRF.
                                    </li>
                                    <li>
                                        Adding features in the Shujog(Android)
                                        app.
                                    </li>
                                    <li>Server configuration using NGINX.</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">
                                    Software Engineer Intern
                                </h3>
                                <div className="text-gray-100 flex flex-row gap-2">
                                    <SiReact /> <SiDjango /> <SiPostgresql />
                                    <SiRedux /> <SiReactrouter />
                                </div>
                                <p className="text-lg text-gray-400">
                                    <a
                                        href="https://www.mpower-social.com/"
                                        target="_blank"
                                    >
                                        D2(mPower)
                                    </a>
                                    , Jan 2019 - Jul 2019
                                </p>
                                <p>
                                    I was assigned to learn JS, React, Python,
                                    DJjngo, and PostgreSQL and to develop a web
                                    application using these technologies for the
                                    Community managers for Shujog. I also worked
                                    on the Shujog Android app and added some
                                    features to it. At the end of my internship,
                                    I was assigned to develop a data
                                    visualization tool for the Shujog community
                                    managers.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">
                                    Teaching Assistant, Department of CSE
                                </h3>
                                <p className="text-lg text-gray-400">
                                    <a
                                        href="https://cse.iubat.edu/"
                                        target="_blank"
                                    >
                                        International University of Business
                                        Agriculture and Technology
                                    </a>
                                    , Jan 2018 - Jan 2019
                                </p>
                                <p>
                                    My responsibility was to assist and teach
                                    students all the subjects of Computer
                                    Science and Engineering that the university
                                    offered. e.g. - Software Engineering, System
                                    Analysis, Database, Data Structure,
                                    Algorithm, Java, C#, Theory of Computation,
                                    Discrete Mathematics etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="w-full py-24 md:py-32 lg:py-40 bg-gray-950 text-gray-50 flex justify-center  "
                    id="contact"
                >
                    <div className="container px-4 md:px-6 grid grid-cols-1 gap-12 items-center max-w-[929px]">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-center">
                                Get in Touch
                            </h2>
                            <p className="text-lg md:text-xl text-center max-w-[770px] mx-auto">
                                I'm always excited to collaborate on new
                                projects or discuss potential opportunities.
                                Feel free to reach out to me using the following
                                social media channels.
                            </p>
                            <div className="flex items-center space-x-4 justify-center gap-8">
                                <a
                                    className="text-gray-50 hover:text-gray-300"
                                    href="https://stackoverflow.com/users/9418800/moshfiqrony"
                                >
                                    <SiStackoverflow className="h-8 w-8" />
                                    <span className="sr-only">
                                        StackOverflow
                                    </span>
                                </a>
                                <a
                                    className="text-gray-50 hover:text-gray-300"
                                    href="https://twitter.com/moshfiqrony"
                                >
                                    <SiX className="h-8 w-8" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a
                                    className="text-gray-50 hover:text-gray-300"
                                    href="https://www.linkedin.com/in/moshfiqrony/"
                                >
                                    <SiLinkedin className="h-8 w-8" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                <a
                                    className="text-gray-50 hover:text-gray-300"
                                    to="https://github.com/moshfiqrony"
                                >
                                    <SiGithub className="h-8 w-8" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                                <a
                                    className="text-gray-50 hover:text-gray-300"
                                    href="mailto:moshfiq.dev@gmail.com"
                                >
                                    <SiGmail className="h-8 w-8" />
                                    <span className="sr-only">Email</span>
                                </a>
                                <a
                                    className="text-gray-50 hover:text-gray-300"
                                    href="https://www.upwork.com/freelancers/~01387848eb0fd5d28d"
                                >
                                    <SiUpwork className="h-9 w-9 mt-1" />
                                    <span className="sr-only">Upwork</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-950 text-gray-50 px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm">
                    © {new Date().getFullYear()} moshfiqrony. All rights
                    reserved.
                </p>
                <div className="flex items-center space-x-4">
                    <p className="text-sm">With ❤️ from Bangladesh</p>
                </div>
            </footer>
        </div>
    );
}

function CodeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}
