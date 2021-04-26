import React, { useState }  from 'react';
import axios from 'axios';
import { ButtonGroup, Col, Button, Card } from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TareaContainer } from './TareaContainer';
import { BsFillClockFill }  from 'react-icons/bs';


export const TareasPendientesContainer = ( {tareas, initTareas,initTareasCompletas }) => {

  const [stateFiltro, setStateFiltro] = useState({min:0,max:120}); //Filtro de tareas por duracion
  

  return (
    <DragDropContext //Habilita la opcion para re-ordenar las tareas mediante un drag and drop
      onDragEnd={   (param) => {

        const posicionInicial = param.source.index;
        const posicionFinal = param.destination!==null ? param.destination.index : 0;
        const idTarea = param.draggableId.replace('draggable-', '');
        // Evitar el cambio de posicion(0) en la tarea activa.
        if(posicionFinal !== 0 ){
            axios.put('https://api-arkon.herokuapp.com/tareas/posicion',{idTarea,posicionInicial,posicionFinal})
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
            <h3 className="text-center">TAREAS PENDIENTES:</h3>
            {/* Filtros de tareas */}
            <ButtonGroup className="d-flex justify-content-center">
              <Button size="sm" className="newMorph px-4 mx-4" variant="dark" onClick={() => setStateFiltro({min:0,max:30})}> <BsFillClockFill/> <b>-30''</b></Button>
              <Button size="sm" className="newMorph px-4 mx-4" variant="dark" onClick={() => setStateFiltro({min:30,max:60})} > <b> {`30'' -`} </b> <BsFillClockFill/> <b> {`- 61''`}</b></Button>
              <Button size="sm" className="newMorph px-4 mx-4" variant="dark" onClick={() => setStateFiltro({min:60,max:120})} > <BsFillClockFill/><b> {`+60''`} </b></Button>
              <Button size="sm" className="newMorph px-4 mx-4" variant="dark" onClick={() => setStateFiltro({min:0,max:120})} ><BsFillClockFill/><b> {`-120''`}</b></Button>
            </ButtonGroup>
            {tareas.length > 0 && tareas.map((tarea, i) => {
              const decimalDuracion = ~~(tarea.duracion/60);
              // Filtra las tareas por duracion
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
                              initTareasCompletas={initTareasCompletas}
                            />
                          )}
                      </Draggable>
              }else{return '' ;}
            })}
            {tareas.length ===0 && <Card bg='' className="text-center my-5 py-3"> <Card.Title>¡Felicidades! No tienes tareas pendientes</Card.Title></Card> }
            {provided.placeholder}
          </Col>
        )}
      </Droppable>
    </DragDropContext>
  )
}
