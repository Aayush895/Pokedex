import { useState, useEffect } from 'react'

export function usePokemonDetails(url) {
  const [pokemonInformation, setPokemonInformation] = useState('')

  useEffect(() => {
    async function getPokemonInformation() {
      const information = await fetchPokemonInformation(url)
      setPokemonInformation(information)
    }
    getPokemonInformation()
  }, [])

  return pokemonInformation
}

async function fetchPokemonInformation(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
