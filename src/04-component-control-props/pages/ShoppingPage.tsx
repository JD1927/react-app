import { useState } from 'react';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { OnChangeArgs, Product } from '../interfaces/interfaces';
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

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart; }>({});

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart(oldShoppingCart => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += 20;
        return {
          ...oldShoppingCart,
          [productInCart.id]: productInCart
        }
      }
      // Remove the product
      const { [productInCart.id]: toDelete, ...rest } = oldShoppingCart;
      return { ...rest };
    });
  };

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