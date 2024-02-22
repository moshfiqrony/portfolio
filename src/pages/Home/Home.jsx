import Link from '../../components/common/Link';
import content from './content.json';

export default function Home() {
    return (
        <div className="h-screen overflow-auto">
            <div className="max-w-[1200px] m-auto p-5">
                <div className="my-8">
                    <h1 className="text-center text-3xl font-bold">
                        Hi I am Md. Moshfiqur Rahman Rony
                    </h1>
                    <p className="text-center text-lg">
                        Currently working as a Software engineer at{' '}
                        <a href="https://twitter.com/worklife_hq">
                            Worklife, Inc.
                        </a>
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-16">
                    <div>
                        <h3 className="text-xl font-semibold my-4 mt-8">
                            About me
                        </h3>
                        <ul className="list-disc ml-8">
                            <li>Love to talk on trending technologies.</li>
                            <li>Insanely attracted to Spacex.</li>
                            <li>Die hard fan of RDJ.</li>
                            <li>Loves MCU.</li>
                            <li>I am a bit mad when I code.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold my-4 mt-8">
                            Work & Interest
                        </h3>
                        <ul className="list-disc ml-8">
                            <li>I love to work full stack. </li>
                            <li>
                                I mostly work on JavaScript, Python and Bash.
                                The frameworks are React, Django and AWS for
                                server management.
                            </li>
                            <li>
                                I like to work on new technologies. Specifically
                                something that is really new to the world.
                            </li>
                            <li>
                                In a project I love to do the architecture
                                design most. No matter whether it is for backend
                                or frontend feature.
                            </li>
                            <li>
                                I love to solve problems in{' '}
                                <a href="https://stackoverflow.com/users/9418800/moshfiqrony">
                                    Stack Overflow
                                </a>
                                . My current reputation count is 4K+.
                            </li>
                            <li>
                                I use{' '}
                                <a href="https://code.visualstudio.com/">
                                    VS Code
                                </a>{' '}
                                as my IDE.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold my-4 mt-8">
                            Social accounts
                        </h3>
                        <ul className="list-disc ml-8">
                            <li>
                                <a href="https://github.com/moshfiqrony">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://stackoverflow.com/users/9418800/moshfiqrony">
                                    Stack Overflow
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/moshfiqrony">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/moshfiqrony/">
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold my-4 mt-8">
                        RND/Playground/Portfolio
                    </h3>
                    <ul className="list-disc ml-8">
                        {content.rnd_playground_portfolio.projects.map(
                            (project) => (
                                <li key={project.id}>
                                    <Link to={project.link}>
                                        {project.title}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
