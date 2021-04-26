import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { RegistrarTarea  } from '../components/RegistrarTarea';


export const EditarTareaContainer = ({show,onHide,tarea,initTareas,setTiempoRestante}) => {
    
    const [duration, setDuration] = useState({ minutes: 0, seconds: 0 });

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    useEffect(() => {
        
    }, [])
	const handleDuration = (e) => {
        const { id, value } = e.target;
        if(value>0){
          let min = id === "minutes" ? Math.abs(value) : duration.minutes;
          let sec = id === "seconds" ? Math.abs(value) : duration.seconds;
          if (sec > 59) {
            min = min + Math.round(sec / 60);
            sec = sec % 60;
          }
          if (min >= 120) {
            min = 120;
            sec = 0;
          }
          setDuration({ minutes: min, seconds: sec });
        }
    }
    const onSubmit = ({titulo, descripcion}) => {
        axios.put('https://api-arkon.herokuapp.com/tareas', 
        {titulo, descripcion, minutes:duration.minutes, seconds:duration.seconds,idTarea:tarea.id})
          .then(function (response) {
            onHide();
            reset();
            setDuration({ minutes: 0, seconds: 0 });
            initTareas();
            setTiempoRestante(duration.minutes*60 + duration.seconds);
          })
          .catch(function (error) {
            onHide();
            reset();
            setDuration({ minutes: 0, seconds: 0 });
            initTareas();
          });
    }

    return <RegistrarTarea  
    title='MODIFICAR TAREA'
    show={show}
    onHide={onHide} 
    setduration={setDuration} 
    handleduration={handleDuration} 
    duration={duration} 
    onSubmit={onSubmit}
    handlesubmit={handleSubmit}
    register = {register}
    errors= {errors}
    tarea={tarea}
/>;
}
