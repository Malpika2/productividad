import React from 'react'
import { Modal, Form, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
export const RegistrarTarea = (props) => {
    const {setduration, handleduration, duration, onSubmit,show,onHide } = props;
    return (<Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                REGISTRAR TAREA
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form.Group controlId="tituloTarea">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo de la tarea " />
                </Form.Group>
                <Form.Group controlId="descripcionTarea">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción de la tarea " />
                </Form.Group>
                <Form.Label htmlFor="">Duración:</Form.Label>
                <Form.Row className="text-center">
                    <Col sm={4} className="">
                        <Button
                            onClick={() => setduration({ minutes: 30, seconds: 0 })}
                            variant="secondary"
                        >
                            Corta
                        </Button>
                    </Col>
                    <Col sm={4} className="">
                        <Button
                            onClick={() => setduration({ minutes: 45, seconds: 0 })}
                            variant="info"
                        >
                            Media
                        </Button>
                    </Col>
                    <Col sm={4} className="">
                        <Button
                            onClick={() => setduration({ minutes: 60, seconds: 0 })}
                            variant="danger"
                        >
                            Larga
                        </Button>
                    </Col>
                </Form.Row>
                <Form.Row className="center">
                    <Col sm={6} className="">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Minutos:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="minutes"
                                onChange={handleduration}
                                type="decimal"
                                id="minutes"
                                placeholder="00"
                                value={duration.minutes}
                            />
                        </InputGroup>
                    </Col>
                    <Col sm={6} className="">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Segundos:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                name="seconds"
                                onChange={handleduration}
                                type="decimal"
                                id="seconds"
                                placeholder="00"
                                value={duration.seconds}
                            />
                        </InputGroup>
                    </Col>
                </Form.Row>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Cerrar</Button>
            <Button variant='success' type="submit" >Guardar</Button>
        </Modal.Footer>
            </Form>
    </Modal>
    )
}
