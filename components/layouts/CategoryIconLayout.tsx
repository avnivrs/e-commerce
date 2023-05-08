interface Props {
  children: JSX.Element;
}

const CategoryIconLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-[143px] h-[143px] mb-[19px] rounded-[50%] border border-mischka grid place-items-center text-outer-space dark:text-white'>
      {children}
    </div>
  );
};

export default CategoryIconLayout;
