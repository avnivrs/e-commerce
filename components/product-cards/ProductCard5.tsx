import Image from 'next/image';

import BrandBubble from '../BrandBubble';
import { Product } from '@/public/interfaces';

interface Props {
  product: Product;
  extraClassNames?: string;
}

const ProductCard5: React.FC<Props> = ({ extraClassNames, product }) => {
  const { image, name, price, brand } = product;

  return (
    <div
      className={`shrink-0 w-[280px] h-[362px] rounded-3xl overflow-clip relative ${extraClassNames}`}
    >
      <Image
        priority
        alt={name}
        src={image}
        width={280}
        unoptimized
        height={362}
        className='w-full min-h-[315px]'
      />

      <div className='absolute top-0 w-full bg-gallery pt-3 pb-[9px] px-[11px] grid gap-x-3 grid-cols-[38px_minmax(0,1fr)_18px]'>
        <BrandBubble brandName={brand} extraClassNames='!static' />
        <p className='text-outer-space font-semibold text-[12px] leading-[15px] self-center'>
          {name.split(' ')[0]}
        </p>
        <button className='bg-[url(/assets/svgs/more.svg)] bg-center bg-no-repeat w-[18px] h-[18px] self-center' />
      </div>

      <div className='absolute bottom-0 bg-gallery flex justify-between gap-x-12 p-[15px_20px_20px] w-full text-[12px] leading-[15px] text-outer-space'>
        <p className='overflow-hidden whitespace-nowrap text-ellipsis font-medium'>{name}</p>
        <p className='font-bold text-mariner'>${price.toFixed(0)}</p>
      </div>
    </div>
  );
};

export default ProductCard5;
