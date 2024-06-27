import { Noto_Serif_KR } from 'next/font/google';
import localFont from 'next/font/local';

const notoSerifKr = Noto_Serif_KR({ subsets: ['latin'], weight: '900' });

const pretendardFont = localFont({
  src: [
    {
      path: './Pretendard-Bold.subset.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './Pretendard-SemiBold.subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Pretendard-Regular.subset.woff2',
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
  fallback: [
    'Pretendard Variable',
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

// eslint-disable-next-line simple-import-sort/exports
export { pretendardFont, notoSerifKr };
