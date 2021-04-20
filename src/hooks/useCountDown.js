import { useState, useRef } from "react"

export const useCountDown = (duration = 0) => {
    
    const [remaining, setRemaining] = useState(0);
    const timer = useRef({});

    const init = (time) => {
        if(!timer.current.started){
            timer.current.started= ts;
            timer.current.lastInterval = ts;
        }
    } 

    
}
