import { useEffect, useState } from "react";

export function useDimensions(){
    const[dimensions , setDimensions] = useState({w : 0 , h: 0})
    
    const changeWindow = ()=>{
        setDimensions({w: window.innerWidth , h : window.innerHeight })
    }

    useEffect(()=>{
        window.addEventListener('resize' ,changeWindow)
        changeWindow()
        return ()=>{
            window.removeEventListener('resize' ,changeWindow)
        }
    },[])
    return dimensions
}