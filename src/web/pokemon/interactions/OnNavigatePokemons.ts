
import { ProviderType } from "../../../core/Provider"
import PokemonsView from "./PokemonsView"

export default class OnNavigatePokemons {

  constructor(private pokemonsView: PokemonsView, private provider: ProviderType) {}

  public handle = async () => {
    this.pokemonsView.showLoadingPokemons()
    
    const pokemonList = await this.provider.getPokemons.execute()
    
    this.pokemonsView.loadPokemons(pokemonList.results)

    this.pokemonsView.hideLoadingPokemons()
  }
}
