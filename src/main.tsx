import ReactDOM from 'react-dom/client'
import App from './App'
import { DrawerProvider } from '@/context/DrawerContext'
import { TabProvider } from '@/context/TabContext'
import { Compose } from '@/context/index'
import { ThemeProvider } from '@/context/ThemeContext'
import {ApolloProvider} from '@apollo/client'
import graphqlClient from './gql/graphql-client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Compose components={[TabProvider, DrawerProvider, ThemeProvider]}>
    <ApolloProvider client={graphqlClient}>
      <App />
    </ApolloProvider>
  </Compose>
)
