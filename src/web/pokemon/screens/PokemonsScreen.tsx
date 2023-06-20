import { useEffect, useState } from "react"
import { ProviderType } from "../../../core/Provider"
import PokemonsView from "../interactions/PokemonsView"
import { Pokemon, PokemonListItem } from "../../../core/pokemon/domain/PokemonList"
import OnNavigatePokemons from "../interactions/OnNavigatePokemons"
import OnClickPokemon from "../interactions/OnClickPokemon"

type PokemonsScreenProps = {
  provider: ProviderType
}

export default function PokemonsScreen({provider}: PokemonsScreenProps): JSX.Element {

  const [loadingPokemons, setLoadingPokemons] = useState<boolean>(true)
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([])
  const [pokemon, setPokemon] = useState<Pokemon>()
  const pokemonsView = new PokemonsView(setLoadingPokemons, setPokemons, setPokemon)
  const onNavigatePokemons = new OnNavigatePokemons(pokemonsView, provider).handle
  const onClickPokemon = new OnClickPokemon(pokemonsView, provider).handle

  useEffect(() => {
    onNavigatePokemons()
  }, [])
  

  return(
  <>
    <h1>Pokemons</h1>
    {loadingPokemons 
      ? (<p>Loading...</p>)
      : (
        <>
          {pokemons.map((p) => (
            <p 
              key={p.name}
              onClick={() => onClickPokemon(p.name)}
            >
              {p.name}
              {pokemon && pokemon.name === p.name 
                ? (<> = Experience: {pokemon.base_experience}, Height: {pokemon.height}, Weight: {pokemon.weight}</>) 
                : (<></>)
              }
            </p>
          ))}
        </>
      )
    }
  </>
  )
}