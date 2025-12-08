import {
  Calendar,
  Camera,
  Flower2,
  Gem,
  Gift,
  Heart,
  Snowflake,
  Sparkles,
  Star,
  TreePine,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Timeline, TimelineItem } from "~/components/ui/timeline";
import { DownloadTimelineButton } from "./_components/download-timeline-button";

export const metadata = {
  title: "Wedding Day Timeline",
  description: "A detailed timeline of events for the wedding day.",
};

type TimelineEvent = {
  time: string;
  title: string;
  description?: string;
  audience: "both" | "bridesmaids" | "groomsmen";
};

const timelineEvents: TimelineEvent[] = [
  {
    time: "9:00 AM",
    title: "Doors Open for Set Up",
    description:
      "Set Up Crew: Sable, Donnie, Sage, Josh, Krista, Andrew, Will, and Dylan",
    audience: "both",
  },
  {
    time: "10:00 AM",
    title: "Bride's House Opens",
    description:
      "Hair, makeup, and breakfast at Jade's house. Guy and Jade need to be there by 10 AM for hair appointments.",
    audience: "bridesmaids",
  },
  {
    time: "11:00 AM",
    title: "Groomsmen Breakfast",
    description:
      "Groom collects groomsmen for breakfast: Andrew, Dylan, Will, and Felix",
    audience: "groomsmen",
  },
  {
    time: "1:15 PM",
    title: "Guys Head to Hotel",
    description: "Groomsmen head to hotel to get ready",
    audience: "groomsmen",
  },
  {
    time: "2:00 PM",
    title: "Groomsmen Photos",
    description: "Madyson does guys photos (15 mins). Madyson works 2p-8p",
    audience: "groomsmen",
  },
  {
    time: "2:30 PM",
    title: "Will Picks Up Family",
    description: "Will heads over to Birch Run to pick up family",
    audience: "groomsmen",
  },
  {
    time: "2:30 PM",
    title: "Girls Photos & Hair & Makeup Complete",
    description:
      "Finished with Hair and Makeup. Madyson does Girl's photos (details photo 15 mins and group photos 15 mins)",
    audience: "bridesmaids",
  },
  {
    time: "2:30 PM",
    title: "Cake Set Up",
    description: "Cake is set up and ready to go",
    audience: "both",
  },
  {
    time: "3:15 PM",
    title: "Bride Arrives at Venue",
    description: "Bride gets to venue and gets in dress",
    audience: "bridesmaids",
  },
  {
    time: "3:30 PM",
    title: "Doors Open for Guests",
    description:
      "Guests arrive. Grooms party arrives. Andrew meets Will at front doors to get Grandma in and settled.",
    audience: "both",
  },
  {
    time: "4:00 PM",
    title: "Ceremony",
    description:
      "Alex arrives for set up. Trevor will meet and get him in the right doors to set up.",
    audience: "both",
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour",
    description:
      "Cocktail hour begins. Photos continue. Caricature artist set started. Light candles.",
    audience: "both",
  },
  {
    time: "5:30 PM",
    title: "Speeches",
    description: "Speeches by Will, Sharky, Dyan, and the couple",
    audience: "both",
  },
  {
    time: "6:00 PM",
    title: "Dinner",
    description: "Dinner service begins",
    audience: "both",
  },
  {
    time: "6:30 PM",
    title: "Bustle the Dress",
    description: "Bustle the wedding dress",
    audience: "both",
  },
  {
    time: "6:45 PM",
    title: "First Dance",
    description: "First dance",
    audience: "both",
  },
  {
    time: "7:00 PM",
    title: "Cake Cutting",
    description: "Cake cutting ceremony",
    audience: "both",
  },
  {
    time: "10:00 PM",
    title: "Last Call",
    description: "Last call at the bar (limit of one drink per person)",
    audience: "both",
  },
  {
    time: "10:30 PM",
    title: "Bar Closed",
    description: "Bar closes",
    audience: "both",
  },
];

function getAudienceBadge(audience: TimelineEvent["audience"]) {
  const baseClasses =
    "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] md:text-xs font-semibold font-alasassy";

  switch (audience) {
    case "both":
      return (
        <span className={`${baseClasses} bg-[#8b1a1a]/20 text-[#8b1a1a]`}>
          Both
        </span>
      );
    case "bridesmaids":
      return (
        <span className={`${baseClasses} bg-pink-100 text-pink-700`}>
          Bridesmaids
        </span>
      );
    case "groomsmen":
      return (
        <span className={`${baseClasses} bg-blue-100 text-blue-700`}>
          Groomsmen
        </span>
      );
  }
}

// Get icon based on audience and event type
function getTimelineIcon(
  audience: TimelineEvent["audience"],
  title: string,
): React.ReactNode {
  const iconClass = "h-4 w-4 md:h-5 md:w-5";
  const lowerTitle = title.toLowerCase();

  // Christmas-themed icons
  const christmasIcons = [
    { keyword: "snow", icon: Snowflake },
    { keyword: "gift", icon: Gift },
    { keyword: "star", icon: Star },
    { keyword: "tree", icon: TreePine },
  ];

  // Wedding-themed icons
  const weddingIcons = [
    { keyword: "ceremony", icon: Gem },
    { keyword: "wedding", icon: Heart },
    { keyword: "photo", icon: Camera },
    { keyword: "party", icon: Sparkles },
    { keyword: "cake", icon: Gift },
    { keyword: "dance", icon: Sparkles },
    { keyword: "speech", icon: Heart },
  ];

  // Check for Christmas keywords first
  for (const { keyword, icon: Icon } of christmasIcons) {
    if (lowerTitle.includes(keyword)) {
      return <Icon className={iconClass} />;
    }
  }

  // Check for wedding keywords
  for (const { keyword, icon: Icon } of weddingIcons) {
    if (lowerTitle.includes(keyword)) {
      return <Icon className={iconClass} />;
    }
  }

  // Default icons based on audience
  switch (audience) {
    case "bridesmaids":
      return <Flower2 className={iconClass} />;
    case "groomsmen":
      return <Users className={iconClass} />;
    case "both":
      return <Heart className={iconClass} />;
    default:
      return <Calendar className={iconClass} />;
  }
}

// Get icon container background color based on audience
function getIconContainerClass(audience: TimelineEvent["audience"]): string {
  switch (audience) {
    case "bridesmaids":
      return "bg-pink-50 border-pink-300 text-pink-600";
    case "groomsmen":
      return "bg-blue-50 border-blue-300 text-blue-600";
    case "both":
      return "bg-[#8b1a1a]/10 border-[#8b1a1a] text-[#8b1a1a]";
    default:
      return "bg-white border-[#8b1a1a]/20 text-[#8b1a1a]";
  }
}

// Helper function to convert time string to Date object
function timeToDate(timeString: string): Date {
  const parts = timeString.split(" ");
  const time = parts[0] ?? "12:00";
  const period = parts[1] ?? "AM";

  const timeParts = time.split(":");
  const hours = timeParts[0] ?? "12";
  const minutes = timeParts[1] ?? "00";

  let hour = parseInt(hours, 10);
  const min = parseInt(minutes, 10);

  if (period === "PM" && hour !== 12) {
    hour += 12;
  } else if (period === "AM" && hour === 12) {
    hour = 0;
  }

  // Use wedding date: December 13, 2025
  const date = new Date(2025, 11, 13, hour, min);
  return date;
}

export default async function TimelinePage() {
  // Filter events for each timeline
  const groomsmenEvents = timelineEvents.filter(
    (event) => event.audience === "groomsmen" || event.audience === "both",
  );
  const bridesmaidsEvents = timelineEvents.filter(
    (event) => event.audience === "bridesmaids" || event.audience === "both",
  );

  return (
    <>
      <Card className="mb-6 border-2 border-[#8b1a1a]/20 bg-white/85">
        <CardHeader className="pb-3">
          <CardTitle className="text-center font-madi text-3xl text-[#8b1a1a] md:text-4xl">
            Wedding Day Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-center text-gray-600">
          <p className="font-alasassy mb-4 text-sm leading-relaxed md:text-base">
            Separate timelines for groomsmen and bridesmaids. Times are subject
            to change, but this gives you a general idea of the day&apos;s
            schedule.
          </p>
        </CardContent>
      </Card>

      {/* Groomsmen Timeline */}
      <Card className="mb-6 border-2 border-blue-300/50 bg-white/85">
        <CardHeader className="pb-3">
          <CardTitle className="text-center font-madi text-2xl text-blue-700 md:text-3xl">
            Groomsmen Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-center text-gray-600">
          {/* <div className="mb-4 flex justify-center">
            <DownloadTimelineButton
              timelineCardId="groomsmen-timeline-card"
              timelineName="groomsmen-timeline"
            />
          </div> */}
        </CardContent>
      </Card>

      <Card
        id="groomsmen-timeline-card"
        className="mb-6 border-2 border-blue-300/50 bg-white/85"
      >
        <CardContent className="p-4 md:p-6">
          <Timeline size="sm" iconSize="sm" className="gap-3">
            {groomsmenEvents.map((event, index) => (
              <TimelineItem
                key={index}
                date={timeToDate(event.time)}
                timeString={event.time}
                title={event.title}
                description={event.description}
                status="completed"
                icon={getTimelineIcon(event.audience, event.title)}
                iconColor="primary"
                iconContainerClassName={getIconContainerClass(event.audience)}
                className="pb-3"
              >
                {event.audience === "both" && (
                  <div className="mt-1">{getAudienceBadge(event.audience)}</div>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>

      {/* Bridesmaids Timeline */}
      <Card className="mb-6 border-2 border-pink-300/50 bg-white/85">
        <CardHeader className="pb-3">
          <CardTitle className="text-center font-madi text-2xl text-pink-700 md:text-3xl">
            Bridesmaids Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-center text-gray-600">
          <div className="mb-4 flex justify-center">
            {/* <DownloadTimelineButton
              timelineCardId="bridesmaids-timeline-card"
              timelineName="bridesmaids-timeline"
            /> */}
          </div>
        </CardContent>
      </Card>

      <Card
        id="bridesmaids-timeline-card"
        className="border-2 border-pink-300/50 bg-white/85"
      >
        <CardContent className="p-4 md:p-6">
          <Timeline size="sm" iconSize="sm" className="gap-3">
            {bridesmaidsEvents.map((event, index) => (
              <TimelineItem
                key={index}
                date={timeToDate(event.time)}
                timeString={event.time}
                title={event.title}
                description={event.description}
                status="completed"
                icon={getTimelineIcon(event.audience, event.title)}
                iconColor="primary"
                iconContainerClassName={getIconContainerClass(event.audience)}
                className="pb-3"
              >
                {event.audience === "both" && (
                  <div className="mt-1">{getAudienceBadge(event.audience)}</div>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </>
  );
}
