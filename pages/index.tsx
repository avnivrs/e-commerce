import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import NavItem from '@/components/NavItem';
import User from '@/components/icons/User';
import Overlay from '@/components/Overlay';
import AvniCard from '@/components/AvniCard';
import ProductCard from '@/components/ProductCard';
import OptionSlider from '@/components/OptionSlider';
import OptionBubble from '@/components/OptionBubble';
import ArrowRight from '@/components/icons/ArrowRight';
import ArrowRightCircled from '@/components/icons/ArrowRightCircled';

import { Product, SliderProps } from '@/public/interfaces';

import {
  addClass,
  showAlert,
  removeClass,
  toggleClass,
  scrollNextItems,
  scrollPreviousItems,
} from '@/public/utils';

const Home = () => {
  const [timer, setTimer] = useState(0);
  const [movementX, setMovementX] = useState(10);
  const [products, setProducts] = useState<Product[]>([]);
  const [overlayOpened, setOverlayOpened] = useState(false);
  const [previousMovementX, setPreviousMovementX] = useState(movementX);
  const optionProps: SliderProps[] = [
    { width: 114, marginLeft: 0 },
    { width: 140, marginLeft: '33.5%' },
    { width: 144, marginLeft: '72.5%' },
  ];
  const [sliderProps, setSliderProps] = useState<SliderProps>(optionProps[0]);

  const selectOption = (optionIndex: number) => {
    // unselect all p tags
    const pTags: NodeListOf<HTMLParagraphElement> =
      document.querySelectorAll('.options > header > p');

    pTags.forEach(pTag => {
      removeClass(pTag, 'text-black', 'dark:text-white');
      addClass(pTag, 'text-light-dove-gray');
    });

    // ...then select clicked p tag
    const pTag: HTMLParagraphElement = pTags[optionIndex];
    toggleClass(pTag, 'text-light-dove-gray', 'text-black', 'dark:text-white');

    // ...then move slider
    const newSliderProps = optionProps[optionIndex];
    if (newSliderProps) setSliderProps(newSliderProps);
  };

  useEffect(() => {
    axios
      .get('/api/products')
      .then(res => {
        const data: { products: Product[] } = res.data;
        setProducts(data.products);
      })
      .catch(error => showAlert({ msg: 'An error occured while fetching products' }));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer(value => value + 1);

      if (movementX === 0) return;

      const { clientWidth, scrollLeft, scrollWidth }: HTMLDivElement =
        document.querySelector('.products')!;

      const reachedStart: boolean = scrollLeft === 0;
      const reachedEnd: boolean = Math.abs(scrollWidth - scrollLeft - clientWidth) < 1;
      const movementToRight: boolean = movementX > 0;

      scrollNextItems('.products', movementX);
      if (reachedEnd && movementToRight) setMovementX(value => -1 * value);
      else if (reachedStart && !movementToRight) setMovementX(value => -1 * value);
    }, 1);
    return () => clearTimeout(timeout);
  }, [timer, movementX]);

  return (
    <main className='home min-h-screen text-outer-space dark:text-white'>
      <Overlay onClick={() => setOverlayOpened(false)} visible={overlayOpened} />
      <nav className='w-full'>
        <div className='bg-white-lilac text-outer-space relative h-11 flex items-center justify-center gap-x-10 text-[12px] leading-[15px]'>
          <NavItem
            href='/'
            bgUrl='bg-[url(/assets/svgs/route-square.svg)]'
            text='How Rhobuy works'
          />
          <NavItem href='/' bgUrl='bg-[url(/assets/svgs/receive-square.svg)]' text='Download App' />
          <NavItem href='/' bgUrl='bg-[url(/assets/svgs/clipboard-tick.svg)]' text='Orders' />
          <NavItem href='/' bgUrl='bg-[url(/assets/svgs/heart.svg)]' text='Wishlist' />
          <NavItem href='/' bgUrl='bg-[url(/assets/svgs/bag.svg)]' text='Cart' />
          <NavItem href='/' bgUrl='bg-[url(/assets/svgs/message-question.svg)]' text='Support' />
          <button
            onClick={() => setOverlayOpened(true)}
            className='font-semibold absolute right-[4%] text-light-dove-gray'
          >
            By <span className='text-azure-radiance'>Avniverse</span>
          </button>
          <AvniCard visible={overlayOpened} />
        </div>

        <div className='mt-5 px-[50px] grid grid-cols-[auto_minmax(0,1fr)_auto_auto] gap-x-[10px] font-medium'>
          <div className='bg-azure-radiance w-6 h-[18px] rounded-full ' />

          <p className='pr-[50px] text-[14px] leading-[17px]'>Company name</p>

          <div className='text-[12px] leading-[15px] flex items-center justify-center gap-x-[10px] pr-[30px]'>
            <User />
            Log in or Sign up
          </div>

          <button className='block border-y-2 w-5 h-3 self-center' />
        </div>
      </nav>

      <header className='mt-[98px]'>
        <h1 className='font-semibold text-[24px] leading-[29px] text-center'>
          Shop inspired, create magic!
        </h1>

        <div className='relative mt-[30px] w-fit mx-auto text-outer-space'>
          <input
            type='text'
            placeholder='Explore varieties of stores to find your perfect match...'
            className='w-[600px] outline-none mx-auto block font-medium text-[14px] leading-[17px] py-[22px] pl-[25px] pr-[135px] placeholder:text-[rgba(0,0,0,0.5)] rounded-xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)] bg-white border border-mercury-light-1'
          />

          <div className='bg-[rgba(0,0,0,0.05)] rounded-md absolute top-[16.3%] right-[1.7%] bg-[url(/assets/svgs/neo-1.svg)] bg-no-repeat bg-[12.5%_53%] pl-[37px] pr-[15px] pt-[13px] w-auto h-[41px] font-normal text-[14px] leading-[17px]'>
            AI search
          </div>
        </div>
      </header>

      <section className='text-center relative mt-[150px] bg-[url(/assets/pngs/clothing.png)] before:absolute before:bg-[rgba(0,0,0,0.5)] before:backdrop-blur-[5px] before:inset-0 before:w-full before:h-full bg-fixed bg-alto h-screen font-semibold text-alto-light px-[15%] pt-[17.5%] pb-[15%] grid grid-cols-1 gap-y-10'>
        <p className='text-[18px] leading-[22px] z-[1]'>Hello, I&apos;m Neo</p>
        <p className='text-white text-[24px] leading-[29px] z-[1]'>
          I will be your personal shopping assistant
        </p>
        <p className='text-[32px] leading-[39px] z-[1]'>
          Together we are on a mission to get your perfect piece...
        </p>
        <div className='z-[1] mt-5 mx-auto bg-white w-20 h-20 bg-[url(/assets/svgs/neo-2.svg)] bg-no-repeat bg-center rounded-[72px]' />
      </section>

      <section className='flex items-center justify-center'>
        <ArrowRightCircled
          width='35'
          height='35'
          extraClassnames='-rotate-180 mt-36 cursor-pointer'
          onClick={() => scrollPreviousItems('.option-bubbles')}
        />

        <div className='options mt-[102px] w-[900px]'>
          <header className='flex items-center justify-center gap-x-[60px] font-medium text-[12px] leading-[15px]'>
            <p
              onClick={() => selectOption(0)}
              className='text-black dark:text-white cursor-pointer transition-colors duration-500'
            >
              Shop by Category
            </p>
            <p
              onClick={() => selectOption(1)}
              className='text-light-dove-gray cursor-pointer transition-colors duration-500'
            >
              Shop by Demographic
            </p>
            <p
              onClick={() => selectOption(2)}
              className='text-light-dove-gray cursor-pointer transition-colors duration-500'
            >
              Shop by Style & Space
            </p>
          </header>
          <OptionSlider width={sliderProps.width} marginLeft={sliderProps.marginLeft} />

          <div className='scroll-hidden mt-10 overflow-x-auto flex items-center gap-x-10 p-10 border-b border-mischka'>
            <OptionBubble bgName='kids' />
            <OptionBubble bgName='gadgets' />
            <OptionBubble bgName='clothing' />
            <OptionBubble bgName='health' />
            <OptionBubble bgName='sports' />
          </div>
        </div>

        <ArrowRightCircled
          width='35'
          height='35'
          extraClassnames='mt-36 cursor-pointer'
          onClick={() => scrollNextItems('.option-bubbles')}
        />
      </section>

      <section className='mt-[100px]'>
        <header className='w-[900px] mx-auto flex items-center justify-between font-medium tracking-[0.36px]'>
          <p className='w-[300px] text-[24px] leading-[45px]'>Inspired by the things other shop</p>
          <p className='w-[296px] text-[14px] leading-[21px]'>
            Get inspired by others&apos; shopping choices with our carefully curated collection
          </p>
        </header>

        <div
          onMouseEnter={() => {
            setPreviousMovementX(movementX);
            setMovementX(0);
          }}
          onMouseLeave={() => setMovementX(previousMovementX)}
          className='products scroll-hidden mt-[50px] flex gap-x-6 overflow-x-auto'
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className='relative'>
        <header className='mt-[100px] text-center font-medium text-[24px] leading-[29px]'>
          Inspired shopping, perfect kitchen, cook magic!
        </header>
        <ArrowRight />

        <div className='relative before:mx-auto before:rounded-[9px] before:absolute before:bg-[rgba(0,0,0,0.3)] before:inset-0 before:w-[899px] before:h-full'>
          <Image
            alt=''
            width={899}
            height={500}
            src='/assets/pngs/kitchen.png'
            className='mx-auto mt-[50px]'
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
