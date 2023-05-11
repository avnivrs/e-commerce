import Image from 'next/image';
import Link from 'next/link';

interface Props {
  visible?: boolean;
}

const AvniCard: React.FC<Props> = ({ visible }) => {
  return (
    <div
      className={`w-[340px] h-[210px] bg-light-dove-gray rounded-[34px] backdrop-blur-2xl p-[30px] transition-all duration-[400] absolute z-10 top-14 right-[4%] ${
        visible || 'opacity-0 invisible'
      }`}
    >
      <header className='font-bold text-[18px] leading-7 tracking-[0.35px] text-wild-sand'>
        Avniverse
      </header>

      <p className='mt-1 mb-[15px] font-semibold text-[12px] leading-4 text-alto-light'>
        Avniverse is driven by a passion to make the world a better place. Rhobuy, a subsidiary,
        shares our commitment to excellence and customer satisfaction.
      </p>

      <div className='grid grid-cols-[28px_minmax(0,1fr)_67px] h-7 gap-x-2 font-semibold'>
        <Image
          alt=''
          priority
          width={28}
          height={28}
          src='/assets/pngs/avni-blue-bg-clear.png'
          className='rounded-md p-[6px] bg-black'
        />
        <p className='text-[11px] leading-[13px] text-alto-light tracking-[0.06px]'>
          Rhobuy, inc.
          <br />
          <span className='text-[13px] leading-[18px] text-wild-sand -tracking-[0.078px]'>
            Avniverse, inc.
          </span>
        </p>
        <Link
          target='_blank'
          href='https://avni.vercel.app'
          className='text-[12px] leading-[15px] text-wild-sand py-3 rounded-3xl bg-azure-radiance w-full text-center'
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

export default AvniCard;
