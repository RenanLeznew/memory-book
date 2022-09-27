import OurImage from "./components/Image/image-component";
import HoveredMessage from "./components/Message/message-component";
import test from "./assets/test.jpg";
import test2 from "./assets/test.jpg";
import FoldedButton from "./components/Button/button-component";
import { ImageProperties } from "./types/Image";
import { useState } from "react";

function App() {
  const [source, setSource] = useState(test2)
  return (
    <div className="bg-gradient-to-r from-orange-900 via-yellow-700 to-orange-900 brightness-50 w-screen h-screen border-8 border-[#321414]">
      <div className="absolute left-1/2 -ml-0.5 h-full w-8 bg-gradient-to-r shadow-inner border-2 border-t-0 border-b-0 border-orange-900 from-orange-800 via-yellow-300 to-orange-800">
      </div>
      <OurImage 
        source={[source]}
        topbot="top-12"
        leftright="right-24"
        skew="transform hover:rotate-6 duration-300"  
      />
      <OurImage 
        source={[source]}
        topbot="top-96"
        leftright="right-24"
        skew="transform hover:-rotate-6 duration-300"  
      />
      <OurImage 
        source={[source]}
        topbot="top-12"
        leftright="left-24"
        skew="transform hover:-rotate-6 duration-300"  
      />
      <OurImage 
        source={[source]}
        topbot="top-96"
        leftright="left-24"
        skew="transform hover:rotate-6 duration-300"  
      />
        {/* <HoveredMessage 
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      !" 
      /> */}
        <FoldedButton /> 
    </div>
  );
}

export default App;
