import { RegistrarTareaConteiner } from "./containers/RegistrarTareaConteiner";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import { useReducer, useState, useEffect } from "react";
import { TareasPendientesContainer } from "./containers/TareasPendientesContainer";
import { tareasReducer } from "./tareasReducer";
import { tareasCompletasReducer } from "./tareasCompletasReducer";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TareasCompletadasContainer } from "./containers/TareasCompletasContainer";
import { BrowserRouter as Router } from "react-router-dom";
import { GraficaContainer } from "./containers/GraficaContainer";
const initialState = [];

function App() {
	const [modalShow, setModalShow] = useState(false);
	const [tareas, dispatch] = useReducer(tareasReducer, initialState);
	const [tareasCompletas, dispatchCompletas] = useReducer(
		tareasCompletasReducer,
		initialState
	);

	const getTareas = () => {
		return new Promise((resolve, reject) => {
			axios
				.get("http://localhost:4000/tareas")
				.then(function (response) {
					resolve(response.data.data);
				})
				.catch(function (error) {
					reject(error);
				});
		});
	};
	//Actualiza las tareas pendientes
	const initTareas = async () => {
		const tareasBd = await getTareas();
		dispatch({ type: "setTareas", payload: tareasBd });
		initTareasCompletas();
	};

	const getTareasCompletas = () => {
		return new Promise((resolve, reject) => {
			axios
				.get("http://localhost:4000/tareas/completas")
				.then(function (response) {
					resolve(response.data.data);
				})
				.catch(function (error) {
					reject(error);
				});
		});
	};
	//Actualiza las tareas completadas
	const initTareasCompletas = async () => {
		const tareasBd = await getTareasCompletas();
		dispatchCompletas({ type: "setTareasCompletas", payload: tareasBd });
	};
	// Da formato a la fecha en un rango de -7 dias.
	function randomDate(date) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const currentDay = date.getDate();
		const day =
			Math.floor(Math.random() * (currentDay - (currentDay - 7))) +
			(currentDay - 7);
		const dateFormated = year + "-" + month + "-" + day + "- 00:00:14";
		return dateFormated;
	}
	// Registra 50 tareas en los ultimos 7 dias
	const registroMasivo = () => {
		for (let index = 0; index < 50; index++) {
			let titulo = ` Tarea ${index}-${
				Math.floor(Math.random() * (50 - 1)) + 1
			} `;
			let descripcion = `Descripcion de la tarea ${titulo}`;
			let minutos = Math.floor(Math.random() * (119 - 1)) + 1;
			let segundos = Math.floor(Math.random() * (59 - 1)) + 1;
			let duracion = minutos * 60 + segundos;
			let restante =
				duracion * ((Math.floor(Math.random() * (100 - 80)) + 80) / 100);
			restante = ~~(duracion - restante);
			let create_at = randomDate(new Date());
			const data = { titulo, descripcion, duracion, restante, create_at };
			console.log(data);
			axios
				.post("http://localhost:4000/tareas/masivo", data)
				.then(function (response) {
					if (index === 49) initTareasCompletas();
				})
				.catch(function (error) {});
		}
	};
	useEffect(() => {
		initTareas();
		initTareasCompletas();
		console.log("tareasCompletas", tareasCompletas);
	}, []);

	return (
		<Router>
			<Container fluid className="p-4">
				<Row>
					<h1 className="text-center col-12 my-3">APLICACIÓN DE PRODUCTIVIDAD</h1>
					<Col className="px-5 py-3" xs={12}>
                    {/* Registrar 50 tareas */}
						<button className="float-left newMorph" variant="primary" onClick={() => setModalShow(true)}>
							Registar tarea
						</button>
                        {/* Registrar una tarea */}
						<button className="float-right newMorph" onClick={() => registroMasivo()}>
							Registar 50 tareas
						</button>
					</Col>
				</Row>
				<Row  className="justify-content-md-center">
                    {/* Area para mostrar el listado de tareas pendientes */}
					<Col xs={12} sm={10}>
						<TareasPendientesContainer
							tareas={tareas}
							initTareas={initTareas}
							initTareasCompletas={initTareasCompletas}
						/>
                        
					</Col>
				</Row>
				<Row>
                    {/* Area para mostrar las tareas Completadas  */}
					<Col xs={5}>
						<TareasCompletadasContainer
							tareasCompletas={tareasCompletas}
							initTareasCompletas={initTareasCompletas}
						/>
					</Col>
                    {/* Area para mostrar la grafica de tareas realizadas */}
                    <Col xs={12}>
                        <GraficaContainer tareasCompletas={tareasCompletas} />						
					</Col>
				</Row>

                {/* Modal para registrar y editar tareas */}
				<RegistrarTareaConteiner
					show={modalShow}
					onHide={() => setModalShow(false)}
					initTareas={initTareas}
				/>
			</Container>
		</Router>
	);
}
export default App;
