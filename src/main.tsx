import ReactDOM from 'react-dom/client'
import App from './App'
import { DrawerProvider } from '@/context/DrawerContext'
import { TabProvider } from '@/context/TabContext'
import { Compose } from '@/context/index'
import { ThemeProvider } from '@/context/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Compose components={[TabProvider, DrawerProvider, ThemeProvider]}>
    <App />
  </Compose>
)
