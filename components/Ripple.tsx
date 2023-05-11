import { ExtraStyle } from '@/public/interfaces';

interface Props {
  onClick?: () => void;
  onMouseUp?: () => void;
  extraClassnames?: string;
  extraStyles?: ExtraStyle;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
}

const Ripple: React.FC<Props> = ({
  onClick,
  onMouseUp,
  extraStyles,
  onMouseLeave,
  onMouseEnter,
  extraClassnames,
}) => {
  return (
    <div
      onClick={onClick}
      style={extraStyles}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={`ripple ${extraClassnames}`}
    />
  );
};

export default Ripple;
