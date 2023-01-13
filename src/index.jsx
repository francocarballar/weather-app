import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import { Provider } from './context'
import { ChakraProvider } from '@chakra-ui/react'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
)

serviceWorkerRegistration.register()
