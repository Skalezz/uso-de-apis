import { useEffect, useRef } from "react";

const Buscador = ({fraseBusqueda, buscar}) => {

    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    return (
        <>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Ingresa el nombre o número de pokemon que deseas revisar"
                onChange={buscar}
                value={fraseBusqueda}
                ref={inputRef}
            />
        </>

    )
};

export default Buscador