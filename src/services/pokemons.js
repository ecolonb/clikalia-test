const baseUrl = process.env.REACT_APP_API_URL;

const headers = {
  'Content-Type': 'application/json'
};

export const getAllPokemons = async (limit = '?limit=20&offset=0') => {
  let responseJson = undefined;
  console.log('----->>>> baseUrl: ', baseUrl);
  const endPoint = baseUrl.concat(limit);
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
  const endPoint = baseUrl.concat('/', pokemonName);
  console.log('----->>>> baseUrl: ', endPoint);
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
