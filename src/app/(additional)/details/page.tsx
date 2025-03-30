import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const metadata = {
  title: "Wedding Details",
  description: "Everything you need to know about our special day.",
};

export default async function DetailsPage() {
  return (
    <>
      <Card className="mb-8 border-2 border-[#8b1a1a]/20 bg-white/95">
        <CardHeader>
          <CardTitle className="font-madi text-center text-5xl text-[#8b1a1a]">
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
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/95 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Venue & Parking
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Venue</h3>
                <p className="mb-2">
                  Our wedding will be held at the{" "}
                  <Link
                    href="https://frankenmuthbrewery.com/"
                    className="text-[#8b1a1a] hover:underline"
                  >
                    Frankenmuth Brewery
                  </Link>
                  .
                </p>
                <p className="mb-2">
                  Address:{" "}
                  <span className="font-semibold">
                    425 S Main St, Frankenmuth, MI 48734
                  </span>
                </p>
                <p>
                  The ceremony and reception will both take place at this
                  location.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Parking</h3>
                <p className="mb-2">
                  Complimentary parking is available at the venue.
                </p>
                <p className="mb-2">
                  The main parking lot is located directly in front of the venue
                  entrance, however, the parking lot is small so it is first
                  come first serve.
                </p>
                <p>
                  The venue recommends parking behind the Fairfield Inn & Suites
                  or at the Frankenmuth Public Library.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/95">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
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
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/95 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
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
                    Wedding cake: Gingerbread flavored and totally awesome!
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Entertainment */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/95">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Entertainment
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <ul className="list-disc space-y-1 pl-5">
              <li>Board games station</li>
              <li>Live music during cocktail hour</li>
              <li>Caricature artist</li>
              <li>Open bar</li>
              <li>
                Dance floor with &quot;DJ&quot; Spotify (i.e. dance if you
                wanna, but don&apos;t feel obligated)
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Post-Wedding - Span full width */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/95 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
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
