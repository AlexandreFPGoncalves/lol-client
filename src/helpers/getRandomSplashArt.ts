import { splashArts, images } from '@/assets';

export const getRandomSplashArt = (mode: 'xayah' | 'classic' | 'StarGuardian') => {
  const generatedIndex = Math.floor(Math.random() * splashArts.length);

  switch (mode) {
    case 'xayah':
      return splashArts[generatedIndex];
    case 'StarGuardian':
      return splashArts[3];
    case 'classic':
      return images.classic;
  }
};
