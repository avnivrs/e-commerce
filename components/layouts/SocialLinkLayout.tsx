import Link from 'next/link';

interface Props {
  href: string;
  children: JSX.Element;
  extraClassNames?: string;
}

const SocialLinkLayout: React.FC<Props> = ({ children, extraClassNames, href }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className={`p-[11px] box-content border border-alto-light rounded-[50%] dark:border-white ${extraClassNames}`}
    >
      {children}
    </Link>
  );
};

export default SocialLinkLayout;
