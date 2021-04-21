import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TareaContainer } from "./containers/TareaContainer";
import { RegistrarTareaConteiner} from "./containers/RegistrarTareaConteiner";
import { Tarea } from "./components/Tarea";
import { Container, Row, Col, Table, Button} from 'react-bootstrap';
import { BsPlusSquareFill } from 'react-icons/bs';
import { useState } from 'react';
import { TareasPendientesContainer } from './containers/TareasPendientesContainer';
function App() {
  const [modalShow, setModalShow] = useState(false);

  return<>
      <Container fluid className="p-4">
        <Row>
          <h1 className="text-center col-8">Aplicación de productividad</h1>
          <Col xs={3}> 
            <Button variant="primary" onClick={() => setModalShow(true)}>
                <BsPlusSquareFill/> Registar tarea
            </Button>
          </Col>
          {/* <RegistrarTareaConteiner className="col-3"/> */}
      <Col xs={7}>
          <h3>Tarea activa:</h3>
          <TareaContainer />
      </Col>
      <Col xs={5}>
          <h4 className="text-center">Tareas completadas</h4>
          <Table>
              <thead>
                  <tr>
                      <th>Titulo</th>
                      <th>Descripción</th>
                      <th>Tiempo</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Crear Tareas</td>
                      <td>Crear el componente para hacer las tareas y que se muestren</td>
                      <td>1:20:30</td>
                  </tr>
                  <tr>
                      <td>Modificar Tarea</td>
                      <td>Modificar la tarea en componente actual</td>
                      <td>50:20</td>
                  </tr>
                  <tr>
                      <td>Temporizador </td>
                      <td>Realizar el funcionamiento del temporizador para que se pueda iniciar, pausar o denter el temporizador</td>
                      <td>1:20:30</td>
                  </tr>
              </tbody>
          </Table>
      </Col>
      <TareasPendientesContainer />
      </Row>
      <RegistrarTareaConteiner 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </Container>
  </>

}
export default App;
