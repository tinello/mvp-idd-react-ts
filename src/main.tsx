import ReactDOM from 'react-dom/client'
import App from './web/App.tsx'
import {provider} from './core/Provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App provider={provider} />
)
