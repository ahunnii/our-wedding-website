import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const metadata = {
  title: "Wedding Details",
  description: "Everything you need to know about our special day.",
};

export default async function DetailsPage() {
  return (
    <>
      <Card className="mb-8 border-2 border-[#8b1a1a]/20 bg-white/85">
        <CardHeader>
          <CardTitle className="text-center font-madi text-5xl text-[#8b1a1a]">
            Wedding Details
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-600">
          <p className="leading-relaxed">
            Everything you need to know about our special day.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Venue & Parking - Span 2 columns */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-center font-madi text-4xl text-[#8b1a1a]">
              Venue & Parking
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-6 text-gray-700">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Venue Section */}
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-[#8b1a1a]/10 p-2">
                    <svg
                      className="h-6 w-6 text-[#8b1a1a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      />
                      <circle cx="12" cy="9" r="2.5" fill="#8b1a1a" />
                    </svg>
                  </span>
                  <h3 className="font-madi text-2xl font-semibold text-[#8b1a1a]">
                    Venue
                  </h3>
                </div>
                <p className="mb-2 text-lg">
                  Our wedding will be held at the{" "}
                  <Link
                    href="https://frankenmuthbrewery.com/"
                    className="font-semibold text-[#8b1a1a] underline underline-offset-2 transition-colors hover:text-[#a83232]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frankenmuth Brewery
                  </Link>
                  .
                </p>
                <p className="mb-2 text-base">
                  <span className="font-semibold">Address:</span> 425 S Main St,
                  Frankenmuth, MI 48734
                </p>
                <p className="text-base">
                  The ceremony <span className="mx-1 text-[#8b1a1a]">•</span>{" "}
                  and reception will both take place at this location.
                </p>
              </div>
              {/* Parking Section */}
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-[#8b1a1a]/10 p-2">
                    <svg
                      className="h-6 w-6 text-[#8b1a1a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="7" width="18" height="10" rx="3" />
                      <circle cx="7.5" cy="16.5" r="1.5" fill="#8b1a1a" />
                      <circle cx="16.5" cy="16.5" r="1.5" fill="#8b1a1a" />
                    </svg>
                  </span>
                  <h3 className="font-madi text-2xl font-semibold text-[#8b1a1a]">
                    Parking
                  </h3>
                </div>
                <ul className="list-inside list-disc space-y-1 text-base">
                  <li>Complimentary parking is available at the venue.</li>
                  <li>
                    <span className="font-semibold">Main lot:</span> Directly in
                    front of the entrance (limited, first come first serve).
                  </li>
                  <li>
                    <span className="font-semibold">Overflow:</span> Behind the
                    Fairfield Inn & Suites or at the Frankenmuth Public Library.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/parking.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="relative h-full min-h-96 w-full min-w-96 cursor-pointer rounded-lg border-2 border-[#8b1a1a]/20 bg-white drop-shadow-lg"
                  title="Click to view larger"
                >
                  <Image
                    src="/parking.png"
                    alt="Frankenmuth Brewery Parking Map"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <span className="absolute bottom-2 right-2 rounded bg-white/80 px-2 py-1 text-xs text-[#8b1a1a] shadow">
                    Click to enlarge
                  </span>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85">
          <CardHeader>
            <CardTitle className="text-center font-madi text-4xl text-[#8b1a1a]">
              Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">3:30 PM:</span> Doors Open
              </li>
              <li>
                <span className="font-semibold">4:00 PM:</span> Ceremony Begins
              </li>
              <li>
                <span className="font-semibold">4:30 PM:</span> Cocktail Hour
              </li>
              <li>
                <span className="font-semibold">5:30 PM:</span> Speeches (Bar
                closed for one hour)
              </li>
              <li>
                <span className="font-semibold">6:00 PM:</span> Dinner
              </li>
              <li>
                <span className="font-semibold">6:30 PM:</span> Bar Re-Opens
              </li>
              <li>
                <span className="font-semibold">10:00 PM:</span> Last Call
                (limit of one drink per person)
              </li>{" "}
              <li>
                <span className="font-semibold">10:30 PM:</span> Bar Closes
              </li>
              <li>
                <span className="font-semibold">11:00 PM:</span> Farewell
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Menu - Span 2 columns */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-center font-madi text-4xl text-[#8b1a1a]">
              Menu
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Appetizers</h3>
                <ul className="list-disc pl-5">
                  <li>
                    Pretzel and Brats: Bavarian-style pretzels, Munich Style
                    Dunkel braised brats, beer cheese, spicy mustard &
                    sauerkraut.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  Main Courses (Choose One)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Marry-Me Chicken Plated Dinner: Pan-seared chicken breasts,
                    sundried tomatoes, and basil in a rich parmesan cream sauce.
                    Served with herb roasted potatoes and chef&apos;s vegetable.
                  </li>
                  <li>
                    Filet Mignon Plated Dinner: Tender filet (6 oz) with red
                    wine black garlic demi-glace, charred mushrooms and onions.
                    Served with potato dauphinoise and grilled asparagus.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Dessert</h3>
                <ul className="list-disc pl-5">
                  <li>
                    Wedding cake: Maple flavored and while not as cool as
                    gingerbread, it&apos;s still pretty awesome!
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Entertainment */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85">
          <CardHeader>
            <CardTitle className="text-center font-madi text-4xl text-[#8b1a1a]">
              Entertainment
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <ul className="list-disc space-y-1 pl-5">
              <li>Board games</li>
              <li>Caricature artist</li>
              <li>Open bar</li>
              <li>
                Small dance floor with &quot;DJ&quot; Spotify (i.e. dance if you
                wanna, but don&apos;t feel obligated)
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Post-Wedding - Span full width */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-center font-madi text-4xl text-[#8b1a1a]">
              Post-Wedding Celebration
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p className="mb-4">
              The celebration continues! The day after the wedding, we&apos;ll
              be heading to Bavarian Blast Water Park in Frankenmuth.
            </p>
            <p className="mb-4">
              Everyone is welcome to join us for this casual post-wedding
              gathering. No formal RSVP required - just let us know if you plan
              to come!
            </p>

            <Link
              href="/post-wedding"
              className="text-[#8b1a1a] hover:underline"
            >
              Learn more about the post-wedding celebration here!
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
