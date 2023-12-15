import { useState } from "react";

const useSelect = (label, opciones, id) => {
    
    const [estado, setEstado] = useState('')

    const componenteSelect = () => (
        <div className='flex flex-col items-center gap-1.5'>
            <label htmlFor={id} className='text-white font-bold block text-center'>
                {label}
            </label>
            <select 
                id={id}
                defaultValue={estado}
                onChange={e => setEstado(e.target.value)}
                className='p-2 rounded-md hover:cursor-pointer'
            >
                <option value="" disabled className="text-center">-- Selecciona --</option>
                {opciones.map( opcion => (
                    <option 
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.valor}</option>
                ))}
            </select>
        </div>
    )

    return [ estado, componenteSelect ]
}

export default useSelect;