'use client';

import React from 'react';

type Props = {
  name?: string;
}

function Welcome({ name }: Props) {
  return (
    <div className="bg-blue-100 p-4 rounded-lg mb-4">
      <h2 className="text-2xl font-semibold">Hello, {name}!</h2>
      <p>Welcome to our Next.js application.</p>
    </div>
  );
};

export default Welcome;