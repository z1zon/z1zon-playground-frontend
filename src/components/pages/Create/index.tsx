import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

function Create() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="게임 만들기" subTitle="게임을 만들기 위해 정보를 입력해 주세요." />
      <div>
        <Label>게임 이름</Label>
        <Input type="text" id="game_name" placeholder="게임 이름을 입력해 주세요." />
      </div>
      <div className="flex flex-col gap-3">
        <Label>최대 참가자 수</Label>
        <Slider defaultValue={[5]} max={10} step={1} />
      </div>
      <div>
        <Label>게임 종류</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="게임 종류를 선택해 주세요." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="speed_game">순발력 게임</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button variant="default" size="lg" asChild className="mt-auto w-full">
        <Link href="/create">
          게임 만들기
        </Link>
      </Button>
    </div>
  );
}

export default Create;
