import OurImage from "./components/Image/image-component";
import HoveredMessage from "./components/Message/message-component";
import images from "./components/Exports/AllImages";
import messages from "./components/Exports/Messages";
import FoldedButton from "./components/Button/button-component";
import { useState,  } from "react";

function App() {
  let [index, setIndex] = useState(0)
  let [keeper, setKeeper] = useState(0)
  const [isShown, setIsShown] = useState(false)
  const [message] = useState(messages)
  const [source] = useState(images)
  return (
    <div className="bg-gradient-to-r from-orange-900 via-yellow-700 to-orange-900 brightness-50 w-screen h-screen border-8 border-[#321414]">
      <div className="absolute left-1/2 -ml-0.5 h-full w-8 bg-gradient-to-r shadow-inner border-2 border-t-0 border-b-0 border-orange-900 from-orange-800 via-yellow-300 to-orange-800">
      </div>
      <button 
        className="cursor-default" 
        onClick={() => (setIsShown(true), setKeeper(1))}
        onDoubleClick={() => (setIsShown(false))}
      >
        <OurImage 
          source={source[index]}
          topbot="top-12"
          leftright="left-52"
          skew="transform hover:rotate-6 duration-300"  
        />
      </button>
        {isShown && keeper===1 && (
          <HoveredMessage 
            message={message[index]} 
            topbottom="bottom-96"
            leftright="ml-4"
          />
        )}
      <button 
        className="cursor-default" 
        onClick={() => (setIsShown(true), setKeeper(2))}
        onDoubleClick={() => (setIsShown(false))}
      >
        <OurImage 
          source={source[index+1]}
          topbot="bottom-20"
          leftright="left-48"
          skew="transform hover:-rotate-6 duration-300"  
        />
      </button>
        {isShown && keeper===2 && (
        <HoveredMessage 
          message={message[index+1]} 
          topbottom="top-96"
          leftright="ml-4"
        />
        )}
      <button 
        className="cursor-default" 
        onClick={() => (setIsShown(true), setKeeper(3))}
        onDoubleClick={() => (setIsShown(false))}
      >
        <OurImage 
          source={source[index+2]}
          topbot="top-12"
          leftright="right-56"
          skew="transform hover:-rotate-6 duration-300"  
        />
      </button>
        {isShown && keeper===3 && (
        <HoveredMessage 
            message={message[index+2]} 
            topbottom="top-0"
            leftright="mr-4"
          />
        )}
      <button 
        className="cursor-default" 
        onClick={() => (setIsShown(true), setKeeper(4))}
        onDoubleClick={() => (setIsShown(false))}
      >
        <OurImage 
          source={source[index+3]}
          topbot="bottom-20"
          leftright="right-44"
          skew="transform hover:rotate-6 duration-300"  
        />
      </button>
        {isShown && keeper===4 && (
        <HoveredMessage 
          message={message[index+3]}  
          topbottom="top-96"
          leftright="mr-4"
        />
        )}
        <FoldedButton 
          direction="forward"
          oldIndex={index}
          setIndex={setIndex}
        /> 
        <FoldedButton 
          direction="home"
          oldIndex={index}
          setIndex={setIndex}
        />
        {index > 3 &&(
          <FoldedButton 
          direction="backward"
          oldIndex={index}
          setIndex={setIndex}
        /> 
        )}
        </div>
  );
}

export default App;
