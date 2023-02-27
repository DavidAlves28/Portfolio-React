import React from "react";

import { Box, Button, chakra, Flex, Image, Link, SimpleGrid } from "@chakra-ui/react";
import Pokedex from '../../assets/imagem/pokedexGif.gif'
import Comerce from '../../assets/imagem/inputPesquisa.gif'
import Calculadora from '../../assets/imagem/calculadora.png'
export default function Projects() {
  return (
    <Flex     
      justifyContent="center"
      alignItems="center"
      my={'2%'}
      boxShadow={'0 5px 10px rgba(0,0,0, 0.6)'}
    >
      <Box
        shadow="xl"
        bg={'blackAlpha.400'}
        
        p={'2%'}
      >
        {/* projeto 1 */}
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="wide"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
             Pokedex
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              Nesse projeto é consumido API <Link color={'yellow.200'}>PokeApi</Link>, seguindo design proposto pela Labenu.
              Nele voçe poderá capturar qualquer pokemon e enviar para pokedex, ver detalhes do pokemon e remover da pokedex, podendo
              ver muitos pokemons. Este projeto teve com objeto colocar em pratica conteúdos importantes  em React como:  hooks, custom Hooks,
              GlobalContext, Componentes e Routes.

            </chakra.p>
            <Button
            
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" },transform: 'scale(1.10)' }}             
              color="gray.100"
              as="a"
              target={'_blank'}
              
              href={'https://projeto-react-apis-mu.vercel.app/'}
            >
              Ver Projeto!
            </Button>
          </Box>
          <Box
            w="fit-content"
            h="full"
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
          > 
            <Image shadow={'1px 1px 10px'} src={Pokedex} />
          </Box>
        </SimpleGrid>
        <Flex
                    border='0.7px solid #f0f0f1'
                    margin='10px 20px'
                ></Flex>
        {/* projeto 2  */}
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
            >
              LabeCommerce
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              Projeto com intuito de implementar funcionalidades básicas de umas loja ecommerce,
              podente adicionar e remover items do carrinho , filtrar por nome, valor , tipo  e pesquisar
              por input.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" },transform: 'scale(1.10)' }} 
              color="gray.100"
              as="a"
              target={'_blank'}
              href={'https://projeto-frontend-react.vercel.app/'}
            >
              Ver Projeto!
            </Button>
          </Box>
          <Box
            w="fit-content"
            h="full"
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
          >
            <Image  shadow={'1px 1px 10px'} src={Comerce} />
          </Box>
        </SimpleGrid>
        <Flex
                    border='0.7px solid #f0f0f1'
                    margin='10px 20px'
                ></Flex>
        {/* projeto 3  */}
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="wide"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
            Black ou 21
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
            Black ou 21 , jogo construúido com as regras básicas , utilizando JavaScript, HMTL  e CSS.

            
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" },transform: 'scale(1.10)' }} 
              color="gray.100"
              as="a"
              target={'_blank'}
              href={'http://mundane-love.surge.sh/'}
            >
              Ver Projeto!
            </Button>
          </Box>
          <Box
            w="fit-content"
            h="full"
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
          >
            <Image shadow={'1px 1px 10px'}  src={'https://raw.githubusercontent.com/DavidAlves28/Game_Black-Jack/main/img/Desktop-blackjack.png'} />
          </Box>
        </SimpleGrid>
        <Flex
                    border='0.7px solid #f0f0f1'
                    margin='10px 20px'
                ></Flex>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
            >
              Calculadora em React
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              Calculador com funcionalidades Simples, feita para aprimorar conhecimentos ,  teste com Jest.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" },transform: 'scale(1.10)' }} 
              color="gray.100"
              as="a"
              target={'_blank'}
              href={'https://calculadora-react-f5hr.vercel.app/'}
            >
              Ver Projeto!
            </Button>
          </Box>
          <Box
            w="fit-content"
            h="full"
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
          >
            <Image shadow={'1px 1px 10px'} src={Calculadora} />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
