export async function fetchPokedexData(URL) {
  let response,
    pokemonNameData,
    infoURLs,
    pokemonInformation,
    pokemon = []
  if (URL != null && URL != '') {
    const responseData = await fetch(URL)
    response = await responseData.json()
    pokemonNameData = response?.results?.map((pokemon) => pokemon.name)
    infoURLs = response?.results?.map((result) => result.url)

    pokemonInformation = await fetchPokemonInformation(infoURLs)
  }

  if (
    pokemonNameData.length > 0 &&
    pokemonInformation.length > 0 &&
    pokemonNameData.length == pokemonInformation.length
  ) {
    for (let i = 0; i < pokemonNameData.length; i++) {
      pokemon.push({
        name: pokemonNameData[i],
        information: pokemonInformation[i],
      })
    }
  }

  console.log('LOGGING POKEMON INFORMATION: ', response)
  return [response, pokemon]
}

async function fetchPokemonInformation(infoURLs) {
  let pokeInformation = []

  if (infoURLs?.length > 0) {
    for (let i = 0; i < infoURLs.length; i++) {
      const responseData = await fetch(infoURLs[i])
      const response = await responseData.json()
      pokeInformation.push(response)
    }
  }

  return pokeInformation
}
