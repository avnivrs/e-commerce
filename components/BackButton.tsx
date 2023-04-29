import { ExtraStyle } from '@/public/interfaces';

interface Props {
  onClick?: () => void;
  extraStyles?: ExtraStyle;
}

const BackButton: React.FC<Props> = ({ onClick, extraStyles }) => {
  return (
    <button
      onClick={() => {
        window.history.back();
        if (onClick) onClick();
      }}
      style={extraStyles}
      className='absolute z-10 hidden top-[30px] left-[15px] bg-[url(/assets/svgs/caret-left.svg)] bg-center bg-no-repeat w-[30px] h-[30px] rounded-[60px] bg-athens-gray phones:block'
    />
  );
};

export default BackButton;
