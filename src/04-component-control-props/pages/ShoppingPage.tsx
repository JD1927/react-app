import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const {
    onProductCountChange,
    shoppingCart,
  } = useShoppingCart();

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
              key={`${product.title}-${product.id}`}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
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
        {
          [...Object.values(shoppingCart)].map(productInCart => (
            <ProductCard
              key={productInCart.id}
              style={{ width: '100px' }}
              className="bg-dark text-white"
              onChange={onProductCountChange}
              value={productInCart.count}
              product={productInCart}>
              <ProductImage className="custom-image" style={{
                boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
              }} />
              <ProductButtons
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                className="custom-buttons" />
            </ProductCard>
          ))
        }

      </div>

    </div>
  );
};