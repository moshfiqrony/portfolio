import { Link, useLocation } from 'react-router-dom';

export default function Section({ children, heading, id }) {
    const location = useLocation();

    return (
        <section id={id} className="Section-root">
            <Link
                to={`${location.pathname}#${id}`}
                className="Section-heading text-lg font-medium"
            >
                {heading}
            </Link>
            <div className="Section-Wrapper mt-2">{children}</div>
        </section>
    );
}
