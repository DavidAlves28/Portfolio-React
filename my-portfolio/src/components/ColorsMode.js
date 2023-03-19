import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ColorsMode(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
   
    <Flex  justifyContent="center" alignItems="center">
      <Button
        
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        // w="max-content"
      
        {...props}>
        {colorMode === 'light' ? <BsMoonStarsFill size='90%'  /> : <BsSun  size='90%'/>}
      </Button>
    </Flex>
  );
}