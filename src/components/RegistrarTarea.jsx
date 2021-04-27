import React, {useEffect} from 'react'
import { Modal, Form, Col, Button, InputGroup, Alert } from 'react-bootstrap';
import './RegistrarTarea.css';

export const RegistrarTarea = (props) => {
    
    const { setduration, handleduration, duration, onSubmit, show, onHide, handlesubmit, register, errors,title,tarea=null } = props;
    useEffect(() => {
        if(tarea!==null){
            const minutes = ~~(tarea.duracion/60);
            const seconds = tarea.duracion%60;
            setduration({minutes:minutes,seconds:seconds});
            console.log('duration',duration);
        }   
    }, [show])
    
    return (<Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className=""
    >
        <Form onSubmit={handlesubmit(onSubmit)}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="col-12 text-center font-weight-bold">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="tituloTarea">
                    <Form.Label className="font-weight-bold">Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo de la tarea " {...register("titulo", { required: true })} defaultValue={tarea!==null? tarea.titulo : ''} readOnly={tarea!==null} />
                    {errors.titulo && <Alert variant='danger'> El título es lo más importante</Alert>}
                </Form.Group>
                <Form.Group controlId="descripcionTarea">
                    <Form.Label className="font-weight-bold">Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción de la tarea " {...register("descripcion", { required: true })} defaultValue={tarea!==null? tarea.descripcion : ''}/>
                    {errors.descripcion && <Alert variant='danger'>No olvides agregar la descripción</Alert>}
                </Form.Group>
                <Form.Label className="font-weight-bold" >Duración:</Form.Label>
                <Form.Row className="text-center">
                    <Col xs={4} className="">
                        <Button
                            onClick={() => setduration({ minutes: 30, seconds: 0 })}
                            variant="secondary"
                        >
                            Corta
                        </Button>
                    </Col>
                    <Col xs={4} className="">
                        <Button
                            onClick={() => setduration({ minutes: 45, seconds: 0 })}
                            variant="info"
                        >
                            Media
                        </Button>
                    </Col>
                    <Col xs={4} className="">
                        <Button
                            onClick={() => setduration({ minutes: 60, seconds: 0 })}
                            variant="danger"
                        >
                            Larga
                        </Button>
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row className="center">
                    <Col sm={6} className="">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Minutos:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
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
                            <Form.Control
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
