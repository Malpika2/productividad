import React, {useState,useEffect} from 'react';
import { Tarea } from '../components/Tarea';

export const TareaContainer = () => {
    const [timeRemaining, setTimeRemaining] = useState('');

    useEffect(() => {
        setInterval( () => {
            setTimeRemaining( prevTimeRemaining => prevTimeRemaining -1 );
        },1000)
    }, [])

    return <Tarea key="1" countDown={timeRemaining} />
}