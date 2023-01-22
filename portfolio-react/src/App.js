import {ChakraProvider} from "@chakra-ui/react"

import SimpleFooter from "./components/Footer";
import NavBar from "./components/NavBar";
import Projetos from "./components/Projetos";
 
function App() {
  return (
   <ChakraProvider>
   <NavBar/>
    <Projetos/>
    
    <SimpleFooter/>
   </ChakraProvider>    
  )
}

export default App;
