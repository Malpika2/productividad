import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { Grafica } from '../components/Grafica';

export const GraficaContainer = ({tareasCompletas}) => {
    const [estadisticas, setEstadisticas] = useState([]);
    const [dataGrafica, setDataGrafica] = useState([]);
    
    // Obtiene los datos para la grafica, agrupado por fecha [count & group]
    const getData =  () => {
        return new Promise((resolve, reject) => {
            axios.get('https://api-arkon.herokuapp.com/tareas/estadisticas')
              .then(function (response) {
                resolve(response.data.data);
              })
              .catch(function (error) {
                reject(error)
              });
          })
    }
    // Inicializa los datos 
    const initGrafica = async () => {
        const tareasBd = await getData();
        setEstadisticas(tareasBd);
    
    }
    useEffect(() => {
        initGrafica();
    }, [tareasCompletas])

    useEffect(() => {
        // Formatea los datos en X y Y para la grafica
        const dataG = estadisticas.map( (est, index) => {
            let fecha = est.create_at.split('T')[0];
            fecha = fecha.split('-')[2];
            return {x:fecha,y:est.total,label:`${est.total} Tareas realizadas`};
        });

        // Ordena los datos para que aparezcan en orden ASC por dia
        dataG.sort( (a, b)  => {
            if (a.x > b.x) {
              return 1;
            }
            if (a.x < b.x) {
              return -1;
            }
            return 0;
          });

        setDataGrafica(dataG);
    }, [estadisticas])

    return (
      <Grafica dataGrafica={dataGrafica} />
        
    )
}
