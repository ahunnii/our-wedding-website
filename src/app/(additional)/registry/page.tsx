import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const metadata = {
  title: "Wedding Registry",
  description:
    "Our wedding registry is a collection of items we've chosen to start our life together.",
};

export default async function RegistryPage() {
  return (
    <>
      <Card className="mb-8 border-2 border-[#8b1a1a]/20 bg-white/85">
        <CardHeader>
          <CardTitle className="text-center font-madi text-5xl text-[#8b1a1a]">
            Wedding Registry
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-600">
          <p className="leading-relaxed">
            Your presence at our wedding is the greatest gift we could ask for.
            However, if you wish to honor us with a gift, we have created a
            registry below.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* The Knot Registry */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-full">
          <CardHeader>
            <CardTitle className="text-center font-madi text-4xl text-[#8b1a1a]">
              The Knot Registry
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p className="mb-6">
              We&apos;ve created a registry on The Knot. If you would like to
              contribute, please click the button below. Thanks so much :D{" "}
            </p>
            <p>
              We are truly grateful for your love, support, and generosity. Your
              presence at our wedding and your thoughtful gifts mean the world
              to us as we begin this new chapter in our lives.
            </p>
            <a
              href="https://registry.theknot.com/jade-mckinney-andrew-hunn-december-2025-mi/70747725"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-[#8b1a1a] px-8 py-3 text-lg font-bold text-white shadow-lg ring-2 ring-[#8b1a1a]/30 transition-all duration-200 hover:scale-105 hover:bg-[#a32d2d] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#8b1a1a]/50"
            >
              View The Knot Registry
            </a>
          </CardContent>
        </Card>

        {/* Thank You Note - Span full width */}
        {/* <Card className="border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-center font-madi text-4xl text-[#8b1a1a]">
              Thank You
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p className="leading-relaxed">
              We are truly grateful for your love, support, and generosity. Your
              presence at our wedding and your thoughtful gifts mean the world
              to us as we begin this new chapter in our lives.
            </p>
          </CardContent>
        </Card> */}
      </div>
    </>
  );
}
