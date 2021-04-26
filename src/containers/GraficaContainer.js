import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios';
import { VictoryBar, VictoryChart, Bar,
    VictoryTooltip, VictoryAxis } from 'victory';
export const GraficaContainer = ({tareasCompletas}) => {
    const [estadisticas, setEstadisticas] = useState([]);
    const [dataGrafica, setDataGrafica] = useState([]);
    
    const getData =  () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/tareas/estadisticas')
              .then(function (response) {
                resolve(response.data.data);
              })
              .catch(function (error) {
                reject(error)
              });
          })
    }

    const initGrafica = async () => {
        const tareasBd = await getData();
        setEstadisticas(tareasBd);
    
    }
    const data = [];
    useEffect(() => {
        initGrafica();
        console.log('estaditicas',estadisticas);
    }, [])
    useEffect(() => {
        // Formatea los datos en X y Y para la grafica
        const dataG = estadisticas.map( (est, index) => {
            let fecha = est.create_at.split('T')[0];
            fecha = fecha.split('-')[2];
            console.log('est',{[fecha]:est.total});
            return {x:fecha,y:est.total,label:`${est.total} Tareas realizadas`};
        });
        dataG.sort( (a, b)  => {
            if (a.x > b.x) {
              return 1;
            }
            if (a.x < b.x) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });

        setDataGrafica(dataG);
        console.log(dataGrafica);
    }, [estadisticas])

    return (
        <div className="col-8">
            <h1>Graficas Container</h1>
            <VictoryChart height={200} width={400}
          domainPadding={{ x: 20, y: [0, 10] }}
          scale={{ x: "linear",y: "linear" }}
        >
          <VictoryBar
            labelComponent={<VictoryTooltip/>}
            dataComponent={
              <Bar />
            }
            data={dataGrafica}
          />
            <VictoryAxis
                label= {`del  0${new Date().getMonth()} de ${new Date().getFullYear()}`}
            />
            <VictoryAxis
                dependentAxis
                label= 'Tareas realizadas'
            />
        </VictoryChart>
        </div>
    )
}
