import React from 'react';
import { useNavigate } from 'react-router-dom'

function FoldedButton(props: {oldIndex: number, setIndex: React.Dispatch<React.SetStateAction<number>>, direction: string}){
  let navigate = useNavigate();
  let { oldIndex, setIndex, direction } = props;
  let button_position = "w-0 h-0 absolute bottom-0 shadow-inner border-[#572307]" 
  while(oldIndex > 47){
    oldIndex = 0;
  }
  if(direction == "backward" || direction == "home"){
    button_position = button_position + " lg:border-b-[85px] border-b-[45px] border-solid border-r-[45px] lg:border-r-[85px] border-r-transparent left-0"
  }
  else if(direction == "forward"){
    button_position = button_position + " border-b-[45px] lg:border-b-[85px] border-solid border-l-[45px] lg:border-l-[85px] border-l-transparent right-0"
  }
  return (
      <button 
       onClick={
        () => {
          if (direction === "forward"){
            setIndex(oldIndex+4);
          }
          else if (direction === "backward" && oldIndex > 3){
            setIndex(oldIndex-4);
          }
          else if (direction === "home"){
            {navigate('/')}
          }
        }
      }
       className={button_position}
    />
  )
}

export default FoldedButton;

