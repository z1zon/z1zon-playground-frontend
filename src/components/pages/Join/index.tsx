import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function Join() {
  const id = 'test123';

  return (
    <div className="flex flex-col gap-5">
      <PageHeader title="게임 참여하기" subTitle="게임에 참여하기 위해 방 ID를 입력해주세요." />
      <div>
        <Label>방 ID</Label>
        <Input type="submit" id="room-id" placeholder="방 ID를 입력해 주세요." />
      </div>
      <Button variant="default" size="lg" asChild className="mt-auto w-full">
        <Link href={`/room/ready/${id}`}>
          게임 참여하기
        </Link>
      </Button>
    </div>
  );
}

export default Join;
