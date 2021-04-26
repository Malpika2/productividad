import React from 'react'

export const TareaCompletada = ({tarea}) => {
    return (
            <tr className="text-center">
                <td>{tarea.titulo}</td>
                <td>{tarea.descripcion}</td>
                <td>{tarea.create_at.split('T')[0]}</td>
                <td>{new Date((tarea.duracion - tarea.restante )* 1000).toISOString().substr(11, 8)} de {new Date(tarea.duracion * 1000).toISOString().substr(11, 8)}</td>
            </tr>
    )
}
