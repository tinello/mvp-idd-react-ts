import { describe, it, expect, vi } from 'vitest'
import ApiClient from '../../../core/infrastructure/ApiClient'
import { GetPokemons } from '../../../core/pokemon/actions/GetPokemons';
import { PokemonList } from '../../../core/pokemon/domain/PokemonList';


describe('Get Pokemons correctly', async () => {
    it('Should return all Pokemons correctly', async () => {
      const apiClient = new ApiClient()
      const spy = vi.spyOn(apiClient, 'get')
      spy.mockImplementation(() => new Promise<PokemonList>((resolve) => {
        resolve(
          {
            count: 1,
            next: 'a_next',
            previous: 'a_previous',
            results: [
              {name: 'a_pokemon', url: 'a_pokemon_url',},
              {name: 'an_other_pokemon', url: 'an_other_pokemon_url',},
            ],
          }
        )
      }))
      const getPokemons = new GetPokemons(apiClient)


      const result = await getPokemons.execute()


      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('/pokemon?offset=0&limit=20')
      expect(result).toEqual({
        count: 1,
        next: 'a_next',
        previous: 'a_previous',
        results: [
          {name: 'a_pokemon', url: 'a_pokemon_url',},
          {name: 'an_other_pokemon', url: 'an_other_pokemon_url',},
        ],
      })
    })
})
