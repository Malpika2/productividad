import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Tarea } from '../components/Tarea'

export const TareasPendientesContainer = () => {
const [tareas, setTareas] = useState([]);

async function getTareas() {
    const response = await axios.get('http://localhost:4000/tareas');
    setTareas(response.data);
    return response.data; 
}
    useEffect(() => {
    getTareas();
    console.log('tareas',tareas)
    }, [])

    return (
        <Col xs={12}>
          <h3>Tareas pendientes:</h3>
        { tareas.length>0 && tareas.map((tarea) => {
          return <Tarea key={tarea.id} countDown={tarea.duracion} />
        })}
      </Col>
    )
}
