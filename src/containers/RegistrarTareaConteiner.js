import React, { useState } from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";

import { RegistrarTarea } from "../components/RegistrarTarea";

export const RegistrarTareaConteiner = (props) => {
const [duration, setDuration] = useState({ minutes: 0, seconds: 0 });
const { register, handleSubmit, formState: { errors }, reset } = useForm();

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
	};
    const onSubmit = ({titulo, descripcion}) => {
      console.log({titulo, descripcion, minutes:duration.minutes, seconds:duration.seconds});
        axios.post('http://localhost:4000/tareas', 
        {titulo, descripcion, minutes:duration.minutes, seconds:duration.seconds})
          .then(function (response) {
            props.onHide();
            reset();
            setDuration({ minutes: 0, seconds: 0 });

          })
          .catch(function (error) {
            props.onHide();
            reset();
            setDuration({ minutes: 0, seconds: 0 });

          });
    }
	return <RegistrarTarea  
                show={props.show}
                onHide={props.onHide} 
                setduration={setDuration} 
                handleduration={handleDuration} 
                duration={duration} 
                onSubmit={onSubmit}
                handlesubmit={handleSubmit}
                register = {register}
                errors= {errors}
                reset
            />;
};
