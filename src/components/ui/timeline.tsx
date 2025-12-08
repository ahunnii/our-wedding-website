"use client";

import * as React from "react";
import { cn } from "~/lib/utils";
import { CheckCircle2, Circle, Loader2, AlertCircle } from "lucide-react";

type TimelineSize = "sm" | "md" | "lg";
type IconSize = "sm" | "md" | "lg";
type IconColor = "primary" | "secondary" | "muted" | "accent";
type Status = "completed" | "in-progress" | "pending";

interface TimelineContextValue {
  size: TimelineSize;
  iconSize: IconSize;
}

const TimelineContext = React.createContext<TimelineContextValue>({
  size: "md",
  iconSize: "md",
});

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TimelineSize;
  iconSize?: IconSize;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, size = "md", iconSize = "md", children, ...props }, ref) => {
    const contextValue = React.useMemo(
      () => ({ size, iconSize }),
      [size, iconSize]
    );

    return (
      <TimelineContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn("relative flex flex-col gap-6", className)}
          {...props}
        >
          {children}
        </div>
      </TimelineContext.Provider>
    );
  }
);
Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: Date | string | number;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  iconColor?: IconColor;
  iconContainerClassName?: string;
  status?: Status;
  loading?: boolean;
  error?: string;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      className,
      date,
      title,
      description,
      icon,
      iconColor = "primary",
      iconContainerClassName,
      status = "completed",
      loading = false,
      error,
      children,
      ...props
    },
    ref
  ) => {
    const { size, iconSize } = React.useContext(TimelineContext);

    const sizeClasses = {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
    };

    const iconSizeClasses = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    };

    const iconColorClasses = {
      primary: "text-[#8b1a1a]",
      secondary: "text-gray-600",
      muted: "text-gray-400",
      accent: "text-[#8b1a1a]",
    };

    const getStatusIcon = () => {
      if (loading) {
        return <Loader2 className={cn(iconSizeClasses[iconSize], "animate-spin")} />;
      }

      if (error) {
        return (
          <AlertCircle
            className={cn(iconSizeClasses[iconSize], "text-destructive")}
          />
        );
      }

      if (icon) {
        return icon;
      }

      switch (status) {
        case "completed":
          return (
            <CheckCircle2
              className={cn(iconSizeClasses[iconSize], iconColorClasses[iconColor])}
            />
          );
        case "in-progress":
          return (
            <Circle
              className={cn(
                iconSizeClasses[iconSize],
                iconColorClasses[iconColor],
                "fill-current"
              )}
            />
          );
        case "pending":
          return (
            <Circle
              className={cn(iconSizeClasses[iconSize], iconColorClasses[iconColor])}
            />
          );
        default:
          return null;
      }
    };

    return (
      <div
        ref={ref}
        className={cn("relative flex", sizeClasses[size], className)}
        {...props}
      >
        {/* Timeline line */}
        <div
          className={cn(
            "absolute w-0.5 bg-[#8b1a1a]/20",
            size === "sm" ? "left-3 top-6 bottom-[-0.75rem] md:left-3" : "left-3 top-8 bottom-[-1.5rem] md:left-4"
          )}
        />

        {/* Icon container */}
        <div
          className={cn(
            "relative z-10 flex shrink-0 items-center justify-center rounded-full border-2 bg-white",
            size === "sm"
              ? "h-5 w-5 md:h-6 md:w-6"
              : "h-6 w-6 md:h-8 md:w-8",
            iconContainerClassName ??
              "border-[#8b1a1a]/20 text-[#8b1a1a]"
          )}
        >
          {getStatusIcon()}
        </div>

        {/* Content */}
        <div className={cn("flex-1", size === "sm" ? "pb-3" : "pb-6")}>
          {date && (
            <TimelineTime
              date={date}
              className={cn(
                "mb-0.5 font-baguet",
                size === "sm" ? "text-xs md:text-sm" : "text-sm md:text-base"
              )}
            />
          )}
          {title && (
            <h3
              className={cn(
                "mb-0.5 font-semibold text-gray-900 font-baguet",
                size === "sm"
                  ? "text-sm md:text-base"
                  : "text-lg font-semibold md:text-xl"
              )}
            >
              {title}
            </h3>
          )}
          {description && (
            <p
              className={cn(
                "text-gray-600 font-alasassy",
                size === "sm" ? "text-xs md:text-sm" : "text-sm md:text-base"
              )}
            >
              {description}
            </p>
          )}
          {error && (
            <p className="mt-1 text-sm text-destructive font-alasassy">{error}</p>
          )}
          {children}
        </div>
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

interface TimelineTimeProps extends React.HTMLAttributes<HTMLTimeElement> {
  date: Date | string | number;
  format?: string | Intl.DateTimeFormatOptions;
}

const TimelineTime = React.forwardRef<HTMLTimeElement, TimelineTimeProps>(
  ({ className, date, format, ...props }, ref) => {
    const [formattedDate, setFormattedDate] = React.useState<string>("");

    React.useEffect(() => {
      const dateObj = typeof date === "string" || typeof date === "number"
        ? new Date(date)
        : date;

      if (format && typeof format === "string") {
        // Simple format string support (you can extend this)
        setFormattedDate(
          dateObj.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        );
      } else if (format && typeof format === "object") {
        setFormattedDate(dateObj.toLocaleString("en-US", format));
      } else {
        // Default format: time only
        setFormattedDate(
          dateObj.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        );
      }
    }, [date, format]);

    return (
      <time
        ref={ref}
        dateTime={
          typeof date === "string" || typeof date === "number"
            ? new Date(date).toISOString()
            : date.toISOString()
        }
        className={cn("font-medium text-gray-500 font-baguet", className)}
        {...props}
      >
        {formattedDate}
      </time>
    );
  }
);
TimelineTime.displayName = "TimelineTime";

export { Timeline, TimelineItem, TimelineTime };

