import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import OpeningPortalAnimation from './pages/OpeningPortalAnimation';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/opening-portal-animation',
        element: <OpeningPortalAnimation />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
