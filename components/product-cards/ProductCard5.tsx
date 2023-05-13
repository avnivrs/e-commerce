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
      className={`shrink-0 w-[280px] h-[399px] rounded-3xl overflow-clip relative ${extraClassNames}`}
    >
      <div className='w-full h-[57px] bg-gallery pt-[15px] pb-[10px] px-[15px] grid gap-x-3 grid-cols-[38px_minmax(0,1fr)_18px]'>
        <BrandBubble
          brandName={brand}
          extraClassNames='!static !w-8 !h-8 !rounded-[50%] !bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)]'
        />
        <p className='text-outer-space font-semibold text-[12px] leading-[15px] self-center capitalize'>
          {brand}
        </p>
        <button className='bg-[url(/assets/svgs/more.svg)] bg-center bg-no-repeat w-[18px] h-[18px] self-center' />
      </div>

      <Image
        priority
        alt={name}
        src={image}
        unoptimized
        width={280}
        height={280}
        className='h-[280px] object-cover'
      />
      <button className='absolute top-[69px] right-3 bg-[url(/assets/svgs/bag-3.svg)] bg-center bg-no-repeat w-[38px] h-[38px] bg-[rgba(0,0,0,0.5)] rounded-[30px] backdrop-blur-md' />

      <button className='absolute text-white font-semibold text-[10px] leading-3 top-[301px] right-3 bg-[url(/assets/svgs/level.svg)] bg-[5px_5px] pl-6 pr-[10px] bg-no-repeat h-6 bg-[rgba(0,0,0,0.5)] rounded-[30px] backdrop-blur-md'>
        More like this
      </button>

      <div className='bg-gallery h-[62px] flex justify-between gap-x-12 pt-3 px-[15px] pb-5 w-full text-[12px] leading-[15px] text-outer-space'>
        <p className='overflow-hidden whitespace-nowrap text-ellipsis font-medium'>{name}</p>
        <p className='font-bold text-mariner'>${price.toFixed(0)}</p>
      </div>
    </div>
  );
};

export default ProductCard5;
