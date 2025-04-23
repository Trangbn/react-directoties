import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./pages/Home";
import Product from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/root', element: <RootLayout/>, errorElement: <ErrorPage /> , children: [
            {path: '', element: <HomePage/>},
            {path: 'products', element: <Product/>},
            {path: 'products/:productId', element: <ProductDetailPage/>},
        ]
    },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
