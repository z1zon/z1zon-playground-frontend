import { PropsWithChildren } from 'react';

import styles from './index.module.scss';

type Props = {
  title?: string;
  subTitle?: string;
};

function PageHeader({ title, subTitle }:PropsWithChildren<Props>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
    </div>
  );
}

export default PageHeader;
