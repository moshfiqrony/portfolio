import {
    SiAmazonaws,
    SiDjango,
    SiGithub,
    SiJavascript,
    SiMicrosoftazure,
    SiPostgresql,
    SiPython,
    SiReact,
} from 'react-icons/si';
import Card from '../../components/common/Card';
import {
    contactItems,
    experienceItems,
    navItems,
    skillItems,
    workItems,
} from '../../data/home';

export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-gray-950">
            <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 text-gray-50 px-4 lg:px-6 h-14 flex items-center">
                <a className="flex items-center justify-center" href="">
                    <CodeIcon className="h-6 w-6" />
                    <span className="sr-only">Md. Moshfiqur Rahman Rony</span>
                </a>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    {navItems.map((item) => (
                        <a
                            className="text-sm font-medium hover:underline underline-offset-4"
                            href={item.url}
                            key={item.id}
                        >
                            {item.name}
                        </a>
                    ))}
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
                        <div className="flex flex-row flex-wrap gap-16 text-gray-100 justify-center text-[30px] md:text-[60px] pt-16 pb-16">
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
                <Section heading={'About Me'} id="about">
                    <p className="text-lg md:text-xl text-justify">
                        I am based in Bangladesh, a developing country. However,
                        I believe that the opportunity to learn is as accessible
                        to me as it is to anyone else in the world. I always
                        myself to prove as a key competitor globally. I have{' '}
                        <strong>4.5K+</strong> reputation in Stackoverflow with{' '}
                        <strong>2.5M+</strong> reach. I also love to work on
                        open source projects.
                    </p>

                    <p className="text-lg md:text-xl text-justify">
                        As a frontend-focused full stack engineer, I have a deep
                        passion for creating visually stunning and highly
                        interactive web applications. With a strong foundation
                        in <strong>JavaScript</strong> and{' '}
                        <strong>Python</strong>, I excel at crafting responsive
                        and user-friendly interfaces, stable, secure and
                        scalable backend APIs that deliver an exceptional user
                        experience.
                    </p>
                    <p className="text-lg md:text-xl text-justify">
                        Beyond my technical expertise, I'm also a creative
                        problem-solver who thrives on tackling complex
                        challenges.I stay up-to-date with the latest web
                        development trends and technologies, constantly
                        exploring new ways to push the boundaries of what's
                        possible on the web.
                    </p>
                </Section>
                <Section
                    heading={'My Skills'}
                    subheading={
                        'Explore the wide range of technologies and tools I use to bring your ideas to life.'
                    }
                    id="skills"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {skillItems.map(({ id, name, Icon }) => (
                            <div
                                key={id}
                                className="flex flex-col items-center space-y-2"
                            >
                                <Icon className="h-12 w-12" />
                                <span className="text-lg font-medium">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </Section>
                <Section
                    heading={'My Work'}
                    subheading={
                        "Explore my RND, personal projects, open source contributions, and more. I'm always working on something new and exciting to showcase my skills apart from my professional work."
                    }
                    id="work"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {workItems.map((item) => (
                            <Card
                                key={item.id}
                                className="bg-gray-900 rounded-lg overflow-hidden group"
                            >
                                <div className="flex flex-col h-full">
                                    <img
                                        alt="Project 1"
                                        className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-t-lg"
                                        height={400}
                                        src={item.photo}
                                        style={{
                                            aspectRatio: '600/400',
                                            objectFit: 'cover',
                                            objectPosition:
                                                item.photo ===
                                                '/placeholder.svg'
                                                    ? 'center center'
                                                    : 'center top',
                                        }}
                                        width={600}
                                    />
                                    <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                                        <h3 className="text-2xl font-bold">
                                            {item.title}
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            {item.githubUrl && (
                                                <a
                                                    href={item.githubUrl}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <SiGithub className="h-5 w-5" />
                                                    <span className="text-sm text-gray-400">
                                                        View on GitHub
                                                    </span>
                                                </a>
                                            )}
                                            {item.liveUrl && (
                                                <a
                                                    className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                                    href={item.liveUrl}
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Section>
                <Section
                    heading={'My Experience'}
                    subheading={
                        'Explore my previous job experience as a software engineer in different companies.'
                    }
                    id="experience"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {experienceItems.map((item) => (
                            <div key={item.id} className="space-y-4">
                                <h3 className="text-2xl font-bold">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-gray-400">
                                    <a href={item.companyUrl} target="_blank">
                                        {item.companyName}
                                    </a>
                                    , {item.duration}
                                </p>
                                {item.skills.length > 0 && (
                                    <div className="text-gray-100 flex flex-row gap-2">
                                        {item.skills.map((Icon, index) => (
                                            <Icon
                                                key={`${item.id}-icon-${index}`}
                                            />
                                        ))}
                                    </div>
                                )}
                                {item.responsibilities.type === 'list' ? (
                                    <ul className="list-disc pl-6 space-y-2">
                                        {item.responsibilities.items.map(
                                            (item, index) => (
                                                <li
                                                    key={`${item.id}-responsibility-${index}`}
                                                >
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                ) : (
                                    item.responsibilities.type ===
                                        'paragraph' && (
                                        <div>
                                            {item.responsibilities.items.map(
                                                (p, index) => (
                                                    <p
                                                        key={`${item.id}-responsibility-${index}`}
                                                    >
                                                        {p}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </Section>

                <Section
                    heading={'Get in Touch'}
                    subheading={
                        "I'm always excited to collaborate on new projects or discuss potential opportunities. Feel free to reach out to me using the following social media channels."
                    }
                    id="contact"
                >
                    <div className="!mt-[-28px] flex items-center flex-wrap space-x-4 justify-center gap-8">
                        {contactItems.map((item) => (
                            <a
                                className="text-gray-50 hover:text-gray-300"
                                href={item.url}
                                key={item.id}
                                target="_blank"
                            >
                                <item.Icon className="h-8 w-8" />
                                <span className="sr-only">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </Section>
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

function Section({ children, heading, subheading, id }) {
    return (
        <section
            className="w-full py-24 md:py-32 lg:py-40 bg-gray-950 text-gray-50 flex justify-center  "
            id={id}
        >
            <div className="container px-4 md:px-6 grid grid-cols-1 gap-12 items-center">
                <div className="space-y-6">
                    <div className="w-full mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-center">
                            {heading}
                        </h2>
                        {subheading && (
                            <p className="text-lg mt-6 md:text-xl text-center max-w-[770px] mx-auto">
                                {subheading}
                            </p>
                        )}
                    </div>
                    {children}
                </div>
            </div>
        </section>
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
