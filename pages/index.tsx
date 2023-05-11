import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Slider from '@/components/Slider';
import NavItem from '@/components/NavItem';
import User from '@/components/icons/User';
import Overlay from '@/components/Overlay';
import AvniCard from '@/components/AvniCard';
import ArrowRight from '@/components/ArrowRight';
import OptionSlider from '@/components/OptionSlider';
import OptionBubble from '@/components/OptionBubble';
import SectionLayout from '@/components/layouts/SectionLayout';
import ArrowRightCircled from '@/components/ArrowRightCircled';
import ProductCard1 from '@/components/product-cards/ProductCard1';
import ProductCard2 from '@/components/product-cards/ProductCard2';
import ProductCard3 from '@/components/product-cards/ProductCard3';
import ProductCard4 from '@/components/product-cards/ProductCard4';
import ProductCard5 from '@/components/product-cards/ProductCard5';
import HorizontalScrollBar from '@/components/HorizontalScrollBar';

import { Product, SliderProps } from '@/public/interfaces';

import {
  addClass,
  showAlert,
  removeClass,
  toggleClass,
  scrollScreenTo,
  scrollNextItems,
  scrollPreviousItems,
} from '@/public/utils';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [overlayOpened, setOverlayOpened] = useState(false);
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

  const fetchProducts = () => {
    axios
      .get('/api/products')
      .then(res => {
        const data: { products: Product[] } = res.data;
        setProducts(data.products);
      })
      .catch(error => showAlert({ msg: 'An error occured while fetching products' }));
  };

  useEffect(fetchProducts, []);

  return (
    <main className='home-scroll h-screen overflow-y-auto text-outer-space dark:text-white'>
      <Overlay onClick={() => setOverlayOpened(false)} visible={overlayOpened} />
      <nav className='w-full'>
        <div className='bg-white-lilac text-outer-space relative h-11 flex items-center justify-center gap-x-10 text-[12px] leading-[15px]'>
          <NavItem
            href='/'
            text='How Rhobuy works'
            bgUrl='bg-[url(/assets/svgs/route-square.svg)]'
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

      <section className='text-center relative mt-[150px] bg-[url(/assets/pngs/clothing.png)] bg-no-repeat before:absolute before:bg-[rgba(0,0,0,0.5)] before:backdrop-blur-[5px] before:inset-0 before:w-full before:h-full bg-fixed bg-alto h-screen font-semibold text-alto-light px-[15%] pt-[17.5%] pb-[15%] grid grid-cols-1 gap-y-10'>
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
          onClick={() => scrollPreviousItems('.option-bubbles', 143)}
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

          <div className='scroll-hidden option-bubbles mt-10 overflow-x-auto flex items-center gap-x-10 p-10 border-b border-mischka'>
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
          onClick={() => scrollNextItems('.option-bubbles', 143)}
        />
      </section>

      <section className='mt-[100px]'>
        <header className='w-[900px] mx-auto flex items-center justify-between font-medium tracking-[0.36px]'>
          <h2 className='w-[300px] text-[24px] leading-[45px]'>
            Inspired by the things other shop
          </h2>
          <p className='w-[296px] text-[14px] leading-[21px]'>
            Get inspired by others&apos; shopping choices with our carefully curated collection
          </p>
        </header>

        <div id='products' className='scroll-hidden mt-[50px] flex gap-x-6 overflow-x-auto'>
          {products.map(product => (
            <ProductCard1 key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Slider />

      <SectionLayout>
        <header className='tracking-[0.36px] w-[520px]'>
          <h3 className='text-[24px] leading-[45px]'>
            Kid&apos;s Corner: Where Fun Meets Learning
          </h3>
          <p className='mt-6 text-[14px] leading-[21px]'>
            Explore our collection of clothes, shoes, toys, and educational products for kids and
            give them the gift of fun and learning.
          </p>
          <hr className='mt-[30px] w-[120px] border border-alto-light' />
        </header>

        <div className='kids-corner mt-[50px] w-full flex gap-x-[10px] snap-x snap-mandatory scroll-hidden overflow-x-auto'>
          {products
            .filter(({ name }) => name.includes('Armchairs'))
            .map(product => (
              <ProductCard2 key={product.id} product={product} extraClassNames='snap-start' />
            ))}
        </div>

        <HorizontalScrollBar targetSelector='.kids-corner' />
      </SectionLayout>

      <SectionLayout>
        <header className='font-medium text-[24px] leading-[45px] tracking-[0.36px] flex justify-between'>
          <h3 className='w-[300px]'>
            Tech Accessories under $10
            <hr className='mt-[10px] w-[120px] border border-alto-light' />
          </h3>
          <h3 className='w-[290px] text-right'>
            Fashion trends in shoes
            <hr className='mt-[10px] block ml-auto w-[120px] border border-alto-light' />
          </h3>
        </header>

        <div className='relative mt-[50px]'>
          <ArrowRight
            onClick={() => scrollPreviousItems('.products2', 436)}
            extraClassnames='-rotate-180 -left-6'
          />
          <ArrowRight
            onClick={() => scrollNextItems('.products2', 436)}
            extraClassnames='-right-6'
          />

          <div className='products2 flex w-full overflow-x-auto gap-x-7 snap-x snap-mandatory scroll-hidden'>
            {products
              .filter(({ name }) => ['Shoes', 'Watch'].includes(name))
              .map(product => (
                <ProductCard3 key={product.id} product={product} extraClassNames='snap-start' />
              ))}
          </div>

          <HorizontalScrollBar targetSelector='.products2' />
        </div>
      </SectionLayout>

      <section className='w-[87%] mt-[100px] font-semibold text-outer-space mx-auto bg-concrete rounded-[30px] pt-[35px] px-[100px] flex items-center justify-center gap-x-[200px]'>
        <div className='flex flex-col gap-y-[25px]'>
          <div className='bg-[url(/assets/svgs/bag-2.svg)] w-[60px] h-[60px] bg-no-repeat' />
          <p className='text-[24px] leading-[29px]'>Experience our app on the go!</p>
          <p className='font-medium text-[15px] leading-[30px] text-light-dove-gray'>
            Download it today on the App Store and Google Play to enjoy easy access to all our
            features, wherever you are. Get started now and take your experience to the next level!
          </p>
          <div className='flex items-center gap-x-[25px]'>
            Download now
            <Link
              href='/'
              target='_blank'
              className='block my-auto w-12 h-12 bg-center bg-no-repeat rounded-[60px] bg-[url(/assets/svgs/apple-white.svg)] bg-azure-radiance'
            />
            <Link
              href='/'
              target='_blank'
              className='block my-auto w-12 h-12 bg-center bg-no-repeat rounded-[60px] bg-[url(/assets/svgs/googleplay.svg)] bg-azure-radiance'
            />
          </div>
        </div>
        <Image
          alt=''
          priority
          width={247}
          height={504}
          unoptimized
          src='/assets/pngs/phone.png'
          className='w-[247px] h-[504px]'
        />
      </section>

      <SectionLayout>
        <header className='font-medium tracking-[0.36px]'>
          <h4 className='text-[24px] leading-[45px]'>
            Fashion Trending - Our Most Popular Products
          </h4>
          <p className='mt-6 max-w-[476px] text-[14px] leading-[21px]'>
            The Essentials You Can&apos;t Live Without - Shop Our Most Popular Beauty & Fashion
            Products
          </p>
          <hr className='mt-[30px] w-[120px] border border-alto-light' />
        </header>

        <div className='relative mt-[50px]'>
          <ArrowRight
            onClick={() => scrollPreviousItems('.products3', 200)}
            extraClassnames='-rotate-180 -left-6'
          />
          <ArrowRight
            onClick={() => scrollNextItems('.products3', 200)}
            extraClassnames='-right-6'
          />

          <div className='products3 flex w-full overflow-x-auto snap-x snap-mandatory gap-x-[33px] scroll-hidden'>
            {products.map(product => (
              <ProductCard1 key={product.id} product={product} extraClassNames='snap-start' />
            ))}
          </div>

          <HorizontalScrollBar targetSelector='.products3' />
        </div>
      </SectionLayout>

      <SectionLayout>
        <header className='font-medium tracking-[0.36px]'>
          <h5 className='text-[24px] leading-[45px]'>Shop by Department</h5>
          <p className='mt-6 max-w-[476px] text-[14px] leading-[21px]'>
            Shop smarter by exploring our curated departments to find the perfect match for your
            needs
          </p>
          <hr className='mt-[30px] w-[120px] border border-alto-light' />
        </header>

        <div className='relative mt-[50px]'>
          <ArrowRight
            onClick={() => scrollPreviousItems('.products4', 436)}
            extraClassnames='-rotate-180 -left-6'
          />
          <ArrowRight
            onClick={() => scrollNextItems('.products4', 436)}
            extraClassnames='-right-6'
          />

          <div className='products4 flex w-full overflow-x-auto gap-x-7 snap-x snap-mandatory scroll-hidden'>
            {products
              .filter(({ name }) => ['Shoes', 'Watch'].includes(name))
              .map(product => (
                <ProductCard4 key={product.id} product={product} extraClassNames='snap-start' />
              ))}
          </div>

          <HorizontalScrollBar targetSelector='.products4' />
        </div>
      </SectionLayout>

      <section className='w-[87%] mt-[100px] text-outer-space mx-auto bg-concrete rounded-[30px] py-20 flex'>
        <div className='text-center flex-1 border-r-[0.5px] border-alto'>
          <div className='mx-auto bg-[url(/assets/svgs/hashtag.svg)] bg-center bg-no-repeat w-[60px] h-[60px]' />
          <p className='mt-[30px] font-semibold text-[18px] leading-[22px] text-azure-radiance'>
            Product Aggregation
          </p>
          <p className='mt-[15px] font-medium text-[14px] leading-[30px] text-light-dove-gray max-w-[400px] mx-auto'>
            Shop multiple stores at once! Our product aggregation feature makes it easy to find what
            you&apos;re looking for by giving you access to a wide range of options in one place.
          </p>
        </div>

        <div className='text-center flex-1 border-l-[0.5px] border-alto'>
          <div className='mx-auto bg-[url(/assets/svgs/neo-3.svg)] bg-center bg-no-repeat w-[60px] h-[60px]' />
          <p className='mt-[30px] font-semibold text-[18px] leading-[22px] text-azure-radiance'>
            AI Search<span className='text-outer-space'> with Neo</span>
          </p>
          <p className='mt-[15px] font-medium text-[14px] leading-[30px] text-light-dove-gray max-w-[400px] mx-auto'>
            Find your perfect product with ease. Our AI-powered search uses conversational language
            to filter out the best results for you. Say goodbye to endless scrolling and hello to a
            seamless shopping experience.
          </p>
        </div>
      </section>

      <SectionLayout>
        <header className='font-medium tracking-[0.36px]'>
          <h5 className='text-[24px] leading-[45px]'>Personalized Shopping for You!</h5>
          <p className='mt-6 max-w-[476px] text-[14px] leading-[21px]'>
            Find your perfect match with our tailored recommendations. Shop personalized items based
            on your unique personality
          </p>
          <hr className='mt-[30px] w-[120px] border border-alto-light' />
        </header>

        <div className='mt-[52px] flex w-full flex-wrap gap-[30px]'>
          {products.slice(0, 6).map(product => (
            <ProductCard5 key={product.id} product={product} />
          ))}
        </div>

        <Link
          href='/'
          target='_blank'
          className='block w-max mx-auto rounded-[30px] mt-[45px] text-center border border-alto-light py-3 px-5 font-medium text-[12px] leading-[15px] tracking-[0.36px]'
        >
          View more
        </Link>
      </SectionLayout>

      <button
        onClick={() => scrollScreenTo({ y: 0 })}
        className='bg-dove-gray py-[17px] w-full text-center mt-20 font-bold text-[12px] leading-[15px] tracking-[0.36px] text-wild-sand'
      >
        Back to top
      </button>
    </main>
  );
};

export default Home;
