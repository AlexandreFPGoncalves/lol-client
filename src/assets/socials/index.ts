import facebook from './facebook.png';
import google from './google.png';
import xbox from './xbox.png';
import playstation from './playstation.png';
import github from './gh.png';
import { StaticImageData } from 'next/image';

export interface SocialsI {
  social: string;
  image: StaticImageData;
  bg: string;
  border: string;
  h_bg: string;
  h_border: string;
  size: number;
  href?: string;
}

export const socials: SocialsI[] = [
  {
    social: 'facebook',
    image: facebook,
    bg: '#1877f2',
    border: '#1877f2',
    h_bg: '#1566cf',
    h_border: '#1566cf',
    size: 18,
  },
  {
    social: 'google',
    image: google,
    bg: '#ffffff',
    border: '#f2f2f2',
    h_bg: '#dadada',
    h_border: '#cfcfcf',
    size: 28,
  },
  {
    social: 'github',
    image: github,
    bg: '#000000',
    border: '#000000',
    h_bg: '#262626',
    h_border: '#313131',
    size: 20,
    href: 'https://github.com/AlexandreFPGoncalves',
  },
  {
    social: 'xbox',
    image: xbox,
    bg: '#107c10',
    border: '#107c10',
    h_bg: '#0f6b0f',
    h_border: '#0f6b0f',
    size: 18,
  },
  {
    social: 'playstation',
    image: playstation,
    bg: '#00439c',
    border: '#00439c',
    h_bg: '#013a86',
    h_border: '#013a86',
    size: 26,
  },
];
