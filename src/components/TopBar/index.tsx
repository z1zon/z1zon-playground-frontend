'use client';

import { usePathname, useRouter } from 'next/navigation';

import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

import styles from './index.module.scss';

function TopBar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickBackButton = () => {
    router.back();
  };

  return (
    <header className={styles.wrapper}>
      {pathname !== '/'
        && (
        <Button variant="link" size="icon" onClick={handleClickBackButton}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        )}
      <div className={styles.logo}>z1pl</div>
    </header>
  );
}

export default TopBar;
