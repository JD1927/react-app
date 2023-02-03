import { useProduct } from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  image?: string;
}

export const ProductImage = ({ image = '' }) => {
  return (
    <img
      className={styles.productImg}
      src={image ? image : noImage}
      alt='Product'
    />
  );
};

export const ProductTitle = ({ title }: { title: string; }) => {
  return (
    <span className={styles.productDescription}>{title}</span>
  );
};

interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductButtons = ({ counter, increaseBy }: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button
        onClick={() => increaseBy(-1)}
        className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(1)}
        className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage image='./coffee-mug.png' />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} />
    </div>
  );
};
