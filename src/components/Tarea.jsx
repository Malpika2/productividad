import React from 'react';
import { Badge, Card, Col, Button, Row, ButtonGroup} from 'react-bootstrap';
import {BsTrash , BsCheckAll, BsPlayFill,BsFillPauseFill,BsPencilSquare } from "react-icons/bs";
export const Tarea = ({tarea, current, eliminarTarea, innRef, provided, iniciarTarea, pausar, reanudar, finalizarTarea,setModalShow,tiempoRestante}) => {

    const {titulo, descripcion,estatus} = tarea;    

    return (<Card bg='info' className="col-12 py-2 mt-2" ref={innRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Card.Header>
                <Row>
                    <label className={ `col-xs-6 col-sm-2 py-20 px-10 mb-3 font-weight-bold ${estatus} `}>{estatus}</label>
                    <Card.Title className="col-xs-12 col-sm-7 text-center pt-2">{titulo}</Card.Title>
                    <Col xs={12} sm={3} className="float-right">
                        <ButtonGroup className="d-flex justify-content-center">
                            {/* <Button size="sm" className="" variant="info"><BsStopFill /></Button> */}
                            {tarea.estatus==='Pausa' && <Button size="sm" className="" variant="secondary" onClick={() => reanudar(tarea.id)}><BsPlayFill /></Button>}
                            {tarea.estatus==='Activa' && <Button size="sm" className="" variant="secondary" onClick={() => pausar(tarea.id)}><BsFillPauseFill /></Button>}
                        </ButtonGroup>
                    
                        <Badge className="col-xs-12 col-sm-12 justify-content-center bold"><h5>{new Date(tiempoRestante * 1000).toISOString().substr(11, 8)}</h5> </Badge>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
            <Card.Text>{descripcion}</Card.Text>
            </Card.Body>
            <Card.Footer>
            {!current && <Button variant="warning" onClick={() => setModalShow(true)}><BsPencilSquare /> Modificar</Button>}
            {!current && <Button className="ml-3" variant="danger" onClick={() => eliminarTarea(tarea.id)} ><BsTrash/> Eliminar</Button>}
            {(tarea.estatus !== 'Pendiente' && tarea.estatus!=='Finalizada') && <Button className="float-right" variant="success" onClick={() => finalizarTarea(tarea.id)} ><BsCheckAll /> Finalizar</Button>}
            {(current && tarea.estatus === 'Pendiente') && <Button className="float-right" variant="success" onClick={() => reanudar(tarea.id)} ><BsPlayFill /> Iniciar</Button>}
            </Card.Footer>
            </Card>
    )
}
