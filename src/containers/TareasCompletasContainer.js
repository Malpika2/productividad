import React from 'react';
import { Table } from 'react-bootstrap';
import { TareaCompletada } from '../components/TareaCompleta';


export const TareasCompletadasContainer = ({initTareasCompletas, tareasCompletas}) => {


    return (<>
            <h4 className="text-center">TAREAS COMPLETADAS</h4>
          <Table striped bordered hover size="sm" responsive id="tableCompletadas">
              <thead className="thead-dark">
                  <tr className="text-center">
                      <th>Titulo</th>
                      <th>Descripción</th>
                      <th>Registro</th>
                      <th>Tiempo</th>
                  </tr>
              </thead>
              <tbody className="">
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
