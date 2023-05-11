import { ExtraStyle } from '@/public/interfaces';

interface Props {
  children: JSX.Element[];
  extraClassNames?: string;
  extraStyles?: ExtraStyle;
}

const SectionLayout: React.FC<Props> = ({ children, extraClassNames, extraStyles }) => {
  return (
    <section
      style={extraStyles}
      className={`w-[900px] font-medium mx-auto mt-[100px] ${extraClassNames}`}
    >
      {...children}
    </section>
  );
};

export default SectionLayout;
