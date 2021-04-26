import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EditarTareaContainer } from './EditarTareaContainer';
import {Tarea} from '../components/Tarea';


export const TareaContainer = ({tarea, current, innRef, provided,initTareas,initTareasCompletas}) => {
    const [modalShow, setModalShow] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(tarea.restante);
    const [estatusTarea, setEstatusTarea] = useState(tarea.estatus)

    useEffect( () => {
        // Guarda la tarea antes de cerrarse la pagina o recargarse {puede variar dependiendo del servidor}
        
        const pausarTarea = (event) => {
            if(tarea.estatus==='Activa'){
                axios.put(`https://api-arkon.herokuapp.com/tareas/toggle`,{idTarea:tarea.id,action:'Pausa',tiempoRestante})
                    .then((response) => {
                    }).catch((error) => {
                })
            }
        }
        window.addEventListener("beforeunload", pausarTarea);

        return () => {
            window.removeEventListener("beforeunload", pausarTarea);
          }
    },[]);
      useEffect(()=>{
        //   Descontar 1 segundo al tiempoRestante
        const myInterval = setInterval(() => {
                if(estatusTarea ==='Activa'){
                    if(tiempoRestante === 0){
                        finalizarTarea(tarea.id);
                    }else{
                      setTiempoRestante(PrevTiempoRestante => PrevTiempoRestante - 1);
                    }
                }
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        });

    
        const eliminarTarea = (idTarea) => {//Eliminar tarea
          axios.delete(`https://api-arkon.herokuapp.com/tareas/${idTarea}`)
          .then((response) => {
            initTareas();
          }).catch((error) => {
      
          })
        }
        const iniciarTarea = (idTarea) => { //Iniciar Tarea
          axios.put(`https://api-arkon.herokuapp.com/tareas/iniciar`,{idTarea})
          .then((response) => {
            initTareas(); //Actualiza las tareas pendientes
          }).catch((error) => {
      
          })
        }
  const pausar = (idTarea)=>{
    axios.put(`https://api-arkon.herokuapp.com/tareas/toggle`,{idTarea,action:'Pausa',tiempoRestante})
    .then((response) => {
      initTareas();
      setEstatusTarea('Pausa');
    }).catch((error) => {
      console.log(error);
    })
  }
  const reanudar = (idTarea) => {
    axios.put(`https://api-arkon.herokuapp.com/tareas/toggle`,{idTarea,action:'Activa',tiempoRestante})
    .then((response) => {
        setEstatusTarea('Activa');
        initTareas();
    }).catch((error) => {
      console.log(error);
    })
  }
  const finalizarTarea = (idTarea) => {
    axios.put(`https://api-arkon.herokuapp.com/tareas/toggle`,{idTarea,action:'Finalizada',tiempoRestante})
    .then((response) => {
        setEstatusTarea('Finalizada');
        initTareas();
        initTareasCompletas();
    }).catch((error) => {
      console.log(error);
    }) 
  }
    return ( <>
            <Tarea
                filtro={false}
                current={current}
                innRef={innRef} 
                provided={provided}
                tarea={tarea}
                initTareas={initTareas}
                eliminarTarea={eliminarTarea}
                iniciarTarea={iniciarTarea}
                setModalShow={setModalShow}
                tiempoRestante={tiempoRestante}
                pausar={pausar}
                reanudar={reanudar}
                finalizarTarea={finalizarTarea}
            />
            <EditarTareaContainer
                show={modalShow}
                onHide={() => setModalShow(false)}
                tarea={tarea}
                initTareas={initTareas}
                setTiempoRestante={setTiempoRestante}

            />

            </>
    )
}
