import { ColorModeScript,ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { dark } from './theme/theme';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={dark}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals();
