import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const metadata = {
  title: "Post-Wedding Celebration",
  description: "Join us for a fun-filled day at the water park!",
};

export default async function PostWeddingPage() {
  return (
    <>
      <Card className="mb-8 border-2 border-[#8b1a1a]/20 bg-white/85">
        <CardHeader>
          <CardTitle className="font-madi text-center text-5xl text-[#8b1a1a]">
            Post-Wedding Celebration
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-600">
          <p className="leading-relaxed">
            Join us for a fun-filled day at the water park!
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Event Details */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Event Details
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-2xl font-semibold">When</h3>
                <p>Sunday, December 14th, 2025</p>
                <p>All-day event</p>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">Where</h3>
                <Link
                  href="https://www.bavarianinn.com/bavarian-blast-indoor-waterpark/"
                  className="text-[#8b1a1a] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bavarian Inn Lodge Water Park
                </Link>
                <p>One Covered Bridge Lane</p>
                <p>Frankenmuth, MI 48734</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Preview */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Water Park Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <div className="aspect-video w-full bg-gray-200">
              {/* Video will be added here */}
              <div className="flex h-full items-center justify-center">
                <p className="text-gray-500">Video coming soon!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Admission Information */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Admission Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <div className="space-y-4">
              <p>Guests have two options for enjoying the water park:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold">Stay at the Lodge:</span> Book
                  a room at the Bavarian Inn Lodge and receive water park passes
                  included with your stay
                </li>
                <li>
                  <span className="font-semibold">Day Pass:</span> Purchase a
                  day pass directly from the water park
                </li>
              </ul>
              <p className="text-sm italic">
                Note: Each guest is responsible for their own admission and
                accommodations
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Water Park Features
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <ul className="list-disc space-y-2 pl-5">
              <li>16 water slides</li>
              <li>Not so lazy river</li>
              <li>Wave pool</li>
              <li>Private cabanas</li>
              <li>Family fun pool</li>
              <li>Adult-only swim up bar</li>
              <li>On-site dining options</li>
              <li>Changing rooms and lockers</li>
            </ul>
          </CardContent>
        </Card>

        {/* Additional Information - Full Width */}
        <Card className="border-2 border-[#8b1a1a]/20 bg-white/85 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-madi text-center text-4xl text-[#8b1a1a]">
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <div className="space-y-4">
              <p>
                This casual gathering is a perfect way to relax and have fun
                after the wedding celebration. Feel free to come and go as you
                please throughout the day.
              </p>
              <p>
                For more information about the water park or to book a room,
                visit the{" "}
                <a
                  href="https://www.bavarianinn.com/play/waterpark"
                  className="text-[#8b1a1a] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bavarian Inn Lodge website
                </a>
                .
              </p>
              <p className="italic">
                Don&apos;t forget to bring your swimsuit and towel!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
