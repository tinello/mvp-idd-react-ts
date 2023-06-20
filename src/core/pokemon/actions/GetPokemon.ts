import ApiClient from "../../infrastructure/ApiClient";
import { Pokemon } from "../domain/PokemonList";


export const GET_POKEMON_ENDPOINT = '/pokemon/'

export class GetPokemon {
  constructor(private apiClient: ApiClient) {}

  public async execute(name: string): Promise<Pokemon> {
    return await this.apiClient.get<Pokemon>(GET_POKEMON_ENDPOINT + name)
  }
}