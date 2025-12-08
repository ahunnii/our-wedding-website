"use client";

import { useState } from "react";
import html2canvas from "html2canvas";
import { Button } from "~/components/ui/button";
import { Download, Loader2 } from "lucide-react";

interface DownloadTimelineButtonProps {
  timelineCardId: string;
  timelineName?: string;
}

export function DownloadTimelineButton({
  timelineCardId,
  timelineName = "timeline",
}: DownloadTimelineButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const timelineCard = document.getElementById(timelineCardId);
      if (!timelineCard) {
        console.error("Timeline card not found");
        alert("Timeline not found. Please refresh the page and try again.");
        return;
      }

      // Use html2canvas to capture the timeline
      const canvas = await html2canvas(timelineCard, {
        backgroundColor: "#ffffff",
        scale: 2, // Higher quality for better image
        logging: false,
        useCORS: true,
        allowTaint: true,
        windowWidth: timelineCard.scrollWidth,
        windowHeight: timelineCard.scrollHeight,
      });

      // Convert canvas to blob and download
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error("Failed to create blob");
            alert("Failed to generate image. Please try again.");
            return;
          }

          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `wedding-${timelineName}-${new Date().toISOString().split("T")[0]}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        },
        "image/png",
        1.0
      );
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to download timeline. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      className="rounded-full bg-[#8b1a1a] px-6 py-2 text-white shadow-lg ring-2 ring-[#8b1a1a]/30 transition-all duration-200 hover:scale-105 hover:bg-[#a32d2d] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#8b1a1a]/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      {isDownloading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Download Timeline
        </>
      )}
    </Button>
  );
}

