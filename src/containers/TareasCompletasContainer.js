import React from 'react';
import { Table } from 'react-bootstrap';
import { TareaCompletada } from '../components/TareaCompleta';


export const TareasCompletadasContainer = ({initTareasCompletas, tareasCompletas}) => {


    return (<>
            <h4 className="text-center">Tareas completadas</h4>
          <Table>
              <thead>
                  <tr>
                      <th>Titulo</th>
                      <th>Descripción</th>
                      <th>Tiempo restante</th>
                  </tr>
              </thead>
              <tbody>
                  {tareasCompletas.map((tarea,index) => {
                    return (<TareaCompletada 
                                key={index} 
                                tarea={tarea} 
                            />)
                  })}
                  
              </tbody>
          </Table>
        </>
    )
}
