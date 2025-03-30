import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { HydrateClient } from "~/trpc/server";
import { Navbar } from "./_components/navbar";
import { SnowFall } from "./_components/snow";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="relative flex min-h-screen w-full flex-col items-center bg-[#2a3b2d] bg-[url('/new-background.webp')] bg-cover bg-center">
        <SnowFall />
        <div className="z-[2] flex h-[60vh] w-full items-center justify-center bg-[url('/hero-image.jpg')] bg-cover bg-center">
          <Card className="z-10 border-0 bg-transparent text-center shadow-none">
            <CardContent className="p-16">
              <p className="mb-2 text-4xl font-normal text-[#8b1a1a]">
                &apos;Tis the season to get married
              </p>
              <h1 className="mb-4 text-8xl font-semibold text-[#8b1a1a]">
                Andrew & Jade
              </h1>
              <p className="text-3xl font-normal text-[#2a3b2d]">
                invite you to their wedding
              </p>
              <p className="mt-2 text-3xl font-normal text-[#2a3b2d]">
                December 13, 2025
              </p>
            </CardContent>
          </Card>
        </div>{" "}
        {/* Gradient overlay - white at top fading to transparent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-96 border-transparent bg-gradient-to-b from-white to-transparent"></div>
        {/* <nav className="sticky top-0 z-[3] w-full border-b-2 border-t-2 border-[#8b1a1a]/30 bg-[#2a3b2d]/90 py-4 shadow-md backdrop-blur-sm">
          <div className="container mx-auto flex justify-center space-x-8">
            <Link
              href="/"
              className="font-kalam relative px-4 py-2 text-lg text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#8b1a1a] after:transition-transform after:content-[''] hover:scale-105 hover:text-[#f0e6e6] hover:after:scale-x-100"
            >
              Home
            </Link>
            <Link
              href="/details"
              className="font-kalam relative px-4 py-2 text-lg text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#8b1a1a] after:transition-transform after:content-[''] hover:scale-105 hover:text-[#f0e6e6] hover:after:scale-x-100"
            >
              Details
            </Link>
            <Link
              href="/out-of-town"
              className="font-kalam relative px-4 py-2 text-lg text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#8b1a1a] after:transition-transform after:content-[''] hover:scale-105 hover:text-[#f0e6e6] hover:after:scale-x-100"
            >
              Out of Town
            </Link>
            <Link
              href="/post-wedding"
              className="font-kalam relative px-4 py-2 text-lg text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#8b1a1a] after:transition-transform after:content-[''] hover:scale-105 hover:text-[#f0e6e6] hover:after:scale-x-100"
            >
              Post Wedding
            </Link>
            <Link
              href="/vendors"
              className="font-kalam relative px-4 py-2 text-lg text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#8b1a1a] after:transition-transform after:content-[''] hover:scale-105 hover:text-[#f0e6e6] hover:after:scale-x-100"
            >
              Vendors
            </Link>
            <Link
              href="/registry"
              className="font-kalam relative px-4 py-2 text-lg text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-[#8b1a1a] after:transition-transform after:content-[''] hover:scale-105 hover:text-[#f0e6e6] hover:after:scale-x-100"
            >
              Registry
            </Link>
          </div>
        </nav> */}
        <Navbar />
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <section id="details" className="mb-16">
            <Card className="border-2 border-[#8b1a1a]/20 bg-white/95">
              <CardHeader>
                <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
                  Ceremony Details
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-4 text-xl">
                  <span className="font-semibold">When:</span> December 13th,
                  2025 at 4:00 PM
                </p>
                <p className="text-xl">
                  <span className="font-semibold">Where:</span> Frankenmuth
                  Brewery
                </p>
                <p className="text-lg">425 S Main St</p>
                <p className="text-lg">Frankenmuth, MI 48734</p>
              </CardContent>
            </Card>
          </section>

          <section id="story" className="mb-16">
            <Card className="border-2 border-[#8b1a1a]/20 bg-white/95">
              <CardHeader>
                <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="leading-relaxed">
                  Well, Jade and I met when she got banned off Tinder. We then
                  met on Bumble after I told her a solid dad joke. (It was a
                  fight to the death between me and a guy who really REALLY
                  liked cats...). I mustered up the courage to ask her out on a
                  date, and we met here at the Koffee Hause. We really hit it
                  off. It felt like we knew each other for years. Then she had
                  to work. I wanted to walk her to her car, but then I realized
                  why she didn&apos;t want that: her cow covered car named
                  &quot;Peggy Sue&quot;. That should have scared me off, but I
                  asked her on an improntu date to roam the streets of
                  Frankenmuth during a light snowfall. It was then I knew I
                  found someone special. Fast forward to two years later. I
                  wanted to propose to her at her favorite place in the world
                  (Taquenninum Falls). But the heavy snowfall changed my plan
                  entirely. I then knew it was a sign to propose to her here, in
                  Frankenmuth, at the old wooden bridge. She was so excited,
                  totally didn&apos;t see it coming, and she accepted right
                  after she finished hatching her eggs in Pokemon Go. That
                  solidified my belief that she was the one for me and I want to
                  spend the rest of my life with her and her dorky self.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="rsvp">
            <Card className="border-2 border-[#8b1a1a]/20 bg-white/95">
              <CardHeader>
                <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
                  RSVP Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-4 leading-relaxed">
                  Formal invitations will be sent out mid-year 2025.
                </p>
                <p className="font-semibold text-[#8b1a1a]">
                  Important: All RSVPs must be received by November 1st, 2025
                </p>
                <p className="mt-4 text-sm italic">
                  We kindly request that all guests planning to attend inform us
                  by this date to help us finalize arrangements for our special
                  day.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </HydrateClient>
  );
}
