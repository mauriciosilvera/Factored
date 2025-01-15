import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center text-center">
        <div className="space-y-4">
          <span className="text-4xl font-semibold mb-2">Welcome!</span>
          <p className="text-2xl font-semibold mb-2">
            This is my <span className="text-yellow-400">Star Wars™</span> page
            to apply for front-end position.
          </p>
          <p className="text-xl text-white/80">Hopefully you like it!</p>
          <p className="text-lg text-white/70 mb-8">
            You can navigate through navbar or clicking any of the buttons
            below!
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/characters"
              className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
            >
              Characters
            </Link>
            <Link
              href="/films"
              className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
            >
              Films
            </Link>
            <Link
              href="/about"
              className="px-6 py-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
        <Image
          src="/factored-logo.png"
          alt="Factored logo"
          width={180}
          height={38}
          priority
          className="mt-12"
        />
      </main>
    </div>
  );
}
