import { ReactNode } from "react";
import StarSky from "react-star-sky";
import "react-star-sky/dist/index.css";

interface BodyWrapperProps {
  children: ReactNode;
}

const BodyWrapper = ({ children }: BodyWrapperProps) => {
  return (
    <>
      <StarSky
        debugFps={true}
        frameRate={30}
        style={{
          opacity: 1,
          width: "100wh",
        }}
        starColor={"rainbow"}
        skyColor={[20, 20, 100]}
      >
        {children}
      </StarSky>
    </>
  );
};

export default BodyWrapper;
