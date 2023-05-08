import Image from 'next/image';
import BackButton from '../BackButton';

interface Props {
  children: JSX.Element[];
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className='auth relative h-screen py-[30px] pl-[60px] pr-[50px] flex justify-between laptops:justify-center laptops:px-[50px] phones:p-0'>
      <Image alt='' src='/assets/pngs/bg.png' className='object-cover -z-10' fill priority />
      <BackButton />
      {...children}
    </main>
  );
};

export default MainLayout;
