import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes/Router/Router";

function App() {
  return (    
      <ChakraProvider fontFamily="Russo One , sans-serif  ">
        <Router />
      </ChakraProvider>
    
  );
}

export default App;
