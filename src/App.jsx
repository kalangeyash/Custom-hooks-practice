import { useState } from "react";
import "./App.css";
import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";
import { useDimensions } from "./hooks/useDimensions";
import { useInterval } from "./hooks/useInterval";
import { useDebounce } from "./hooks/useDebounce";
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

  // const [count,setCount] =useState(0)
  // useInterval(()=>{
  //   setCount(c => c+1)
  // },1000)
  // return(<>
  //   timer at {count}
  //   </>)

  // useDebounce hook
//application of debounce is search bars to reduce uneccessry calls
  const[value ,setValue] = useState(0)
  const debouncedValue = useDebounce(value,500)

  return(<>
  debouncedValue is {debouncedValue}
    <input type="text" onChange={(e)=>{setValue(e.target.value)}}></input>
  </>)
}
 
export default App;
