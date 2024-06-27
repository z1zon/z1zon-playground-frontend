import Welcome from "@/components/Welcome";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-6">Welcome to My Next.js App</h1>
    <Welcome name="Hyojin" />
  </div>
  );
}

export default Home;