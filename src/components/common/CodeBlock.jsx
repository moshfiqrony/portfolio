import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ children }) {
    return (
        <SyntaxHighlighter
            wrapLines
            wrapLongLines
            language="javascript"
            style={vs}
        >
            {children}
        </SyntaxHighlighter>
    );
}
