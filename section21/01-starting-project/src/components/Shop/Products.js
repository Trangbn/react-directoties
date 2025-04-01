import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'Product 1',
        description: 'Product 1 description'
    },
    {
        id: 'p2',
        price: 3,
        title: 'Product 2',
        description: 'Product 2 description'
    },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map(product =>
              <ProductItem
                  key={product.id}
                  title= {product.title}
                  price={product.price}
                  description={product.description}
              />)
          }
      </ul>
    </section>
  );
};

export default Products;
