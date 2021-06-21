import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  { id: "p1", price: 6, title: "my first", description: "book" },
  { id: "p2", price: 4, title: "my second", description: "book" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            title={product.name}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
