import { describe, it, expect, vi } from 'vitest'
import ApiClient from '../../../core/infrastructure/ApiClient'
import { GetPokemon } from '../../../core/pokemon/actions/GetPokemon';
import { Pokemon } from '../../../core/pokemon/domain/PokemonList';


describe('Get Pokemon correctly', async () => {
    it('Should return a_pokemon correctly', async () => {
      const apiClient = new ApiClient()
      const spy = vi.spyOn(apiClient, 'get')
      spy.mockImplementation(() => new Promise<Pokemon>((resolve) => {
        resolve(
          {
            base_experience: '1',
            weight: 2,
            id: 3,
            height: 4,
            name: 'a_pokemon'
          }
        )
      }))
      const getPokemon = new GetPokemon(apiClient)

      
      const result = await getPokemon.execute('a_pokemon')


      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith('/pokemon/a_pokemon')
      expect(result).toEqual({
        base_experience: '1',
        weight: 2,
        id: 3,
        height: 4,
        name: 'a_pokemon'
      })
    })
})
