import { Pokemon, PokemonListItem } from "../../../core/pokemon/domain/PokemonList"

export default class PokemonsView {
  constructor(
    private setLoadingPokemons: (show: boolean) => void,
    private setPokemons: (pokemons: PokemonListItem[]) => void,
    private setPokemon: (pokemon: Pokemon) => void,
  ){}

  public hideLoadingPokemons = () => {
    this.setLoadingPokemons(false)
  }

  public showLoadingPokemons = () => {
    this.setLoadingPokemons(true)
  }

  public loadPokemons = (pokemons: PokemonListItem[]) => {
    this.setPokemons(pokemons)
  }

  public loadPokemon = (pokemon: Pokemon) => {
    this.setPokemon(pokemon)
  }
}