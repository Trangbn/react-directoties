import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./pages/Home";
import Product from "./pages/Product";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children: [
            {path: '/', element: <HomePage/>},
            {path: '/products', element: <Product/>}
        ]
    },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
