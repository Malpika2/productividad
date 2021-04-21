import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Tarea } from '../components/Tarea'


export const TareasPendientesContainer = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/tareas')
      .then(function (response) {
        setTareas(response.data.data);
        console.log('then', response.data.data);
      })
      .catch(function (error) {
        console.log('error', error);
      });

  }, [])

  return (
    <DragDropContext
      onDragEnd={(param) => {
        const posicionInicial = param.source.index;
        const posicionFinal = param.destination.index;

        console.log(param);
        console.log('posicionFinal',posicionFinal);
        console.log('posicionInicial',posicionInicial);
      }}
    >
      <Droppable droppableId="droppable-1" >
        {(provided, snapshot) => (
          <Col ref={provided.innerRef}  {...provided.droppableProps} >
            <h3 className="text-center">Tareas pendientes:</h3>
            {tareas.length > 0 && tareas.map((tarea, i) => {
              return <Draggable 
                        key={tarea.id} 
                        draggableId={`draggable-${tarea.id}`} 
                        index={tarea.posicion}>
                          {(provided, snapshot) => (
                            <Tarea 
                              innRef={provided.innerRef} 
                              provided={provided}
                              key={tarea.id} 
                              tarea={tarea}
                            />
                          )}
                      </Draggable>
            })}
          </Col>
        )}
      </Droppable>
    </DragDropContext>
  )
}
