import OurImage from "./components/Image/image-component";
import HoveredMessage from "./components/Message/message-component";
import test from "./assets/test.jpg";
import test2 from "./assets/test2.jpg";
import FoldedButton from "./components/Button/button-component";
import { useState } from "react";

function App() {
  let [index, setIndex] = useState(0)
  const [source, setSource] = useState([test, test, test2, test, test, test2, test2, test2])
  return (
    <div className="bg-gradient-to-r from-orange-900 via-yellow-700 to-orange-900 brightness-50 w-screen h-screen border-8 border-[#321414]">
      <div className="absolute left-1/2 -ml-0.5 h-full w-8 bg-gradient-to-r shadow-inner border-2 border-t-0 border-b-0 border-orange-900 from-orange-800 via-yellow-300 to-orange-800">
      </div>

      <div className="group">  
        <OurImage 
          source={source[index]}
          topbot="top-12"
          leftright="right-52"
          skew="transform hover:rotate-6 duration-300"  
        />
        <HoveredMessage 
          message="You" 
        />
        </div>
      <div className="group">
        <OurImage 
          source={source[index+1]}
          topbot="bottom-20"
          leftright="left-48"
          skew="transform hover:-rotate-6 duration-300"  
        />
        <HoveredMessage 
          message="Are" 
        />
      </div>
      <div className="group">
        <OurImage 
          source={source[index+2]}
          topbot="top-12"
          leftright="left-56"
          skew="transform hover:-rotate-6 duration-300"  
        />
        <HoveredMessage 
          message="How" 
        />
      </div>
      <div className="group">
        <OurImage 
          source={source[index+3]}
          topbot="bottom-20"
          leftright="right-44"
          skew="transform hover:rotate-6 duration-300"  
        />
        <HoveredMessage 
          message="Hi" 
        />
      </div>
        <FoldedButton 
          oldIndex={index}
          setIndex={setIndex}
        /> 
    </div>
  );
}

export default App;
