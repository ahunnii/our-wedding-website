import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const metadata = {
  title: "Our Amazing Vendors",
  description:
    "Meet the talented professionals who will make our special day perfect!",
};

export default async function VendorsPage() {
  return (
    <>
      <Card className="mb-8 border-2 border-[#8b1a1a]/20 bg-white/85">
        <CardHeader>
          <CardTitle className="text-center font-madi text-5xl text-[#8b1a1a]">
            Our Amazing Vendors
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-600">
          <p className="leading-relaxed">
            We&apos;re grateful to be working with these wonderful local
            businesses to make our special day perfect!
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
        {/* Main Vendors Row */}
        {/* Venue & Catering Card */}
        <Card className="col-span-full border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-3">
          <CardHeader>
            <CardTitle className="text-center font-madi text-3xl text-[#8b1a1a]">
              Venue & Catering
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <h4 className="text-2xl font-semibold text-[#2a3b2d]">
              Frankenmuth Brewery
            </h4>
            <p className="mt-2">
              Michigan&apos;s oldest brewery, providing both our beautiful venue
              and delicious catering.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://frankenmuthbrewery.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b1a1a] hover:underline"
              >
                Visit Website
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Photography Card */}
        <Card className="col-span-full border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-3">
          <CardHeader>
            <CardTitle className="text-center font-madi text-3xl text-[#8b1a1a]">
              Photography
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <h4 className="text-2xl font-semibold text-[#2a3b2d]">
              Madyson Elizabeth Photography
            </h4>
            <p className="mt-2">
              Capturing all the special moments of our celebration.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="https://www.facebook.com/madysonelizabethphotography/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b1a1a] hover:underline"
              >
                Visit Website
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Secondary Vendors */}
        <Card className="col-span-full border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-center font-madi text-3xl text-[#8b1a1a]">
              Sweet Treats
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <h4 className="text-2xl font-semibold text-[#2a3b2d]">
              SugarHigh Bakery
            </h4>
            <p className="mt-2">
              Creating our perfect wedding cake and desserts.
            </p>
            <a
              href="https://www.sugarhighllc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[#8b1a1a] hover:underline"
            >
              Visit Website
            </a>
          </CardContent>
        </Card>

        <Card className="col-span-full border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-center font-madi text-3xl text-[#8b1a1a]">
              Floral Design
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <h4 className="text-2xl font-semibold text-[#2a3b2d]">
              The Flower Basket
            </h4>
            <p className="mt-2">
              Creating beautiful floral arrangements from Columbiaville, MI.
            </p>
            <a
              href="https://www.flowerbasketmichigan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[#8b1a1a] hover:underline"
            >
              Visit Website
            </a>
          </CardContent>
        </Card>

        <Card className="col-span-full border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-center font-madi text-3xl text-[#8b1a1a]">
              Entertainment
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <h4 className="text-2xl font-semibold text-[#2a3b2d]">
              Cartoon Canopy
            </h4>
            <p className="mt-2">
              Providing fun caricature art for all our guests to remember the
              day.
            </p>
            <a
              href="https://www.cartooncanopy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[#8b1a1a] hover:underline"
            >
              Visit Website
            </a>
          </CardContent>
        </Card>

        {/* Thank You Note */}
        <Card className="col-span-full border-2 border-[#8b1a1a]/20 bg-white/85">
          <CardHeader>
            <CardTitle className="text-center font-madi text-4xl text-[#8b1a1a]">
              Supporting Local Businesses
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p className="leading-relaxed">
              We&apos;re proud to be working with these amazing local Michigan
              businesses to create our perfect wedding day. Each vendor has been
              chosen with care to help bring our vision to life.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
