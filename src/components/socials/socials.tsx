'use client';
import { SocialsI } from '@/assets';
import Image from 'next/image';
import { useState } from 'react';

export interface SocialMediaProps {
  social: SocialsI;
}

export const Socials: React.FC<SocialMediaProps> = ({ social }) => {
  //* Social hover state
  const [isSocialHovered, setIsSocialHovered] = useState<boolean>(false);

  //* Social navigation function
  const openSocialOnClick = () => {
    social.href && window.open(social.href, '_blank');
  };

  return (
    <button
      style={{
        background: isSocialHovered ? social.h_bg : social.bg,
        borderColor: isSocialHovered ? social.h_border : social.border,
      }}
      onMouseEnter={() => setIsSocialHovered(true)}
      onMouseLeave={() => setIsSocialHovered(false)}
      className={`w-[52px] h-8 rounded flex justify-center items-center border-solid border-2  hover:bg-red-500`}
      onClick={openSocialOnClick}
    >
      <Image height={social.size} width={social.size} src={social.image} alt="Social" />
    </button>
  );
};
