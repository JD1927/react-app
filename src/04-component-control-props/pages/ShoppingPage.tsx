import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
const product = {
  id: '1',
  title: 'Coffee Mug',
  image: './coffee-mug.png'
};
const product2 = {
  id: '2',
  title: 'Coffee Mug',
  image: './coffee-mug2.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        <ProductCard
          className="bg-dark text-white"
          product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          className="bg-dark text-white"
          product={product2}>
          <ProductImage className="custom-image" style={{
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
          }}/>
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};