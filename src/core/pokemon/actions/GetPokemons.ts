import ApiClient from "../../infrastructure/ApiClient";
import { PokemonList } from "../domain/PokemonList";


export const GET_POKEMONS_ENDPOINT = '/pokemon?offset=0&limit=20'

export class GetPokemons {
  constructor(private apiClient: ApiClient) {}

  public async execute(): Promise<PokemonList> {
    return await this.apiClient.get<PokemonList>(GET_POKEMONS_ENDPOINT)
  }
}