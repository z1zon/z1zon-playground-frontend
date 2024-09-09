'use client';

import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface FormData {
  gameName: string;
  maxParticipants: number;
  gameType: 'speed'
}

function Create() {
  const router = useRouter();

  const form = useForm<FormData>({
    defaultValues: {
      gameName: '',
      maxParticipants: 5,
      // gameType: null,
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: FormData) => {
    console.log(data);
    const roomId = '123';
    router.push(`/room/ready/${roomId}`);
  };

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="게임 만들기" subTitle="게임을 만들기 위해 정보를 입력해 주세요." />
      <Form {...form}>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="gameName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>게임 이름</FormLabel>
                <FormControl>
                  <Input type="text" id="gameName" placeholder="게임 이름을 입력해 주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="maxParticipants"
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormLabel>최대 참가자 수</FormLabel>
                <FormControl>
                  <Slider
                    value={[value]}
                    defaultValue={[5]}
                    max={10}
                    step={1}
                    onValueChange={(values) => onChange(values[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="gameType"
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormLabel>게임 종류</FormLabel>
                <FormControl>
                  <Select onValueChange={onChange} value={value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="게임 종류를 선택해 주세요." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="speed_game">순발력 게임</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="default" size="lg" className="mt-auto w-full">
            게임 만들기
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Create;
