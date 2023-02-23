import ReactDOM from 'react-dom/client'
import App from './App'
import { DrawerProvider } from '@/context/DrawerContext'
import { TabProvider } from '@/context/TabContext'
import { Compose } from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Compose components={[TabProvider, DrawerProvider]}>
    <App />
  </Compose>
)
