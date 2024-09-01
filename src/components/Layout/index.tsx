import { PropsWithChildren } from 'react';

import TopBar from '@/components/TopBar';

import styles from './index.module.scss';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.contentBox}>
        <TopBar />
        <div className={styles.innerContent}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
