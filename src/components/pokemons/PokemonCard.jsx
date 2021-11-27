const PokemonCard = ({ pokemon, handleClick }) => {
  const { id, name } = pokemon;
  const pokemonType = pokemon?.types ? pokemon?.types[0]?.type.name : '';
  const className = pokemonType + ' card-container';
  const image =
    pokemon.sprites?.other?.dream_world?.front_default ||
    pokemon.sprites?.other?.home?.front_default;

  return (
    <div className={className} onClick={() => handleClick(pokemon)}>
      <div className='number'>
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className='detail-wrapper'>
        <h3>{name}</h3>
        <small>Type: {pokemonType}</small>
      </div>
    </div>
  );
};

export default PokemonCard;
