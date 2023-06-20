
import { ProviderType } from "../../../core/Provider"
import PokemonsView from "./PokemonsView"

export default class OnClickPokemon {

  constructor(private pokemonsView: PokemonsView, private provider: ProviderType) {}

  public handle = async (name: string) => {
    const pokemon = await this.provider.getPokemon.execute(name)
    this.pokemonsView.loadPokemon(pokemon)
  }
}
