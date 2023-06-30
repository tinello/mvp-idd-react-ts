import { trackPromise } from 'react-promise-tracker'

export default class ApiClient {
  private static baseUrl = 'https://pokeapi.co/api/v2'

  async get<T>(endpoint: string): Promise<T> {
    
    return trackPromise(
      new Promise<T>((resolve, reject) => {
        fetch(
          ApiClient.baseUrl + endpoint,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        ).then(async (r) => {
          let response
          try {
            response = await r.json()
          } catch (error) {
            reject(error)
            return
          }

          if ([500, 404].includes(r.status)) {
            reject('ERROR')
            return
          }
          resolve(response)
        })
      }),
      endpoint
    )
  }
}
