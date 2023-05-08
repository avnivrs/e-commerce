import Link from 'next/link';

interface Props {
  href: string;
  text: string;
  bgUrl: string;
}

const NavItem: React.FC<Props> = ({ href, text, bgUrl }) => {
  return (
    <Link href={href} className='flex gap-x-[10px] font-medium'>
      <div className={`w-4 h-4 bg-no-repeat bg-center ${bgUrl}`} />
      {text}
    </Link>
  );
};

export default NavItem;
