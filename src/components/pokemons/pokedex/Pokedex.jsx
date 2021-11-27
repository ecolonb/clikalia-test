import { useDispatch, useSelector } from 'react-redux';
import { pokemonSetActive } from 'redux/actions/pokemons';

import './styles.scss';

export default function Pokedex() {
  const dispatch = useDispatch();
  const { activePokemon } = useSelector((state) => state.pokemons);

  const handleClose = () => {
    dispatch(pokemonSetActive(null));
  };

  if (!activePokemon) return false;

  const image =
    activePokemon.sprites?.other?.dream_world?.front_default ||
    activePokemon.sprites?.other?.home?.front_default;

  return activePokemon ? (
    <div className='pokedex-wrapper'>
      <button className='close-button' onClick={handleClose}>
        X
      </button>
      <div id='pokedex'>
        <div id='left'>
          <div id='logo'></div>
          <div id='bg_curve1_left'></div>
          <div id='bg_curve2_left'></div>
          <div id='curve1_left'>
            <div id='buttonGlass'>
              <div id='reflect'> </div>
            </div>
            <div id='miniButtonGlass1' onClick={handleClose}></div>
            <div id='miniButtonGlass2' onClick={handleClose}></div>
            <div id='miniButtonGlass3' onClick={handleClose}></div>
          </div>
          <div id='curve2_left'>
            <div id='junction'>
              <div id='junction1'></div>
              <div id='junction2'></div>
            </div>
          </div>
          <div id='screen'>
            <div id='topPicture'>
              <div id='buttontopPicture1'></div>
              <div id='buttontopPicture2'></div>
            </div>
            <div id='picture'>
              <img src={image} alt='psykokwak' height='170' />
            </div>
            <div id='buttonbottomPicture'></div>
            <div id='speakers'>
              <div className='sp'></div>
              <div className='sp'></div>
              <div className='sp'></div>
              <div className='sp'></div>
            </div>
          </div>
          <div id='bigbluebutton'></div>
          <div id='barbutton1'></div>
          <div id='barbutton2'></div>
          <div id='cross'>
            <div id='leftcross'>
              <div id='leftT'></div>
            </div>
            <div id='topcross'>
              <div id='upT'></div>
            </div>
            <div id='rightcross'>
              <div id='rightT'></div>
            </div>
            <div id='midcross'>
              <div id='midCircle'></div>
            </div>
            <div id='botcross'>
              <div id='downT'></div>
            </div>
          </div>
        </div>
        <div id='right'>
          <div id='stats'>
            <strong>Name:</strong> {activePokemon.name}
            <br />
            <strong>Type:</strong> {activePokemon.types[0].type.name}
            <br />
            <strong>Height: </strong>
            {activePokemon.height} in.
            <br />
            <strong>Weight:</strong> {activePokemon.weight} lbs.
            <br />
            <br />
            <strong>Abilities: </strong>
            {activePokemon.abilities.map((pokemon, idx) => (
              <label key={idx}> {pokemon.ability.name}, </label>
            ))}
          </div>
          <div id='blueButtons1'>
            <div className='blueButton'></div>
            <div className='blueButton'></div>
            <div className='blueButton'></div>
            <div className='blueButton'></div>
            <div className='blueButton'></div>
          </div>
          <div id='blueButtons2'>
            <div className='blueButton'></div>
            <div className='blueButton'></div>
            <div className='blueButton'></div>
            <div className='blueButton'></div>
            <div className='blueButton'></div>
          </div>
          <div id='miniButtonGlass4'></div>
          <div id='miniButtonGlass5'></div>
          <div id='barbutton3'></div>
          <div id='barbutton4'></div>
          <div id='yellowBox1'></div>
          <div id='yellowBox2'></div>
          <div id='bg_curve1_right'></div>
          <div id='bg_curve2_right'></div>
          <div id='curve1_right'></div>
          <div id='curve2_right'></div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}
