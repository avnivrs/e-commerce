import Image from 'next/image';

import BrandBubble from '../BrandBubble';
import { Product } from '@/public/interfaces';

interface Props {
  product: Product;
  extraClassNames?: string;
}

const ProductCard1: React.FC<Props> = ({ extraClassNames, product }) => {
  const { image, name, price, rating, brand } = product;

  return (
    <div
      className={`shrink-0 w-[200px] h-[248px] rounded-[9px] overflow-clip relative ${extraClassNames}`}
    >
      <Image alt={name} priority src={image} width={200} height={152} className='min-h-[152px]' />
      <BrandBubble brandName={brand} />

      <div className='absolute bottom-0 bg-concrete grid grid-cols-2 grid-rows-[44px_minmax(0,1fr)] gap-y-[5px] p-[10px_15px_15px] w-full h-24 text-[12px] leading-[22px] text-outer-space'>
        <p className='col-start-1 col-end-3 overflow-hidden whitespace-nowrap text-ellipsis pr-[30%] font-medium'>
          {name}
        </p>
        <p className='font-semibold text-azure-radiance'>${price.toFixed(2)}</p>
        <div className='text-right ml-auto w-[37px] h-[15px] font-normal leading-[15px] bg-[url(/assets/svgs/star-rounded.svg)] bg-no-repeat'>
          {rating.toFixed(1)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
