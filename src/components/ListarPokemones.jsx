import { useState } from "react";
import CardDetail from "./CardDetail";

const ListarPokemones = ({pokemones}) => {

    const [details, setDetails] = useState(null)

    const consultarDetails = (pokeId) => {
        const pokemonConsultado = pokemones.filter(pokemon => pokemon.id == pokeId)
        window.scrollTo(0,0)
        setDetails(pokemonConsultado)
    }


    const nombreMayus = (nombre) => {
        let primeraLetra = nombre.charAt(0).toUpperCase()
        let resto = nombre.slice(1)
        let nombreFinal = primeraLetra + resto
        return nombreFinal
    }

    return (
        <>  
            <div>
                {pokemones.map((pokemon) =>
                    <button className="col btn btn-info" key={pokemon.id}>
                        <div className="m-2 card" style={{width: '15rem'}} onClick={()=> {consultarDetails(pokemon.id)}}>
                                <p>{`${pokemon.id}`}</p>
                                <img src={`${pokemon.sprites.front_default}`} className="card-img-top" alt={`imagen de ${pokemon.name}`}></img>
                                <h5 className="card-text fs-6">{nombreMayus(pokemon.name)}</h5>
                        </div>
                    </button>
                )}
            </div>
            <div>
                <CardDetail
                    pokemonConsultado={details}
                    nombreMayus={nombreMayus}
                />
            </div>
        </>
    )
};

export default ListarPokemones