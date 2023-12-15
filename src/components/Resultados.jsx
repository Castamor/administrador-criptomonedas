const Resultados = ({resultados}) => {
    return (
        <>
            {Object.keys(resultados).length > 0 && (

                <div className="bg-gray-900 opacity-100 text-white py-10 md:mb-7 rounded-lg md:w-2/4 mx-auto font-bold">
                    <p className="text-center text-2xl">
                        <span className="text-blue-300">{resultados.cripto} {''} </span> en {''}
                        <span className="text-blue-300">{(resultados.nombre).split('(')[0].trim()}</span>:
                    </p>
                    <p className="text-center text-4xl my-4 font-black">{resultados.precio}</p>
                    
                    <p className="text-center text-1xl underline"> Precio más alto (24hrs): </p>
                    <p className="text-center text-2xl mb-4 font-black"> {resultados.alto}</p>

                    <p className="text-center text-1xl underline"> Precio más bajo (24hrs): </p>
                    <p className="text-center text-2xl font-black"> {resultados.bajo}</p>
                </div>

            )}
        </>
    );
}

export default Resultados;