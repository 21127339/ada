import React, { Suspense, lazy } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/color-mode';
import theme from 'theme'
import Preloader from 'components/Preloader';

const HomePage = lazy(() => import('pages/index'));
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Suspense fallback={<Preloader />}>
        <HomePage />
      </Suspense>
    </ChakraProvider>
  );
}

export default App;