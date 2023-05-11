import { ExtraStyle } from '@/public/interfaces';
import { useEffect, useRef, useState } from 'react';

interface Props {
  onScroll?: () => void;
  targetSelector: string;
  extraTrackStyles?: ExtraStyle;
  extraThumbStyles?: ExtraStyle;
  extraTrackClassNames?: string;
  extraThumbClassNames?: string;
}

const HorizontalScrollBar: React.FC<Props> = ({
  onScroll,
  targetSelector,
  extraTrackStyles,
  extraThumbStyles,
  extraTrackClassNames,
  extraThumbClassNames,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollbarWidthPercent, setScrollbarWidthPercent] = useState(0);

  useEffect(() => {
    const container: HTMLDivElement | null = document.querySelector(targetSelector);
    if (!container) {
      return console.error(
        `Div container with target: '${targetSelector}' does not exist in the DOM`
      );
    }

    // set width for thumb...
    const conatinerWidth: number = container.clientWidth || 0;
    const conatinerScrollWidth: number = container.scrollWidth || 1;
    const widthScale: number = conatinerWidth / conatinerScrollWidth;
    const newWidthPercent: number = widthScale * 100;
    setScrollbarWidthPercent(newWidthPercent);

    thumbRef.current!.style.width = `${newWidthPercent}%`;

    // ...then add scroll listener to linked container
    container.onscroll = () => {
      const newScrollLeft = container.scrollLeft || 0;
      thumbRef.current!.style.left = `${newScrollLeft * widthScale}px`;

      if (onScroll) onScroll();
    };
  });

  // componentDidUnmount
  useEffect(() => {
    return () => {
      window.onmouseup = null;
    };
  }, []);

  const onDrag = (e: globalThis.MouseEvent) => {
    const { movementX } = e;
    const container: HTMLDivElement | null = document.querySelector(targetSelector);
    if (!container) {
      return console.error(
        `Div container with target: '${targetSelector}' does not exist in the DOM`
      );
    }

    const oldScrollLeft: number = container.scrollLeft;
    // const newScrollLeft = oldScrollLeft + scrollbarWidthPercent * movementX;
    const newScrollLeft: number = oldScrollLeft + 200 * movementX;

    container.scrollLeft = newScrollLeft;
  };

  const onThumbMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);

    thumbRef.current!.style.height = '7px';

    window.addEventListener('mousemove', onDrag);
    window.onmouseup = thumbRef.current!.onmouseup = () => {
      setIsMouseDown(false);

      thumbRef.current!.style.height = '2px';
      window.removeEventListener('mousemove', onDrag);
    };

    e.stopPropagation();
  };

  const onThumbMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(false);

    thumbRef.current!.style.height = '5px';

    e.stopPropagation();
  };

  const onTrackMouseEnter = () => {
    thumbRef.current!.style.height = '5px';
  };

  const onTrackMouseLeave = () => {
    if (!isMouseDown) thumbRef.current!.style.height = '2px';
  };

  return (
    <div
      ref={trackRef}
      style={extraTrackStyles}
      onMouseEnter={onTrackMouseEnter}
      onMouseLeave={onTrackMouseLeave}
      className={`relative rounded mt-[30px] w-full h-[2px] bg-alto-dark transition-all duration-300 ${extraTrackClassNames}`}
    >
      <div
        ref={thumbRef}
        style={extraThumbStyles}
        onMouseUp={onThumbMouseUp}
        onMouseDown={onThumbMouseDown}
        className={`absolute rounded h-full bg-cod-gray ease-linear ${extraThumbClassNames}`}
      />
    </div>
  );
};

export default HorizontalScrollBar;
