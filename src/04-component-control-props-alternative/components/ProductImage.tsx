import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  image?: string;
  className?: string;
  style?: CSSProperties | undefined;
}

export const ProductImage = ({ image, className, style }: Props) => {

  const { product } = useContext(ProductContext);

  let imageToShow: string;

  if (image) {
    imageToShow = image;
  } else if (product.image) {
    imageToShow = product.image;
  } else {
    imageToShow = noImage;
  }

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      alt='Product'
    />
  );
};