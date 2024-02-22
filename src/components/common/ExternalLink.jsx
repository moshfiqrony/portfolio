export default function ExternalLink({ children, href }) {
    return (
        <a
            className="ExternalLink-root text-blue-500 underline"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
