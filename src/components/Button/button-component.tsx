import React from 'react';

function FoldedButton(props: {oldIndex: number, setIndex: React.Dispatch<React.SetStateAction<number>>}){
  let { oldIndex, setIndex } = props;
  while(oldIndex > 47){
    oldIndex = 0;
  }
  return (
      <button 
       onClick={
        () => {
          setIndex(oldIndex+4);
        }
      }
       className="w-0 h-0 absolute bottom-0 right-0 shadow-inner border-[#572307]  border-b-[85px] border-solid border-l-[85px] border-l-transparent" 
    />
  )
}

export default FoldedButton;

