import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';

import ClientProvider from '@/components/ClientProvider';
import Layout from '@/components/Layout';
import { DEFAULT_METADATA } from '@/constants/metadata';

import { pretendardFont, vt323 } from './_fonts';

import 'src/styles/global.scss';

export const metadata = DEFAULT_METADATA;

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={clsx(pretendardFont.className, vt323.variable, 'light')}>
      <body>
        <ClientProvider>
          <Layout>
            {children}
          </Layout>
        </ClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default RootLayout;
