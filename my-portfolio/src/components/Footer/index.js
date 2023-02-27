import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub,FaLinkedin } from 'react-icons/fa';
 
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        target={'_blank'}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.400', 'whiteAlpha.400'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SimpleFooter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900' ,'')}
        color={useColorModeValue('gray.700', 'gray.200')}         
        w='100%'
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 David Alves Costa</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/david-alves-costa-7a2b90145/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton  label={'github'} href={'https://github.com/DavidAlves28'}>
              <FaGithub  />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }