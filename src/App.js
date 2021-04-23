import { RegistrarTareaConteiner} from "./containers/RegistrarTareaConteiner";
import { Container, Row, Col, Button} from 'react-bootstrap';
import { BsPlusSquareFill } from 'react-icons/bs';
import { useReducer, useState, useEffect } from 'react';
import { TareasPendientesContainer } from './containers/TareasPendientesContainer';
import { tareasReducer } from './tareasReducer';
import {tareasCompletasReducer } from './tareasCompletasReducer';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TareasCompletadasContainer } from "./containers/TareasCompletasContainer";
import { BrowserRouter as Router} from "react-router-dom";
const initialState = [];

function App() {
    const [modalShow, setModalShow] = useState(false);
    const [tareas, dispatch] = useReducer(tareasReducer, initialState);
    const [tareasCompletas, dispatchCompletas] = useReducer(tareasCompletasReducer, initialState);

    const getTareas =  () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/tareas')
              .then(function (response) {
                resolve(response.data.data);
              })
              .catch(function (error) {
                reject(error)
              });
          })
    }
//Actualiza las tareas pendientes
    const initTareas = async () => {
        const tareasBd = await getTareas();
        dispatch({type:'setTareas',payload:tareasBd});
        initTareasCompletas();
    }

    const getTareasCompletas =  () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/tareas/completas')
              .then(function (response) {
                resolve(response.data.data);
              })
              .catch(function (error) {
                reject(error)
              });
          })
    }
    //Actualiza las tareas completadas
    const initTareasCompletas = async () => {
        const tareasBd = await getTareasCompletas();
        dispatchCompletas({type:'setTareasCompletas',payload:tareasBd});
    
    }
    // Da formato a la fecha en un rango de -7 dias.
    function randomDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const currentDay = date.getDate();
        const day = Math.floor(Math.random() * (currentDay - (currentDay-7))) + (currentDay-7);
        const dateFormated = year+'-'+month+'-'+day+'- 00:00:14';
        return dateFormated;
    }
    // Registra 50 tareas en los ultimos 7 dias
    const registroMasivo = () => {
        for (let index = 0; index < 50; index++) {
            let titulo = ` Tarea ${index}-${Math.floor(Math.random() * (50 - 1)) + 1} `;
            let descripcion = `Descripcion de la tarea ${titulo}`;
            let minutos = Math.floor(Math.random() * (119 - 1)) + 1;
            let segundos = Math.floor(Math.random() * (59 - 1)) + 1;
            let duracion = minutos*60+segundos;
            let restante = duracion * ((Math.floor(Math.random() * (100 - 80)) + 80) / 100);
            restante = ~~(duracion-restante);
            let create_at = randomDate(new Date());
            const data = {titulo,descripcion, duracion,restante,create_at};
            console.log(data);
            axios.post('http://localhost:4000/tareas/masivo',data)
            .then(function (response) {
                if(index===49) initTareasCompletas();
            })
            .catch(function (error) {
              
            });    
        }
        
    }
    useEffect(() => {    
        initTareas();
        initTareasCompletas();
    }, [])

  return<Router>
      <Container fluid className="p-4">
        <Row>
          <h1 className="text-center col-8">Aplicación de productividad</h1>
          <Col xs={2}> 
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Registar tarea
            </Button>
          </Col>
          <Col xs={2}> 
            <Button variant="primary" onClick={() => registroMasivo()}>
                Registar 50 tareas
            </Button>
          </Col>
      <Col xs={7}>
        <TareasPendientesContainer tareas={tareas} initTareas={initTareas} initTareasCompletas={initTareasCompletas} />
      </Col>
      <Col xs={5}>
          <TareasCompletadasContainer tareasCompletas={tareasCompletas} initTareasCompletas={initTareasCompletas} />
      </Col>
      </Row>
      <RegistrarTareaConteiner 
        show={modalShow}
        onHide={() => setModalShow(false)}
        initTareas={initTareas}
      />
  </Container>
  </Router>

}
export default App;
