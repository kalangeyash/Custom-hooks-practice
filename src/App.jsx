import { useState } from 'react'
import './App.css'
import {useIsOnline} from './useIsOnline'
function App() {

  const isOnline = useIsOnline()

  if(isOnline){
    return "youre onlline"
  }
  if(!isOnline){return "yoi are offfline.,..."}
  return (
    <>
     
    </>
  )
}

export default App
