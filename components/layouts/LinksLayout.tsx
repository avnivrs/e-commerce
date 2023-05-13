interface Props {
  children: JSX.Element[];
  extraClassNames?: string;
}

const LinksLayout: React.FC<Props> = ({ children, extraClassNames }) => {
  return (
    <div
      className={`grid text-[12px] leading-[18px] font-normal whitespace-nowrap ${extraClassNames}`}
    >
      {...children}
    </div>
  );
};

export default LinksLayout;
