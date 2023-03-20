import { Box, Button, Flex, Heading, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import SideBarMenu from "../../components/SideBarMenu";
import { SiChakraui, SiGithub, SiHtml5, SiReact, SiVercel, SiStyledcomponents, SiJavascript, SiCss3, SiBootstrap, SiJest, SiTypescript, SiExpress, SiPostman } from "react-icons/si";
import pokedex from '../../assets/imagem/pokedex.png'
import ecommerce from '../../assets/imagem/ecommerceLabenu.png'
import backgroundP from '../../assets/imagem/background.jpg'
import blackjack from '../../assets/imagem/Desktop-blackjack.png'
import calculadora from '../../assets/imagem/calculadora.png'
import housaStore from '../../assets/imagem/houseStore.png'
import emBreve from '../../assets/imagem/Blue Minimalist Linktree Background.jpg'
import { Animated } from "react-animated-css";
import { FaNode } from "react-icons/fa";
export default function ProjectsGrid() {
  return (
    <Box
      minH='100vh'
      w='full'
      bgImage={backgroundP}
    >
      <SideBarMenu />
      {/*////////// projeto1 /////////////////////////////////////// */}
      <Box
        w={['100vw', '80vw']}
        m='0 auto'>
        <Flex
          shadow={'2xl'}
          bg='#fffff'
          flexDir={['column', 'row']}
          w='80%'
          ml={['', '', '320px']}
          minH={'100vh'}
          justifyContent={['center', 'space-evenly']}
          alignItems={['self-start', 'Center']}
          flexWrap='wrap'>
          <Animated
            animationIn='zoomIn'
            animationInDuration={1000}
            animationOut='fadeOut'
            isVisible={true}>
            <Flex
              order={1}
              flexDir={'column'}
              justifyContent={'space-between'}
              maxW={'440px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'dark-lg'}
              rounded={'md'}
              p={6}
              m={[5, 2]}
              minH={['', '48vh']}
              overflow={'hidden'}>
              <Box
                h={'230px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                  src={housaStore}
                />
              </Box>
              <Stack>
                <Flex
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'2xl'}
                  justifyContent='space-around'
                  letterSpacing={1.1}>
                  <SiHtml5 />
                  <SiReact />
                  <SiChakraui />
                  <SiJavascript />
                  <SiGithub />
                  <SiVercel />
                </Flex>


                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontFamily={'body'}>
                  House Store E-commerce

                </Heading>
                <Text color={'gray.500'}>
                  Projeto pessoal para por em pratica conteúdos aprendidos, buscando desenvolver habilidades no React ,JavaScript, Chakra UI e etc. Consumindo API <Link color="green.500" hrel={'https://dummyjson.com/'} target='_blank' >dummyJSON</Link> Ela possui JSON de produtos e muitos outros dados que  será usado em projeto futuros.
                </Text>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="https://house-store-ecommerce.vercel.app/"
                  target="_blank"
                  w='50%'>
                  Ver Projeto</Button>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="https://github.com/DavidAlves28/House-Store-Ecommerce"
                  target="_blank"
                  w='50%'>
                  Repositório</Button>
              </Stack>
            </Flex>
          </Animated>
          {/* projeto 2 */}
          <Animated
            animationIn='zoomIn'
            animationInDuration={1500}
            animationOut='fadeOut'
            isVisible={true}
          >

            <Flex
              flexDir={'column'}
              justifyContent={'space-between'}
              maxW={'440px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'dark-lg'}
              rounded={'md'}
              p={6}
              m={[5, 2]}
              minH={['', '48vh']}
              overflow={'hidden'}>
              <Box
                 h={'230px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}

                pos={'relative'}>
                <Image
                  src={pokedex}
                  layout={'fill'}
                />
              </Box>

              <Flex
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'2xl'}
                justifyContent='space-around'
                letterSpacing={1.1}>
                <SiHtml5 />
                <SiJavascript />
                <SiReact />
                <SiChakraui />
                <SiStyledcomponents />
                <SiGithub />
                <SiVercel />
              </Flex>

              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Pokedex
              </Heading>
              <Text color={'gray.500'}>
                O Projeto React e APIs é um site de pokémons que possui três páginas: Home, Pokedex e Detalhes. Sendo possível adicionar á pokedex e remove-los. O design do projeto foi dado por Figma. Firmando apredizados do React como hook , useContext  , Design system e etc.
              </Text>

              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Button

                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="https://projeto-react-apis-mu.vercel.app/"
                  target="_blank"
                  w='50%'>
                  Ver Projeto</Button>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="https://github.com/DavidAlves28/projeto-react-apis"
                  target="_blank"
                  w='50%'>
                  Repositório</Button>
              </Stack>

            </Flex>
          </Animated>

          {/*////////// projeto2 /////////////////////////////////////// */}
          <Animated
            animationIn='zoomIn'
            animationInDuration={2000}
            animationOut='fadeOut'
            isVisible={true}>

            <Flex
              flexDir={'column'}
              justifyContent={'space-between'}
              maxW={'440px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'dark-lg'}
              rounded={'md'}
              p={6}
              m={[5, 2]}
              minH={['', '48vh']}
              overflow={'hidden'}>
              <Box
                 h={'230px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                
                  src={ecommerce}
                />
              </Box>
              <Stack>
                <Flex
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'2xl'}
                  justifyContent='space-around'
                  letterSpacing={1.1}>
                  <SiHtml5 />
                  <SiJavascript />
                  <SiReact />
                  <SiChakraui />
                  <SiGithub />
                  <SiVercel />
                </Flex>


                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontFamily={'body'}>
                  LabeCommerce
                </Heading>
                <Text color={'gray.500'}>
                  Projeto realizado com conteúdo aprendidos no bootCamp Labenu , com funcionalidades básicas para um ecommerce.
                  Podendo adicionar e remover itens do carrinho , filtrar por nome, preço , categoria e ordenar A-Z ou Z-A  simultaniamente.
                </Text>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="https://projeto-frontend-react.vercel.app/"
                  target="_blank"
                  w='50%'>
                  Ver Projeto</Button>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="https://github.com/DavidAlves28/projeto-frontendreact"
                  target="_blank"
                  w='50%'>
                  Repositório</Button>
              </Stack>
            </Flex>
          </Animated>

          {/*////////// projeto3 /////////////////////////////////////// */}
          <Animated
            animationIn='zoomIn'
            animationInDuration={2500}
            animationOut='fadeOut'
            isVisible={true}>
            <Flex
              flexDir={'column'}
              justifyContent={'space-between'}
              maxW={'440px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'dark-lg'}
              rounded={'md'}
              p={6}
              m={[5, 2]}
              minH={['', '48vh']}
              overflow={'hidden'}>
              <Box
                 h={'230px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                  src={calculadora}
                />
              </Box>
              <Stack>
                <Flex
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'2xl'}
                  justifyContent='space-around'
                  letterSpacing={1.1}>
                  <SiHtml5 />
                  <SiJavascript />
                  <SiReact />
                  <SiBootstrap />
                  <SiJest />
                  <SiGithub />
                  <SiVercel />

                </Flex>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontFamily={'body'}>
                  Calculadora
                </Heading>
                <Text color={'gray.500'}>
                  Projeto com foco em treinar halibadades com React ,BootStrap , Jest ,Hooks e etc. Contendo funcionalidades simples como somar, subtrair , multiplicar e dividir.
                </Text>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="https://calculadora-react-f5hr.vercel.app/"
                  target="_blank"
                  w='50%'>
                  Ver Projeto</Button>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="https://github.com/DavidAlves28/Calculadora-React"
                  target="_blank"
                  w='50%'>
                  Repositório</Button>
              </Stack>
            </Flex>
          </Animated>
          {/*////////// projeto5 /////////////////////////////////////// */}
          <Animated
            animationIn='zoomIn'
            animationInDuration={3000}
            animationOut='fadeOut'
            isVisible={true}>
            <Flex
              flexDir={'column'}
              justifyContent={'space-between'}
              maxW={'440px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'dark-lg'}
              rounded={'md'}
              p={6}
              m={[5, 2]}
              minH={['', '48vh']}
              overflow={'hidden'}>
              <Box
                 h={'230px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                w='100%'
                  h='100%'
                  src={blackjack}
                />
              </Box>
              <Stack>
                <Flex
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'2xl'}
                  justifyContent='space-around'
                  letterSpacing={1.1}>
                  <SiHtml5 />
                  <SiJavascript />
                  <SiCss3 />
                  <SiGithub />

                </Flex>


                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontFamily={'body'}>
                  Black-Jack ou 21

                </Heading>
                <Text color={'gray.500'}>
                  Projeto com foco em treinar halibadades com Javascript, CSS , HTML. Aparentimente simples, mas com lógica bem interessante para desenvolver. Contém regras básicas do jogo, o jogador pode comprar cartas e/ou desistir jogando contra a máquina.
                </Text>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="http://mundane-love.surge.sh"
                  target="_blank"
                  w='50%'>
                  Ver Projeto</Button>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="https://github.com/DavidAlves28/Game_Black-Jack"
                  target="_blank"
                  w='50%'>
                  Repositório</Button>
              </Stack>
            </Flex>
          </Animated>
          {/*////////// projeto6 /////////////////////////////////////// */}
          <Animated
            animationIn='zoomIn'
            animationInDuration={3500}
            animationOut='fadeOut'
            isVisible={true}>
            <Flex
              order={1}
              flexDir={'column'}
              justifyContent={'space-between'}
              maxW={'440px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'dark-lg'}
              rounded={'md'}
              p={6}
              m={[5, 2]}
              minH={['', '48vh']}
              overflow={'hidden'}>
              <Box
                 h={'230px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image 
                w='100%'
                  h='100%'
                  src={emBreve}
                />
              </Box>
              <Stack>
                <Flex
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'2xl'}
                  justifyContent='space-around'
                  letterSpacing={1.1}>
                  <SiExpress />
                  <SiTypescript />
                  <FaNode />
                  <SiJavascript />
                  <SiPostman />
                  <SiGithub />
                  <SiVercel />

                </Flex>


                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontFamily={'body'}>
                  Back-end APIs

                </Heading>
                <Text color={'gray.500'}>
                  Projeto em desenvolvimento  no BootCamp Labenu. É o primeiro projeto do back-end, onde praticamos toda a base de criação de uma API vinculada a um banco de dados real.
                </Text>
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="#"
                  // target="_blank"
                  w='50%'>
                  Em breve</Button>
                <Button
                  fontWeight={'bold'}
                  as="a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'dark-lg',
                  }}
                  colorScheme={'whatsapp'}
                  href="#"
                  // target="_blank"
                  w='50%'>
                  Em breve</Button>
              </Stack>
            </Flex>
          </Animated>
        </Flex>
      </Box>


    </Box>
  )
}