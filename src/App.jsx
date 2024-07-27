import { useState } from 'react'
import './App.css'
import {useIsOnline} from './hooks/useIsOnline'
import {useMousePointer} from './hooks/useMousePointer'
function App() {

  const isOnline = useIsOnline()

  // if(isOnline){
  //   return "youre onlline"
  // }
  // if(!isOnline){return "yoi are offfline.,..."}


  // mouse pointer

  const mousePointer = useMousePointer()

  
  return(
    <>
        your mouse is at position {mousePointer.x} , { mousePointer.y} 
    </>
    )
  
}

export default App
