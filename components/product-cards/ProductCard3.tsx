import Image from 'next/image';

import { Product } from '@/public/interfaces';

interface Props {
  product: Product;
  extraClassNames?: string;
}

const ProductCard3: React.FC<Props> = ({ extraClassNames, product }) => {
  const { image, description } = product;

  return (
    <div
      className={`shrink-0 w-[436px] h-[436px] rounded-[9px] overflow-clip relative before:absolute before:z-[1] before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)] before:w-full before:h-full ${extraClassNames}`}
    >
      <Image alt='' fill priority src={image} quality={70} className='object-cover' />

      <p className='w-[300px] font-semibold text-[16px] leading-[30px] text-white absolute bottom-[30px] left-[30px] z-[2]'>
        {description}
      </p>
    </div>
  );
};

export default ProductCard3;
