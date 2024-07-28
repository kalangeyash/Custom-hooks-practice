import { useState } from "react";
import "./App.css";
import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";
import { useDimensions } from "./hooks/useDimensions";
import { useInterval } from "./hooks/useInterval";
function App() {
  // const isOnline = useIsOnline()

  // if(isOnline){
  //   return "youre onlline"
  // }
  // if(!isOnline){return "yoi are offfline.,..."}

  // mouse pointer

  // const mousePointer = useMousePointer()

  // return(
  //   <>
  //       your mouse is at position {mousePointer.x} , { mousePointer.y}
  //   </>
  //   )

  // const widthHeight = useDimensions();

  // return (
  //   <>
  //     height is {widthHeight.h} , width is {widthHeight.w}
  //   </>
  // );

  // useInterval hook

  const [count,setCount] =useState(0)
  useInterval(()=>{
    setCount(c => c+1)
  },1000)
  return(<>
    timer at {count}
    </>)
}
 
export default App;
