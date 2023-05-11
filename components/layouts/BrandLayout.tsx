interface Props {
  children: JSX.Element;
  extraClassNames?: string;
}

const BrandLayout: React.FC<Props> = ({ children, extraClassNames }) => {
  return (
    <div
      className={`absolute top-[10px] right-[10px] w-[38px] h-[26px] bg-[rgba(255,255,255,0.7)] backdrop-blur-md rounded-[20px] grid place-items-center ${extraClassNames}`}
    >
      {children}
    </div>
  );
};

export default BrandLayout;
