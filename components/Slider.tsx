import Image from 'next/image';
import { useState } from 'react';

import Ripple from './Ripple';
import ArrowRight from './ArrowRight';
import SectionLayout from './layouts/SectionLayout';
import HorizontalScrollBar from './HorizontalScrollBar';

import { Slide } from '@/public/interfaces';
import { scrollNextItems, scrollPreviousItems } from '@/public/utils';

const Slider = () => {
  const slides: Slide[] = [
    {
      id: 0,
      image: '/assets/pngs/kitchen.png',
      title: 'Inspired shopping, perfect kitchen, cook magic!1',
      focalPoints: [
        { title: 'oven', xPos: '15.8%', yPos: '39%' },
        { title: 'wall cabinet', xPos: '40.5%', yPos: '21.6%' },
        { title: 'pendant lamp', xPos: '60.7%', yPos: '25.6%' },
        { title: 'mini basket', xPos: '33%', yPos: '53.8%' },
        { title: 'kitchen stool', xPos: '46.4%', yPos: '68.4%' },
        { title: 'kitchen desk', xPos: '67.3%', yPos: '56.2%' },
        { title: 'inset sink', xPos: '90.4%', yPos: '52.6%' },
      ],
    },
    {
      id: 1,
      image: '/assets/pngs/kitchen.png',
      title: 'Inspired shopping, perfect kitchen, cook magic!2',
      focalPoints: [
        { title: 'oven', xPos: '15.8%', yPos: '39%' },
        { title: 'wall cabinet', xPos: '40.5%', yPos: '21.6%' },
        { title: 'pendant lamp', xPos: '60.2%', yPos: '25.6%' },
        { title: 'mini basket', xPos: '33%', yPos: '53.8%' },
      ],
    },
    {
      id: 2,
      image: '/assets/pngs/kitchen.png',
      title: 'Inspired shopping, perfect kitchen, cook magic!3',
      focalPoints: [
        { title: 'oven', xPos: '15.8%', yPos: '39%' },
        { title: 'kitchen stool', xPos: '46.4%', yPos: '68.4%' },
        { title: 'kitchen desk', xPos: '67.3%', yPos: '56.2%' },
        { title: 'inset sink', xPos: '90.4%', yPos: '52.6%' },
      ],
    },
  ];

  const slidesLength: number = slides.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const [focusedPointIndex, setFocusedPointIndex] = useState(-1);

  const changeSlide = (n: number) => {
    const newSlideIndex = slideIndex + n;

    if (newSlideIndex < slidesLength && newSlideIndex >= 0) {
      setSlideIndex(value => value + n);
    }
  };

  return (
    <SectionLayout extraClassNames='relative'>
      <ArrowRight
        onClick={() => {
          changeSlide(-1);
          scrollPreviousItems('.slides');
        }}
        extraClassnames='-rotate-180 -left-6 !top-[54%]'
      />
      <ArrowRight
        onClick={() => {
          changeSlide(1);
          scrollNextItems('.slides');
        }}
        extraClassnames='-right-6 !top-[54%]'
      />

      <div className='slides flex w-full overflow-x-auto snap-x snap-mandatory gap-x-4 scroll-hidden'>
        {slides.map(({ id, title, image, focalPoints }) => (
          <div key={id} className='shrink-0 snap-center'>
            <header className='text-center text-[24px] leading-[29px]'>{title}</header>

            <div className='relative before:mx-auto before:rounded-[8px] before:absolute before:bg-[rgba(0,0,0,0.3)] before:inset-0 before:w-full before:h-full'>
              <Image
                alt=''
                priority
                src={image}
                width={899}
                height={500}
                quality={60}
                className='mx-auto mt-[50px]'
                onClick={() => setFocusedPointIndex(-1)}
              />

              {focalPoints.map(({ title, xPos, yPos }, index) => (
                <div
                  key={index}
                  style={{ top: yPos, left: xPos }}
                  onMouseLeave={() => setFocusedPointIndex(-1)}
                  className='absolute flex flex-col justify-start gap-y-4'
                >
                  <Ripple
                    extraClassnames='mr-auto'
                    onMouseEnter={() => setFocusedPointIndex(index)}
                  />
                  <p
                    className={`mt-2 -ml-[50%] whitespace-nowrap font-medium text-[12px] leading-[15px] text-center capitalize text-dove-gray py-[17px] bg-white rounded-[64px] shadow-[0px_2px_10px_rgba(255,255,255,0.1)] max-w-max overflow-hidden duration-500 ${
                      slideIndex === id && focusedPointIndex === index
                        ? 'w-[500px] px-[35px]'
                        : 'w-0 px-0'
                    }`}
                  >
                    Category
                    <span className='font-semibold text-[14px] leading-[17px] block text-outer-space'>
                      {title}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <HorizontalScrollBar targetSelector='.slides' />
    </SectionLayout>
  );
};

export default Slider;
