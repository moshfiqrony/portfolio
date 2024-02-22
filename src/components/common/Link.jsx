import { Link as ReactRouterLink } from 'react-router-dom';

/**
 * A styled link component that uses react-router-dom's Link component
 * @param {import('react-router-dom').LinkProps} props
 * @returns {JSX.Element}
 */
export default function Link({ children, ...props }) {
    return (
        <ReactRouterLink
            className="text-blue-500 hover:underline hover:text-blue-700"
            {...props}
        >
            {children}
        </ReactRouterLink>
    );
}
