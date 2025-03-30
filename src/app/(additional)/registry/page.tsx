import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const metadata = {
  title: "Wedding Registry",
  description:
    "Our wedding registry is a collection of items we've chosen to start our life together.",
};

export default async function RegistryPage() {
  return (
    <>
      <Card className="mb-8 border-2 border-[#8b1a1a]/20 bg-white/95">
        <CardHeader>
          <CardTitle className="font-madi text-center text-5xl text-[#8b1a1a]">
            Wedding Registry
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-600">
          <p className="leading-relaxed">
            Your presence at our wedding is the greatest gift we could ask for.
            However, if you wish to honor us with a gift, we have created
            registries at the following locations:
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Amazon Registry */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/95">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Amazon
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p className="mb-6">
              Find a variety of items from our wishlist, including kitchen
              essentials, home decor, and everyday items.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#8b1a1a]/10 px-6 py-2 text-[#8b1a1a] transition-all hover:bg-[#8b1a1a]/20"
            >
              View Amazon Registry
            </a>
          </CardContent>
        </Card>
        {/* Zola Registry */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/95 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Zola Registry
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p className="mb-6">
              We&apos;ve created a registry on Zola that includes both home
              essentials and a honeymoon fund. Your contribution to either will
              Your contribution to either will help us build our home together
              or create lasting memories during our honeymoon adventures.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#8b1a1a]/10 px-6 py-2 text-[#8b1a1a] transition-all hover:bg-[#8b1a1a]/20"
            >
              View Zola Registry
            </a>
          </CardContent>
        </Card>

        {/* Thank You Note - Span full width */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/95 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
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
        </Card>
      </div>
    </>
  );
}
