import React, { useState } from "react";
import { RegistrarTarea } from "../components/RegistrarTarea";
import axios from 'axios';
export const RegistrarTareaConteiner = (props) => {
	const [duration, setDuration] = useState({ minutes: 0, seconds: 0 });

	const handleDuration = (e) => {
		const { name, value } = e.target;
		let min = name === "minutes" ? Math.abs(value) : duration.minutes;
		let sec = name === "seconds" ? Math.abs(value) : duration.seconds;
		if (sec > 59) {
			min = min + Math.round(sec / 60);
			sec = sec % 60;
		}
		if (min >= 120) {
			min = 120;
			sec = 0;
		}
		setDuration({ minutes: min, seconds: sec });
	};
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        axios.post('http://localhost:4000/tareas', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
	return <RegistrarTarea  
                show={props.show}
                onHide={props.onHide} 
                setduration={setDuration} 
                handleduration={handleDuration} 
                duration={duration} 
                onSubmit={onSubmit}
            />;
};
