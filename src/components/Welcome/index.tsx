'use client';

import { Button } from '@/components/ui/button';

type Props = {
  name?: string;
};

function Welcome({ name }: Props) {
  return (
    <div className="bg-blue-100 p-4 rounded-lg mb-4">
      <h2 className="text-2xl font-semibold">
        Hello,
        {name}
        !
      </h2>
      <p>Welcome to our Next.js application.</p>
      <Button>Click me</Button>
    </div>
  );
}

export default Welcome;
