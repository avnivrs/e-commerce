import Image from 'next/image';

import { Product } from '@/public/interfaces';

interface Props {
  product: Product;
  extraClassNames?: string;
}

const ProductCard4: React.FC<Props> = ({ extraClassNames, product }) => {
  const { image, catchPhrase } = product;

  return (
    <div
      className={`shrink-0 grid place-items-center w-[436px] h-[230px] rounded-[9px] overflow-clip relative before:absolute before:z-[1] before:inset-0 before:bg-[rgba(0,0,0,0.5)] before:w-full before:h-full ${extraClassNames}`}
    >
      <Image alt='' fill priority src={image} quality={70} className='object-cover' />

      <p className='font-medium text-[12px] leading-4 bg-white text-cod-gray py-3 px-[25px] z-[2] text-center rounded-[64px]'>
        {catchPhrase}
      </p>
    </div>
  );
};

export default ProductCard4;
