import { ChakraProvider} from '@chakra-ui/react'
import HomePage from './Pages/HomePage'
import theme from './components/Theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>    
    <HomePage/>    
    </ChakraProvider>
  )
}

export default App;
