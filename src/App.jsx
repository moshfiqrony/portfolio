import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import OpeningPortalAnimation from './pages/Components/OpeningPortalAnimation';
import PositionAnimationUsingAnchor from './pages/Components/PositionAnimationUsingAnchor';
import Home from './pages/Home';
import UseDisclosure from './pages/Hooks/UseDisclosure';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/components',
        children: [
            {
                path: 'opening-portal-animation',
                element: <OpeningPortalAnimation />,
            },
            {
                path: 'position-animation-using-anchor',
                element: <PositionAnimationUsingAnchor />,
            },
        ],
    },
    {
        path: '/hooks',
        children: [
            {
                path: 'use-disclosure',
                element: <UseDisclosure />,
            },
        ],
    },

    {
        path: '*',
        element: <div>Not found</div>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
