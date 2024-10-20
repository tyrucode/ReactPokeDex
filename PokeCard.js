function Pokecard({id, name, type, exp}) {
    return (
        <div>
            <h1>{name}</h1>
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
                alt={name} 
            />
            <p>Type: {type}</p>
            <p>Exp: {exp}</p>
        </div>
    );
}