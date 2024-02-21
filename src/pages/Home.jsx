import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div class="main-wrapper">
            <div>
                <h1 class="text-center">Hi I am Md. Moshfiqur Rahman Rony</h1>
                <p class="text-center">
                    Currently working as a Software engineer at{' '}
                    <a href="https://twitter.com/worklife_hq">Worklife, Inc.</a>
                </p>
            </div>

            <div>
                <h3>About me</h3>
                <ul>
                    <li>Love to talk on trending technologies.</li>
                    <li>Insanely attracted to Spacex.</li>
                    <li>Die hard fan of RDJ.</li>
                    <li>Loves MCU.</li>
                    <li>I am a bit mad when I code.</li>
                </ul>
            </div>

            <div>
                <h3>Work & Interest</h3>
                <ul>
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
                <h3>Social accounts</h3>
                <ul>
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
                <h3>Portfolio</h3>
                <ul>
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
