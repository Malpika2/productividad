import React from 'react'

export const TareaCompletada = ({tarea}) => {
    return (
            <tr>
                <td>{tarea.titulo}</td>
                    <td>{tarea.descripcion}</td>
                    <td>{new Date(tarea.restante * 1000).toISOString().substr(11, 8)}</td>
            </tr>
    )
}
