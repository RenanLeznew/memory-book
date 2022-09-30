import React from 'react';

function FoldedButton(props: {oldIndex: number, setIndex: React.Dispatch<React.SetStateAction<number>>}){
  let { oldIndex, setIndex } = props;
  while(oldIndex > 3){
    oldIndex = 0;
  }
  return (
      <button 
       onClick={
        () => {
          console.log(oldIndex);
          setIndex(oldIndex+1);
        }
      }
       className="w-0 h-0 absolute bottom-0 right-0 shadow-inner border-[#572307]  border-b-[85px] border-solid border-l-[85px] border-l-transparent" 
    />
  )
}

export default FoldedButton;

