import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void
};

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element,
  Title: (Props: ProductTitleProps) => JSX.Element,
  Image: (Props: ProductImageProps) => JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element,
}