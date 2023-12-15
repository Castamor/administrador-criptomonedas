import { useEffect, useState } from "react";
import Error from "./Error";
import useSelect from "../hooks/useSelect";
import { datosMoneda } from "../data";

const Formulario = ({setResultados}) => {

  // Array de configuración
  const [datosCripto, setDatosCripto] = useState([])

  // Datos persé
  const [ moneda, SelectMoneda ] = useSelect('Elige tu moneda', datosMoneda, 'moneda')
  const [ cripto, SelectCripto ] = useSelect('Elige tu criptomoneda', datosCripto, 'cripto')

  // Error
  const [error, setError] = useState(false)
  const [busqueda, setBusqueda] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
      const data = await res.json()

      const arrayCriptos = data.Data.map( cripto => {{
        const objeto = {
          id: cripto.CoinInfo.Name,
          valor: cripto.CoinInfo.FullName
        }

        return objeto
      }})
      
      setDatosCripto(arrayCriptos)
    }

    fetchData()
  }, [])

  useEffect(() => setBusqueda(false), [moneda, cripto])

  const handleFormulario = async e => {
    e.preventDefault()

    if([moneda, cripto].includes('')) {
      setError(true)
      
      setTimeout(() => {
        setError(false)
      }, 3000);

    } else if(!busqueda) {
      setBusqueda(true)
      const res = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`)
      const data = await res.json()

      const infoCripto = datosCripto.filter( dato => dato.id === cripto)
      const infoMoneda = datosMoneda.filter( dato => dato.id === moneda)

      setResultados({
        cripto: infoCripto[0].valor,
        nombre: infoMoneda[0].valor,
        precio: data.DISPLAY[cripto][moneda].PRICE,
        alto: data.DISPLAY[cripto][moneda].HIGH24HOUR,
        bajo: data.DISPLAY[cripto][moneda].LOW24HOUR
      })
    }
  }

  return (
    <>   
      <form 
        className='pt-7 relative'
        onSubmit={handleFormulario}
      >

        <div className='flex flex-col md:flex-row justify-center gap-5 mb-7'>
          <SelectCripto />
          <SelectMoneda />
        </div>

        <div className='flex justify-center'>
          <input
            type="submit" 
            value="Cotizar" 
            className='bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white font-bold py-2 w-2/5 md:py-1 md:w-1/5 rounded-md '
          />
        </div>

      </form>

      {error && <Error>Los campos son obligatorios</Error>}
    </>
  );
}

export default Formulario;