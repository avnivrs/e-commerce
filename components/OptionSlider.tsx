import { SliderProps } from '@/public/interfaces';

const OptionSlider: React.FC<SliderProps> = ({ width, marginLeft }) => {
  return (
    <div className='bg-mischka h-px w-full px-[21.3%] mt-[15px]'>
      <div style={{ width, marginLeft }} className='h-full bg-black transition-all duration-500' />
    </div>
  );
};

export default OptionSlider;
