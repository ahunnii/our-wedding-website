import { Navbar } from "../_components/navbar";
import { SnowFall } from "../_components/snow";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center bg-[#2a3b2d] bg-[url('/new-background.webp')] bg-cover bg-center">
      <SnowFall />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-96 bg-gradient-to-b from-white to-transparent"></div>

      <Navbar />

      <div className="container z-10 mx-auto max-w-7xl px-4 py-16">
        {children}
      </div>
    </main>
  );
}
