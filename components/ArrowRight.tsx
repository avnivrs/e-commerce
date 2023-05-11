import { ExtraStyle } from '@/public/interfaces';

interface Props {
  onClick?: () => void;
  onMouseUp?: () => void;
  extraClassnames?: string;
  extraStyles?: ExtraStyle;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
}

const ArrowRight: React.FC<Props> = ({
  onClick,
  onMouseUp,
  onMouseEnter,
  onMouseLeave,
  extraClassnames,
}) => (
  <svg
    width='14'
    height='14'
    fill='none'
    onClick={onClick}
    viewBox='0 0 14 14'
    onMouseUp={onMouseUp}
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
    xmlns='http://www.w3.org/2000/svg'
    className={`absolute cursor-pointer z-10 top-1/2 -translate-y-1/2 p-[10px] box-content border-white border-[6px] grid place-items-center text-white bg-zorba rounded-full duration-500 dark:border-shark dark:bg-white dark:text-zorba small-phones:hidden ${extraClassnames}`}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      fill='currentColor'
      d='M14 7.00013L7.00035 0L5.7629 1.23712L10.6506 6.12514H0V7.87495H10.6502L5.76202 12.7627L6.9993 14L14 7.00013V7.00013Z'
    />
  </svg>
);

export default ArrowRight;
