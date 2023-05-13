import Link from 'next/link';

import Globe from '../icons/Globe';
import Email from '../icons/Email';
import Tiktok from '../icons/Tiktok';
import Youtube from '../icons/Youtube';
import Twitter from '../icons/Twitter';
import Facebook from '../icons/Facebook';
import Pinterest from '../icons/Pinterest';
import Instagram from '../icons/Instagram';

import LinksLayout from '../layouts/LinksLayout';
import SocialLinkLayout from '../layouts/SocialLinkLayout';

const HomeFooter = () => {
  const currentDate = new Date();
  const EMAIL = 'furniture@avniverse.com';

  const hideAppPopup = (e: React.MouseEvent<HTMLButtonElement>) => {
    const closeButton = e.target as HTMLButtonElement;
    const parentElement = closeButton.parentElement as HTMLDivElement;

    parentElement.style.height = '0';
    closeButton.classList.add('opacity-0', 'invisible');
  };

  return (
    <footer className='bg-wild-sand pt-[70px] overflow-hidden dark:bg-woodsmoke'>
      <div className='w-[998px] mx-auto'>
        <header className='flex items-center justify-between'>
          <div className='flex gap-x-[5px] font-medium text-[14px] leading-[17px]'>
            <div className='bg-azure-radiance w-6 h-[18px] rounded-full' />
            <p>Company name</p>
          </div>

          <div className='flex gap-x-3 ml-auto'>
            <SocialLinkLayout href={`mailto:${EMAIL}`}>
              <Email />
            </SocialLinkLayout>

            <SocialLinkLayout href='https://instagram.com'>
              <Instagram />
            </SocialLinkLayout>

            <SocialLinkLayout href='https://youtube.com'>
              <Youtube />
            </SocialLinkLayout>

            <SocialLinkLayout href='https://twitter.com'>
              <Twitter />
            </SocialLinkLayout>

            <SocialLinkLayout href='https://pinterest.com'>
              <Pinterest />
            </SocialLinkLayout>

            <SocialLinkLayout href='https://tiktok.com'>
              <Tiktok />
            </SocialLinkLayout>

            <SocialLinkLayout href='https://facebook.com'>
              <Facebook />
            </SocialLinkLayout>
          </div>
        </header>

        <main className='border-y mt-[30px] pt-[30px] pb-[60px] text-[12px] leading-[30px] grid grid-cols-[repeat(4,auto)] gap-x-[65px] border-alto-light dark:border-white'>
          <LinksLayout extraClassNames='grid-rows-[58px_repeat(6,38px)]'>
            <p className='font-semibold text-[14px]'>Company Information and Support</p>
            <Link href='/' className='w-max' target='_blank'>
              Learn About Us
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Ethics and Compliance Standards
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Join Our Team
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              News and Updates
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Contact Customer Support
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Get Help and FAQ
            </Link>
          </LinksLayout>

          <LinksLayout extraClassNames='grid-rows-[58px_repeat(4,38px)]'>
            <p className='font-semibold text-[14px]'>Shopping Assistance</p>
            <Link href='/' className='w-max' target='_blank'>
              Neo - AI Shopping Assistant
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Student Specials
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              One Cart for All Your Needs
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Stock Availability Alerts
            </Link>
          </LinksLayout>

          <LinksLayout extraClassNames='grid-rows-[58px_repeat(6,38px)]'>
            <p className='font-semibold text-[14px]'>Account & Orders</p>
            <Link href='/' className='w-max' target='_blank'>
              Your Orders
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Track Your Orders
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Manage Your Avniverse Account
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Your Rhobuy Profile Settings
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Personalize Your Shopping Experience
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Return and Exchange Policy
            </Link>
          </LinksLayout>

          <LinksLayout extraClassNames='grid-rows-[58px_repeat(4,38px)]'>
            <p className='font-semibold text-[14px]'>Discover Avniverse</p>
            <Link href='/' className='w-max' target='_blank'>
              About Avniverse
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Our Brands
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Careers at Avniverse
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Contact Avniverse
            </Link>
          </LinksLayout>
        </main>

        <div className='relative whitespace-nowrap my-[30px] flex items-center justify-between font-normal text-[12px] leading-[18px]'>
          <div className='flex gap-x-3'>
            <SocialLinkLayout href='https://instagram.com'>
              <Instagram />
            </SocialLinkLayout>

            <SocialLinkLayout href='https://pinterest.com'>
              <Pinterest />
            </SocialLinkLayout>

            <SocialLinkLayout href='https://youtube.com'>
              <Youtube />
            </SocialLinkLayout>

            <SocialLinkLayout href='https://tiktok.com'>
              <Tiktok />
            </SocialLinkLayout>
          </div>

          <div className='flex gap-x-5 font-medium text-[10px] leading-3'>
            <span>&copy; {currentDate.getFullYear()}. Rhobuy from Avniverse, Inc.</span>
            <Link href='/' className='w-max' target='_blank'>
              Privacy Policy
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Cookie Policy
            </Link>
            <Link href='/' className='w-max' target='_blank'>
              Terms and Conditions
            </Link>
          </div>

          <button className='flex items-center justify-center gap-x-[10px] font-semibold leading-4 rounded-[30px] px-5 py-3 border-alto-light border dark:border-white'>
            <Globe /> Change country
          </button>
        </div>
      </div>

      <div className='bg-dove-gray relative text-wild-sand transition-all h-[109.5px] duration-500'>
        <div className='w-[998px] mx-auto py-[30px] items-center grid grid-cols-[minmax(0,1fr)_repeat(2,auto)] gap-x-[10px]'>
          <div className='text-[14px] leading-[17px] font-medium'>
            Company name - Shop inspired, Create magic!
            <span className='inline-block bg-[url(/assets/svgs/star-rounded-white.svg)] w-[14px] h-[14px] bg-center bg-no-repeat ml-[10px]' />
            <span className='inline-block bg-[url(/assets/svgs/star-rounded-white.svg)] w-[14px] h-[14px] bg-center bg-no-repeat mx-[5px]' />
            <span className='inline-block bg-[url(/assets/svgs/star-rounded-white.svg)] w-[14px] h-[14px] bg-center bg-no-repeat' />
            <p className='mt-[15px] font-semibold'>
              Shop, checkout, and track orders with ease - anytime, anywhere.
            </p>
          </div>

          <Link
            href='/'
            className='py-3 px-5 bg-azure-radiance rounded-[30px] whitespace-nowrap font-semibold text-[12px] leading-[15px]'
          >
            App Store
          </Link>

          <Link
            href='/'
            className='py-3 px-5 bg-azure-radiance rounded-[30px] whitespace-nowrap font-semibold text-[12px] leading-[15px]'
          >
            Google Play
          </Link>
        </div>

        <button
          onClick={hideAppPopup}
          className='duration-500 bg-[url(/assets/svgs/close.svg)] w-6 h-6 bg-center bg-no-repeat absolute right-[30px] top-1/2 -translate-y-1/2'
        />
      </div>
    </footer>
  );
};

export default HomeFooter;
