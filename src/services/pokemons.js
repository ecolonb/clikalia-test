const baseUrl = process.env.REACT_APP_API_URL;

const headers = {
  'Content-Type': 'application/json'
};

export const getAllPokemons = async (limit = '?limit=24&offset=0') => {
  let responseJson = undefined;
  const endPoint = baseUrl.concat('/pokemon/', limit);
  try {
    const response = await window.fetch(endPoint, {
      method: 'GET',
      headers
    });
    responseJson = await response.json();
  } catch (error) {
    responseJson = {
      ok: false,
      error
    };
  }
  return responseJson;
};

export const getSinglePokemon = async (pokemonName) => {
  let responseJson = undefined;
  const endPoint = baseUrl.concat('/pokemon/', pokemonName);
  try {
    const response = await window.fetch(endPoint, {
      method: 'GET',
      headers
    });
    responseJson = await response.json();
  } catch (error) {
    responseJson = {
      ok: false,
      error
    };
  }
  return responseJson;
};

export const searchByAbility = async (ability) => {
  let responseJson = undefined;
  const endPoint = baseUrl.concat('/ability/', ability);
  try {
    const response = await window.fetch(endPoint, {
      method: 'GET',
      headers
    });
    responseJson = await response.json();
  } catch (error) {
    responseJson = {
      ok: false,
      error
    };
  }
  return responseJson;
};
