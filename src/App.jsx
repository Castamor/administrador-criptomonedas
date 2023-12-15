import { useState } from 'react'
import Formulario from './components/Formulario'
import Resultados from './components/Resultados'

function App() {

  const [resultados, setResultados] = useState({})

  return (
    <div>
      <section className='mb-7'>
        <h1 className='text-white font-bold text-center text-4xl md:mt-7'>
          Cotiza <span className='text-blue-400'> criptomonedas </span> al instante
        </h1>

        <Formulario
          setResultados={setResultados}
        />
      </section>

      <Resultados 
        resultados={resultados}
      />
    </div>
  )
}

export default App
