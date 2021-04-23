import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EditarTareaContainer } from './EditarTareaContainer';
import {Tarea} from '../components/Tarea';


export const TareaContainer = ({tarea, current, eliminarTarea, innRef, provided,initTareas, iniciarTarea,initTareasCompletas}) => {
    const [modalShow, setModalShow] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(tarea.restante);
    const [estatusTarea, setEstatusTarea] = useState(tarea.estatus)

    useEffect( () => {
        
        
        
        const pausarTarea = (event) => {
            if(tarea.estatus==='Activa'){
                axios.put(`http://localhost:4000/tareas/toggle`,{idTarea:tarea.id,action:'Pausa',tiempoRestante})
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
        let myInterval = setInterval(() => {
                if(estatusTarea ==='Activa'){
                    if(tiempoRestante === 0){
                        finalizarTarea(tarea.id);
                    }else{
                    setTiempoRestante(tiempoRestante - 1);
                    }
                }
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        });

    

  const pausar = (idTarea)=>{
    axios.put(`http://localhost:4000/tareas/toggle`,{idTarea,action:'Pausa',tiempoRestante})
    .then((response) => {
      initTareas();
      setEstatusTarea('Pausa');
    }).catch((error) => {
      console.log(error);
    })
  }
  const reanudar = (idTarea) => {
    axios.put(`http://localhost:4000/tareas/toggle`,{idTarea,action:'Activa',tiempoRestante})
    .then((response) => {
        setEstatusTarea('Activa');
        initTareas();
    }).catch((error) => {
      console.log(error);
    })
  }
  const finalizarTarea = (idTarea) => {
    axios.put(`http://localhost:4000/tareas/toggle`,{idTarea,action:'Finalizada',tiempoRestante})
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

            />

            </>
    )
}
