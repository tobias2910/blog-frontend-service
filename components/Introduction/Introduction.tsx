import React, { FC, useRef } from 'react';
import Avatar from '../ui/Avatar';
import useOnScreen from '../../lib/hooks/useOnScreen';

const Introduction: FC = () => {
  const textRef = useRef(null);
  const isOnScreen = useOnScreen(textRef, true);

  return (
    <div className="my-2 w-full">
      <div className="w-full flex justify-center">
        <Avatar imgSrc="/avatar.jpg" />
      </div>
      <div className="w-full justify-center text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
        Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
        Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
        Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla.
        Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus consequat consequat.
        Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique.
        Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis. Pellentesque cursus sagittis felis.
      </div>
      <div ref={textRef} >
        <div className={`${isOnScreen ? 'block animate-fadeIn-left' : 'hidden'} text-center text-teal-400 delay-500`}>
          Hallo Welt
        </div>
      </div>
    </div>
  );
};

export default Introduction;
