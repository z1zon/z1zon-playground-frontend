import Button from '@/components/common/Button';
import PageHeader from '@/components/PageHeader';

import styles from './index.module.scss';

function Home() {
  return (
    <div className={styles.wrapper}>
      <PageHeader title="z1pl에 오신 것을 환영합니다!" subTitle="닉네임을 만들고 게임에 참여해보세요" />
      <div className={styles.content}>
        <Button>시작하기!</Button>
      </div>
    </div>
  );
}

export default Home;
