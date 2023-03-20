import {
  Box,
  Button,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cv_david from '../../assets/CV_David_ALVES_COSTA.pdf'

import { FiDownload } from 'react-icons/fi';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={12}
      h={12}
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
    <Box w='100%'
    >
      <Container
        as={Stack}
        w='100%'
        py={2}
        h={['','25vh']}
        direction={{ base: 'column', md: 'column' }}
        spacing={4}
        justify={{ base: 'end', md: 'space-around' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'column'} spacing={6}>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/david-alves-costa-7a2b90145/'}>
            <FaLinkedin size='90%' />
          </SocialButton>
          <SocialButton label={'github'} href={'https://github.com/DavidAlves28'}>
            <FaGithub size='90%' />
          </SocialButton>
        </Stack>
        <Button
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'dark-lg',
          }}
          colorScheme={'whatsapp'}
          fontWeight='bold'
          as='a'
          h='10'
          rounded='lg'
          fontSize='2xl'
          download={cv_david}
          href={cv_david}
        >
          Download CV  <FiDownload /></Button>
        <Text  fontSize={'lg'} fontWeight='bold' >© 2023 David Alves Costa</Text>
      </Container>
    </Box>
  );
}