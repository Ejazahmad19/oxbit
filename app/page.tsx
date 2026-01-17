import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center gap-6">

      <Image
        src="/oxbit.png"
        alt="Oxbit Logo"
        width={120}
        height={120}
        className="rounded-xl"
        priority
      />

      <h1 className="text-4xl font-bold">
        Oxbit is coming soon!
      </h1>

    </main>
  );
}
