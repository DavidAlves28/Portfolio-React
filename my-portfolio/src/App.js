import { ChakraProvider} from '@chakra-ui/react'
import HomePage from './Pages/HomePage/index';
import SimpleHeader from './components/Header/index';
import SimpleFooter from './components/Footer';

function App() {
  return (
    <ChakraProvider>
    <SimpleHeader/>
    <HomePage/>
    <SimpleFooter/>
    </ChakraProvider>
  )
}

export default App;
