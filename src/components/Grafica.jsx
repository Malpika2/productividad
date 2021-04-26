import React from 'react'
import { VictoryBar, VictoryChart, Bar,
    VictoryTooltip, VictoryAxis } from 'victory';
export const Grafica = ({dataGrafica}) => {
    return (
        <div className="col-12 pt-5 text-center">
            <h5>TAREAS REALIZADAS EN LA ULTIMA SEMANA</h5>
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
