import { forwardRef } from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HomeButton = forwardRef(({ children, ...props }, ref) => {
    return (
        <Link
            ref={ref}
            className="cursor-pointer bg-sky-100 px-4 py-2 rounded-full fixed bottom-[10px] right-[10px]"
            to="/"
            {...props}
        >
            <FiHome />
        </Link>
    );
});

export default HomeButton;
