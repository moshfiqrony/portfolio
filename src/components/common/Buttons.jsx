import { forwardRef } from 'react';

export const PrimaryButton = forwardRef(
    /**
     * @param {React.HTMLProps<HTMLButtonElement>} props
     * @returns {JSX.Element}
     */
    ({ children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                className={`cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md ${
                    props?.className || ''
                }`}
            >
                {children}
            </button>
        );
    }
);

export const TextButton = forwardRef(
    /**
     * @param {React.HTMLProps<HTMLButtonElement>} props
     * @returns {JSX.Element}
     */
    ({ children, ...props }, ref) => {
        return (
            <button ref={ref} className="cursor-pointer px-4 py-2 " {...props}>
                {children}
            </button>
        );
    }
);
