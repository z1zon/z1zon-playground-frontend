import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function Home() {
  const userNickname = '닉네임';

  return (
    <div>
      {userNickname ? (
        <div>
          <PageHeader title={`${userNickname}님,\nz1pl에 오신 것을 환영합니다!`} />
          <div className="flex flex-col gap-2">
            <Button variant="default" size="lg" asChild className="mt-auto w-full">
              <Link href="/create">
                게임 만들기
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild className="mt-auto w-full">
              <Link href="/join">
                게임 참여하기
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <PageHeader title="z1pl에 오신 것을 환영합니다!" subTitle="닉네임을 만들고 게임에 참여해보세요." />
          <div>
            <Label>닉네임</Label>
            <Input type="text" id="nickname" placeholder="닉네임을 입력해 주세요." />
          </div>
          <Button variant="default" size="lg" asChild className="mt-auto w-full">
            <Link href="/create">
              시작하기!
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;
