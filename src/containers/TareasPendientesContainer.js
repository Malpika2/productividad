import React, { useState }  from 'react';
import axios from 'axios';
import { ButtonGroup, Col, Button } from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TareaContainer } from './TareaContainer';


export const TareasPendientesContainer = ( {tareas, initTareas,initTareasCompletas }) => {
  const [stateFiltro, setStateFiltro] = useState({min:0,max:120});
  const eliminarTarea = (idTarea) => {
    axios.delete(`http://localhost:4000/tareas/${idTarea}`)
    .then((response) => {
      initTareas();
    }).catch((error) => {

    })
  }
  const iniciarTarea = (idTarea) => {
    axios.put(`http://localhost:4000/tareas/iniciar`,{idTarea})
    .then((response) => {
      initTareas();
    }).catch((error) => {

    })
  }
  return (
    <DragDropContext
      onDragEnd={   (param) => {
        const posicionInicial = param.source.index;
        const posicionFinal = param.destination!==null ? param.destination.index : 0;
        const idTarea = param.draggableId.replace('draggable-', '');
        // Evitar el cambio de posicion(0) en la tarea activa.
        if(posicionFinal !== 1 ){
            axios.put('http://localhost:4000/tareas/posicion',{idTarea,posicionInicial,posicionFinal})
            .then((response) => {
              initTareas();
            }).catch((error) => {
              console.log(error);
            })
        }
      }}
    >
      <Droppable droppableId="droppable-1" >
        {(provided, _) => (
          <Col ref={provided.innerRef}  {...provided.droppableProps}
          >
            <h3 className="text-center">Tareas pendientes:</h3>
            <ButtonGroup className="d-flex justify-content-center">
              <Button size="sm" className="" variant="info" onClick={() => setStateFiltro({min:0,max:30})}> {'Menor a 30 min'}</Button>
              <Button size="sm" className="" variant="primary" onClick={() => setStateFiltro({min:30,max:60})} > {'30min - 60min'} </Button>
              <Button size="sm" className="" variant="danger" onClick={() => setStateFiltro({min:60,max:120})} >{'Mayor a 60min'}</Button>
              <Button size="sm" className="" variant="info" onClick={() => setStateFiltro({min:0,max:120})} >{'Todos'}</Button>
            </ButtonGroup>
            {tareas.length > 0 && tareas.map((tarea, i) => {
              const decimalDuracion = ~~(tarea.duracion/60);
              
              if( decimalDuracion > stateFiltro.min && decimalDuracion <= stateFiltro.max){
              return <Draggable 
                        key={tarea.id} 
                        draggableId={`draggable-${tarea.id}`} 
                        index={tarea.posicion}
                        isDragDisabled={tarea.estatus==='Activa' || tarea.estatus==='Pausa'}
                        >
                          {(provided, _) => (
                            <TareaContainer
                              current={i===0}
                              innRef={provided.innerRef} 
                              provided={provided}
                              key={tarea.id} 
                              tarea={tarea}
                              initTareas={initTareas}
                              eliminarTarea={eliminarTarea}
                              iniciarTarea={iniciarTarea}
                              initTareasCompletas={initTareasCompletas}
                            />
                          )}
                      </Draggable>
              }else{return '' ;}
            })}
            {tareas.length ===0 && 'No tienes Tareas pendientes'}
            {provided.placeholder}
          </Col>
        )}
      </Droppable>
    </DragDropContext>
  )
}
