export default function Test({ params }: any) {
  console.log("TESTING params", params);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">This is a page for {params.slug}... right?</h1>
    </main>
  );
}
