import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div class="h-screen max-w-[580px] m-auto p-5">
            <div className="my-8">
                <h1 class="text-center text-3xl font-bold">
                    Hi I am Md. Moshfiqur Rahman Rony
                </h1>
                <p class="text-center text-lg">
                    Currently working as a Software engineer at{' '}
                    <a href="https://twitter.com/worklife_hq">Worklife, Inc.</a>
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold my-4">About me</h3>
                <ul className="list-disc ml-8">
                    <li>Love to talk on trending technologies.</li>
                    <li>Insanely attracted to Spacex.</li>
                    <li>Die hard fan of RDJ.</li>
                    <li>Loves MCU.</li>
                    <li>I am a bit mad when I code.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold my-4">Work & Interest</h3>
                <ul className="list-disc ml-8">
                    <li>I love to work full stack. </li>
                    <li>
                        I mostly work on JavaScript, Python and Bash. The
                        frameworks are React, Django and AWS for server
                        management.
                    </li>
                    <li>
                        I like to work on new technologies. Specifically
                        something that is really new to the world.
                    </li>
                    <li>
                        In a project I love to do the architecture design most.
                        No matter whether it is for backend or frontend feature.
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
                        <a href="https://code.visualstudio.com/">VS Code</a> as
                        my IDE.
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold my-4">Social accounts</h3>
                <ul className="list-disc ml-8">
                    <li>
                        <a href="https://github.com/moshfiqrony">GitHub</a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/9418800/moshfiqrony">
                            Stack Overflow
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/moshfiqrony">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/moshfiqrony/">
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold my-4">Portfolio</h3>
                <ul className="list-disc ml-8">
                    <li>
                        <NavLink to="/opening-portal-animation">
                            Opening portal animation
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
