import { ExtraStyle } from '@/public/interfaces';

interface Props {
  visible?: boolean;
  onClick?: () => void;
  extraStyles?: ExtraStyle;
}

const Overlay: React.FC<Props> = ({ extraStyles, onClick, visible }) => {
  return (
    <div
      onClick={onClick}
      style={extraStyles}
      className={`fixed top-0 left-0 z-[5] h-screen w-screen bg-[rgba(0,0,0,0.2)] transition-opacity duration-[400] ${
        visible || 'opacity-0 invisible'
      }`}
    />
  );
};

export default Overlay;
