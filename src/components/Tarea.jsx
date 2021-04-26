import React from 'react';
import { Card, Col, Button, Row, ButtonGroup} from 'react-bootstrap';
import {BsTrash , BsCheckAll, BsPlayFill,BsFillPauseFill,BsPencilSquare } from "react-icons/bs";
export const Tarea = ({tarea, current, eliminarTarea, innRef, provided, iniciarTarea, pausar, reanudar, finalizarTarea,setModalShow,tiempoRestante}) => {
const {titulo, descripcion,estatus} = tarea;    
    return (<Card className="col-12 py-2 mt-2 glassMorph" ref={innRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                <Row className="pt-3">
                    <label className={ `col-7 pl-4 font-weight-bold ${estatus} `}>{estatus}</label>
                    
                    <Col xs={5} sm={5} className="float-right">
                        <ButtonGroup className="d-flex justify-content-center">
                            {/* <Button size="sm" className="" variant="info"><BsStopFill /></Button> */}
                            {tarea.estatus==='Pausa' && <Button size="sm" className="" variant="outline-secondary" onClick={() => reanudar(tarea.id)}><BsPlayFill /></Button>}
                            {tarea.estatus==='Activa' && <Button size="sm" className="" variant="secondary" onClick={() => pausar(tarea.id)}><BsFillPauseFill /></Button>}
                        </ButtonGroup>
                        <label className="col-xs-6 col-sm-12 text-center">{new Date(tiempoRestante * 1000).toISOString().substr(11, 8)}</label>
                    </Col>
                </Row>

            <Card.Body className="py-0">
            <Card.Title className="col-xs-12 text-center text-uppercase font-weight-bold mb-0">{titulo}</Card.Title>
            <Card.Text className="text-muted">{descripcion}</Card.Text>
            </Card.Body>
            <Col xs={12} className="text-right">
            {!current && <Button variant="outline-warning" onClick={() => setModalShow(true)}><BsPencilSquare /> Modificar</Button>}
            {!current && <Button className="ml-3" variant="outline-danger" onClick={() => eliminarTarea(tarea.id)} ><BsTrash/> Eliminar</Button>}
            {(tarea.estatus !== 'Pendiente' && tarea.estatus!=='Finalizada') && <Button className="float-right" variant="outline-success" onClick={() => finalizarTarea(tarea.id)} ><BsCheckAll /> Finalizar</Button>}
            {(current && tarea.estatus === 'Pendiente') && <Button className="float-right" variant="outline-success" onClick={() => reanudar(tarea.id)} ><BsPlayFill /> Iniciar</Button>}
            </Col>
            </Card>
    )
}
