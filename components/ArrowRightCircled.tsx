interface Props {
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  extraClassnames?: string;
}

const ArrowRightCircled: React.FC<Props> = ({ onClick, extraClassnames, height, width }) => (
  <svg
    fill='none'
    onClick={onClick}
    viewBox='0 0 24 24'
    width={width || '24'}
    height={height || '24'}
    className={extraClassnames}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      opacity='0.4'
      fillRule='evenodd'
      clipRule='evenodd'
      stroke='currentColor'
      d='M11.9998 23.3684C5.72116 23.3684 0.631348 18.2786 0.631348 12C0.631348 5.72139 5.72116 0.63158 11.9998 0.63158C18.2784 0.63158 23.3682 5.72139 23.3682 12C23.3682 18.2786 18.2784 23.3684 11.9998 23.3684Z'
    />
    <path
      fill='currentColor'
      d='M13.8731 7.57895L18.2708 11.9766L13.8731 16.3743L13.0957 15.6122L16.1813 12.5264H6.31592V11.4269H16.1663L13.0957 8.35636L13.8731 7.57895Z'
    />
  </svg>
);

export default ArrowRightCircled;
