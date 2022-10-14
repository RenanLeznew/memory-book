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
    <div className="bg-gradient-to-r from-[#ba7e4d] via-[#77513f] to-[#a46e43]">
      <div className="brightness-50 w-screen h-screen border-8 border-[#593d30]">       
        <div className="absolute left-1/2 h-full w-2 lg:w-4 bg-gradient-to-r shadow-inner border-2 border-t-0 border-b-0 border-[#a57057] from-[#a57057] via-[#422e21] to-[#a57057]">
        </div>
        <button 
          className="cursor-default" 
          onClick={() => (setIsShown(true), setKeeper(1))}
          onDoubleClick={() => (setIsShown(false))}
        >
          <OurImage 
            source={source[index]}
            topbot="top-[10%] lg:top-[5%]"
            leftright="lg:left-52 left-6"
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
            topbot="bottom-[10%] lg:bottom-[5%]"
            leftright="lg:left-52 left-6"
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
            topbot="top-[10%] lg:top-[5%] "
            leftright="lg:right-56 right-5"
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
            topbot="bottom-[10%] lg:bottom-[5%]"
            leftright="lg:right-56 right-5"
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
    </div>
  );
}

export default App;
