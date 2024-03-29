import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties | undefined;
}

export const ProductButtons = ({ className, style }: Props) => {

  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    (): boolean => counter === maxCount,
    [counter, maxCount]
  );
  return (
    <div
      style={style}
      className={`${styles.buttonsContainer} ${className}`}>
      <button
        onClick={() => increaseBy(-1)}
        className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}>
        +
      </button>
    </div>
  );
};