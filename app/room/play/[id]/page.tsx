type Props = {
  params: { id: string }

};

function Page({ params }:Props) {
  return <div>{params.id}</div>;
}

export default Page;
