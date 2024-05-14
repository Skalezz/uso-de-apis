const CardDetail = ({pokemonConsultado, nombreMayus}) => {
  return (
             <>
                {pokemonConsultado ? 
                <div className="col m-2">
                    <div className="card" style={{width: '16rem'}}>
                        <img src={`${pokemonConsultado[0].sprites.front_default}`} className="card-img-top" alt={`imagen de ${pokemonConsultado[0].name}`}></img>
                        <div className="card">
                            <div className="card-header">
                                {nombreMayus((pokemonConsultado[0].name))}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{`Altura: ${(pokemonConsultado[0].height*0.1).toFixed(2)} m`}</li>
                                <li className="list-group-item">{`Peso: ${(pokemonConsultado[0].weight/10).toFixed(2)} kg`}</li>
                                <li className="list-group-item">Tipos: {pokemonConsultado[0].types.map((tipo) => <span key={tipo.slot}>{tipo.type.name} </span>)}</li>
                            </ul>
                            <a href={`https://www.wikidex.net/wiki/${pokemonConsultado[0].name}`} className="btn btn-primary" target={`_blank`}>Más información</a>
                        </div>
                    </div>
                </div>:
                <div className="col m-2">
                    <div className="card" style={{width: '16rem'}}>
                        <p>Aca aparecerá la info del pokemon que selecciones!</p>
                    </div>
                </div>
                }  
            </>
         )
    };

export default CardDetail