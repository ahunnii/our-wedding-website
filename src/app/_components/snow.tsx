import "~/styles/snow-override.css";
import "~/styles/snow.css";

export const SnowFall = () => {
  return (
    // Use z-1 to keep snow above background but below content
    <div className="pointer-events-none fixed left-0 top-0 z-[1] h-screen w-full">
      <div className="relative h-full w-full">
        {Array.from({ length: 150 }).map((_, i) => (
          <div key={i} className="snow" />
        ))}
      </div>
    </div>
  );
};
