import { ExtraStyle } from '@/public/interfaces';
import { togglePassword } from '@/public/utils';

interface Props {
  extraStyles?: ExtraStyle;
  extraClassnames?: string;
  passwordRef: React.RefObject<HTMLInputElement>;
}

const Eye: React.FC<Props> = ({ passwordRef, extraClassnames, extraStyles }) => {
  return (
    <div
      style={extraStyles}
      onClick={() => togglePassword(passwordRef)}
      className={`cursor-pointer w-[18px] h-[18px] bg-[url(/assets/svgs/eye.svg)] bg-no-repeat bg-center absolute right-[22px] transition-all duration-300 rounded-[50%] hover:shadow hover:bg-mercury hover:shadow-mercury ${extraClassnames}`}
    />
  );
};

export default Eye;
