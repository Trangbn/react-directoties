import {Link} from "react-router-dom";

const PRODUCTS = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'},
]

function Product() {
    return (<>
        <h1>The product page</h1>
        <ul>
            {PRODUCTS.map(product => (
                <li key={product.id}>
                    <Link to={product.id}>{product.title}</Link>
                </li>
            ))}
        </ul>
    </>)
}

export default Product;