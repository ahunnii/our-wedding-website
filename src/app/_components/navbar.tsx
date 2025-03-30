"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 w-full border-b-2 border-t-2 border-[#8b1a1a]/30 bg-[#2a3b2d]/90 py-4 shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex flex-wrap justify-center gap-2 md:gap-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/details">Details</NavLink>
        <NavLink href="/out-of-town">Out of Town</NavLink>
        <NavLink href="/post-wedding">Post Wedding</NavLink>
        <NavLink href="/vendors">Vendors</NavLink>
        <NavLink href="/registry">Registry</NavLink>
      </div>
    </nav>
  );
};

// Client component for active link detection
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`font-kalam relative rounded-lg px-4 py-2 text-lg transition-all duration-300 hover:scale-105 ${
        isActive
          ? "bg-[#8b1a1a]/20 font-semibold text-white shadow-md before:absolute before:-left-1 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-[#8b1a1a] before:content-[''] after:absolute after:-right-1 after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rounded-full after:bg-[#8b1a1a] after:content-['']"
          : "text-white/80 hover:bg-[#8b1a1a]/10 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
