import Health from './icons/Health';
import Sports from './icons/Sports';
import Gadgets from './icons/Gadgets';
import Clothing from './icons/Clothing';
import TeddyBear from './icons/TeddyBear';

import { CategoryIconName } from '@/public/types';
import { CategoryIcons } from '@/public/interfaces';

interface Props {
  bgName: CategoryIconName;
}

const icons: CategoryIcons = {
  health: <Health />,
  sports: <Sports />,
  kids: <TeddyBear />,
  gadgets: <Gadgets />,
  clothing: <Clothing />,
};

const OptionBubble: React.FC<Props> = ({ bgName }) => {
  return (
    <button className='shrink-0 font-normal text-[12px] leading-[15px] text-shark-shade-1 capitalize dark:text-white'>
      {icons[bgName]}
      {bgName}
    </button>
  );
};

export default OptionBubble;
