import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties | undefined;
  onChange?: () => void;
}

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {

  const { counter, increaseBy } = useProduct(onChange);

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        style={style}
        className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};