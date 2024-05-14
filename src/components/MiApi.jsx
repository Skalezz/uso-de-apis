import { useEffect, useState } from "react";
import ListarPokemones from "./ListarPokemones";
import Ordenar from "./Ordenar";
import Buscador from "./Buscador";

const MiApi = () => {

    const [pokeData, setPokeData] = useState([])
    const [pokemones, setPokemones] = useState(pokeData)
    const [fraseBusqueda, setFraseBusqueda] = useState('')
    const [orden, setOrden] = useState(false)

    

    const getData = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/'
        const response = await fetch (url)
        const data = await response.json()

        const detailsPromises = data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url)
            const dataDetails = await response.json()
            return dataDetails;
        })
        
        const detailsData = await Promise.all(detailsPromises)  

        setPokeData(detailsData) 
        setPokemones(detailsData)
    }
    
    useEffect(() => {
        getData()
    }, [])
    


    const buscar = (e) => {
        const textoBusqueda = e.target.value
        const aplicarBusqueda = pokeData.filter((pokemon) => {
            return (
                pokemon.name.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
                pokemon.id.toString().includes(textoBusqueda.toString())
                )
            })
        setFraseBusqueda(textoBusqueda)
        setPokemones(aplicarBusqueda)
    }


    const ordenarAlf = () => {
        const ordenAlf = [...pokemones]
        if (orden == false){
            ordenAlf.sort((nombre1, nombre2) => nombre1.name.localeCompare(nombre2.name))
            setOrden(true)
            setPokemones(ordenAlf)
        }else{
            setPokemones(pokemones.reverse())
            setOrden(false)
        }
    }


    const ordenarNum = () => {
        const ordenNum = [...pokemones]
        if (orden == false){
            ordenNum.sort((id1, id2) => id1.id - id2.id)
            setOrden(true)
            setPokemones(ordenNum)
        }else{
            setPokemones(pokemones.reverse())
            setOrden(false)
        }
    }

    return(
        <>  
            <Buscador 
                fraseBusqueda={fraseBusqueda}
                buscar={buscar}
            />
            <Ordenar 
                ordenarAlf={ordenarAlf}
                ordenarNum={ordenarNum}
            />
            <div>
                <ListarPokemones pokemones={pokemones}/>
            </div>
        </>
    )
};

export default MiApi