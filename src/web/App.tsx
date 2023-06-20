import { ProviderType } from "../core/Provider";
import PokemonsScreen from './pokemon/screens/PokemonsScreen';

export default function App({ provider }: { provider: ProviderType }): JSX.Element {
  return (<PokemonsScreen provider={provider} /> )
}
