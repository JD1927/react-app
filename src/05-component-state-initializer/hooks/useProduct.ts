import { useEffect, useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);


  return { counter, increaseBy };
};