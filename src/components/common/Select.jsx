export default function Select({ children, ...rest }) {
    return (
        <select
            className="Select-root border px-4 py-2 rounded active:outline-none focus:outline-none"
            {...rest}
        >
            {children}
        </select>
    );
}
