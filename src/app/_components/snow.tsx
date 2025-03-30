"use client";
import Snowfall from "react-snowfall";
// import "~/styles/snow-override.css";
// import "~/styles/snow.css";
// import { SnowfallCanvas } from "react-snowfall/lib/SnowfallCanvas";

export const SnowFall = () => {
  return (
    <Snowfall
      color="#dee4fd"
      snowflakeCount={200}
      radius={[0.5, 3.0]}
      speed={[0.5, 3.0]}
      wind={[-0.5, 2.0]}
      rotationSpeed={[-1.0, 1.0]}
      opacity={[0.1, 0.2]}
    />
  );
};
