declare module "react-star-sky" {
  import { CSSProperties, ReactNode } from "react";

  interface StarSkyProps {
    debugFps?: boolean;
    frameRate?: number;
    style?: CSSProperties;
    starColor?: string | "rainbow";
    skyColor?: [number, number, number];
    children?: ReactNode;
  }

  const StarSky: React.FC<StarSkyProps>;
  export default StarSky;
}
