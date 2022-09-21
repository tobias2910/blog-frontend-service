import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import BarItem from '../../ui/BarItem';

type AlignmentOptions = 'left' | 'middle';

interface NavigationItemsProps {
  items: string [];
  alignment: AlignmentOptions;
}

const NavigationItems: FC<NavigationItemsProps> = (props) => {
  const { items, alignment } = props;

  const router = useRouter();

  const isSelected = (barItemName: string) => (
    !!(router.asPath.includes(barItemName.toLowerCase())
      || (router.asPath === '/' && barItemName === 'Home'))
  );

  const handleItemOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const item = (event.target as HTMLButtonElement).id.toLowerCase();
    if (item === "home") {
      router.push('./');
    } else {
      router.push(`./${item.toLowerCase()}`);
    }
  };

  return (
    <ul className={`w-full ${alignment === 'left' ? 'my-2' : 'hidden my-3 justify-between md:flex'}`}>
      {items.map((item, idx) => (
        <li key={item} className={`${alignment === 'left' ? 'my-2' : null}`}>
          <motion.div
            initial={alignment === 'left' ? { x: -200 } : { y: -100 }}
            animate={alignment === 'left' ? { x: 0 } : { y: 0 }}
            transition={{ delay: 0.1 * (idx), duration: 0.3 }}
          >
            <BarItem
              text={item}
              handleOnClick={handleItemOnClick}
              selected={isSelected(item)}
              underlineType={`${alignment === 'left' ? 'left' : 'middle'}`}
              textSize={`${alignment === 'left' ? 'small' : 'big'}`}
            />
          </motion.div>
        </li>
      ))}
    </ul>
  );
};

export default NavigationItems;
