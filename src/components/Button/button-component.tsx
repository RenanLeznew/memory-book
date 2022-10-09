import React from 'react';
import { Link, Navigate } from 'react-router-dom'

function FoldedButton(props: {oldIndex: number, setIndex: React.Dispatch<React.SetStateAction<number>>, direction: string}){
  let { oldIndex, setIndex, direction } = props;
  let button_position = "w-0 h-0 absolute bottom-0 shadow-inner border-[#572307]" 
  while(oldIndex > 47){
    oldIndex = 0;
  }
  if(direction == "backward" || direction == "home"){
    button_position = button_position + " border-b-[85px] border-solid border-r-[85px] border-r-transparent left-0"
  }
  else if(direction == "forward"){
    button_position = button_position + " border-b-[85px] border-solid border-l-[85px] border-l-transparent right-0"
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
            <Navigate to={"/"}></Navigate>
          }
        }
      }
       className={button_position}
    />
  )
}

export default FoldedButton;

