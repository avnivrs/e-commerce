import Image from 'next/image';

import { Product } from '@/public/interfaces';

interface Props {
  product: Product;
  extraClassNames?: string;
}

const ProductCard2: React.FC<Props> = ({ extraClassNames, product }) => {
  const { image, name, price } = product;

  return (
    <div
      className={`shrink-0 w-[217px] h-[274px] rounded-[9px] overflow-clip relative ${extraClassNames}`}
    >
      <Image alt='' fill priority src={image} className='object-cover' />

      <div className='max-w-[150px] absolute bottom-[15px] left-1/2 -translate-x-1/2 font-semibold text-[11px] leading-[14px] bg-white rounded-[60px] py-[15px] px-[25px] flex gap-x-[10px]'>
        <p className='overflow-hidden text-ellipsis whitespace-nowrap text-outer-space'>{name}</p>
        <p className='font-semibold text-azure-radiance'>${price.toFixed(0)}</p>
      </div>
    </div>
  );
};

export default ProductCard2;
