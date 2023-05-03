import { ChakraProvider} from '@chakra-ui/react'
import HomePage from './Pages/HomePage'


function App() {
  return (
    <ChakraProvider fontFamily='Russo One , sans-serif  '>    
    <HomePage />    
    </ChakraProvider>
  )
}

export default App;
