import React from 'react';
import { Badge, Card, Col, Button, Row, ButtonGroup} from 'react-bootstrap';
import { BsCheckAll, BsPlayFill, BsStopFill,BsFillPauseFill,BsPencilSquare } from "react-icons/bs";
export const Tarea = ({countDown}) => {
    return (
        <Card bg='info' className="col-12 py-2 mt-2">
            {/* <Badge variant="info">Activo</Badge> */}
            <Card.Header>
                <Row>
                    <Card.Title className="col-xs-12 col-sm-9 text-center pt-2">Tarea Titulo </Card.Title>
                    <Col xs={12} sm={3} className="float-right">
                        <ButtonGroup className="d-flex justify-content-center">
                            <Button size="sm" className="" variant="info"><BsStopFill /></Button>
                            <Button size="sm" className="" variant="secondary"><BsPlayFill /></Button>
                            <Button size="sm" className="" variant="secondary"><BsFillPauseFill /></Button>
                        </ButtonGroup>
                        <Badge className="col-xs-12 col-sm-12 justify-content-center bold"><h5>{countDown}</h5> </Badge>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Text>Descripcion de la tarea....</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="warning"><BsPencilSquare /> Modificar</Button>
                <Button className="float-right" variant="success"><BsCheckAll /> Finalizar</Button>    
            </Card.Footer>
        </Card>
    )
}
