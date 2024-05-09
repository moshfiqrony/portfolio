import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
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
