import { ChakraProvider} from '@chakra-ui/react'
import Router from './Routes/routes';


function App() {
  return (
    <ChakraProvider>    
    <Router/>    
    </ChakraProvider>
  )
}

export default App;
