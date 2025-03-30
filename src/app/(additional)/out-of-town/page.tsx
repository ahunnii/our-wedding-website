import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const metadata = {
  title: "Out of Town",
  description: "Everything you need to know about our special day.",
};

export default async function OutOfTown() {
  return (
    <>
      <Card className="mb-8 border-2 border-[#8b1a1a]/20 bg-white/85">
        <CardHeader>
          <CardTitle className="font-madi text-center text-5xl text-[#8b1a1a]">
            For Our Out-of-Town Guests
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-600">
          <p className="leading-relaxed">
            We&apos;re delighted that you&apos;re traveling to celebrate with
            us! Here&apos;s everything you need to know to make your stay
            comfortable and enjoyable.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Accommodations - Span 2 columns */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Accommodations
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-[#2a3b2d]">
                  Closest to Venue
                </h3>
                <p className="mb-4">
                  <a
                    href="https://www.marriott.com/en-us/hotels/mbsfr-fairfield-inn-and-suites-frankenmuth/overview/"
                    className="text-[#8b1a1a] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fairfield Inn & Suites
                  </a>
                  <span className="block italic">
                    Located directly across from the venue
                  </span>
                </p>
                <p className="mb-4 text-sm">
                  <strong>Note:</strong> Due to the size of our wedding, we
                  unfortunately will not be reserving a block of rooms for any
                  hotels.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-[#2a3b2d]">
                  Additional Options
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.druryhotels.com/locations/frankenmuth-mi"
                      className="text-[#8b1a1a] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Drury Inn & Suites
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bavarianinn.com/"
                      className="text-[#8b1a1a] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bavarian Inn Lodge
                    </a>
                    <span className="block text-sm italic">
                      (Includes waterpark passes for post-wedding celebration)
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://www.zehnders.com/zehnders-splash-village/#waterpark"
                      className="text-[#8b1a1a] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zehnder&apos;s Splash Village
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transportation */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Getting Here
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-[#2a3b2d]">
                  Airports
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://www.bishopairport.org/"
                      className="text-[#8b1a1a] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bishop International (FNT)
                    </a>
                    <p className="text-sm">30 minutes from venue</p>
                  </li>
                  <li>
                    <a
                      href="https://www.metroairport.com/"
                      className="text-[#8b1a1a] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Detroit Metro (DTW)
                    </a>
                    <p className="text-sm">
                      1.5 hours from venue, typically cheaper flights
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-semibold text-[#2a3b2d]">
                  Ground Transportation
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Rideshare:</span> Uber and
                    Lyft are available in the area
                  </li>
                  <li>
                    <span className="font-medium">Rental Cars:</span> Available
                    at both airports
                  </li>

                  <li>
                    <span className="font-medium">Other:</span> If you need
                    something arranged, please let us know!
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dining Options - Span 2 columns */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Our Favorite Local Dining
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <div>
              <div className="grid gap-2 md:grid-cols-2 md:gap-6">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.zehnders.com/"
                        className="text-[#8b1a1a] hover:underline"
                      >
                        Zehnder&apos;s Restaurant
                      </a>
                      <p className="text-sm">Family-style chicken dinners</p>
                    </li>
                    <li>
                      <a
                        href="https://www.bavarianinn.com/dine/bavarian-inn-restaurant/"
                        className="text-[#8b1a1a] hover:underline"
                      >
                        Bavarian Inn Restaurant
                      </a>
                      <p className="text-sm">Traditional German cuisine</p>
                    </li>
                    <li>
                      <a
                        href="https://frankenmuthwangsbistro.com/"
                        className="text-[#8b1a1a] hover:underline"
                      >
                        Wang&apos;s Bistro
                      </a>
                      <p className="text-sm">Chinese cuisine</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.prostfrankenmuth.com/"
                        className="text-[#8b1a1a] hover:underline"
                      >
                        Prost Wine Bar
                      </a>
                      <p className="text-sm">Wine & charcuterie</p>
                    </li>
                    <li>
                      <a
                        href="https://www.themipot.com/"
                        className="text-[#8b1a1a] hover:underline"
                      >
                        MI Pot
                      </a>
                      <p className="text-sm">Korean BBQ and Hot Pot</p>
                    </li>
                    <li>
                      <a
                        href="https://www.poblanoscantina.com/"
                        className="text-[#8b1a1a] hover:underline"
                      >
                        Poblano&apos;s Cantina
                      </a>
                      <p className="text-sm">Mexican cuisine</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Questions - Span full width */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Need More Information?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p className="mb-4">
              For a complete list of accommodations, visit{" "}
              <a
                href="https://www.frankenmuth.org/lodging/hotels-motels/"
                className="text-[#8b1a1a] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frankenmuth Lodging Options
              </a>
            </p>
            <p>
              If you have any questions about your stay, please don&apos;t
              hesitate to contact us!
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
