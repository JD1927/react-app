import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
  id: '1',
  title: 'Coffee Mug',
  image: './coffee-mug.png'
};
const product2 = {
  id: '2',
  title: 'Coffee Mug',
  image: './coffee-mug2.png'
};

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {
          products.map(product => (

            <ProductCard
              className="bg-dark text-white"
              product={product}>
              <ProductImage className="custom-image" style={{
                boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
              }} />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
      <div className="shopping-cart">
        <ProductCard
          style={{ width: '100px' }}
          className="bg-dark text-white"
          product={product1}>
          <ProductImage className="custom-image" style={{
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
          }} />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          style={{ width: '100px' }}
          className="bg-dark text-white"
          product={product2}>
          <ProductImage className="custom-image" style={{
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
          }} />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>

    </div>
  );
};