import { useEffect, useState } from "react";

export function useDebounce(value,timeout){
    const [debouncedValue, setDebouncedValue] = useState(value)
    
    useEffect(()=>{
       let timeoutNumber =  setInterval(()=>{
        setDebouncedValue(value)
       },timeout)

       return()=>{
        clearTimeout(timeoutNumber)
       }

    },[value])

    return debouncedValue
}