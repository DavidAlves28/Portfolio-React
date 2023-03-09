
import { Box, Center, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import Projects from './../../components/Projects/index';
import Perfil from '../../assets/imagem/fotoPerfil2.png'
import AboutMe from '../../components/About';

import Skills from '../../components/Skills';
import CaptionCarousel from '../../components/testes';

export default function HomePage() {
    return (
        <>
            <Box boxShadow={'0 5px 10px rgba(0,0,0, 0.6)'} h={'100%'} m='0 auto' w={'90vw'}>
                <Box rounded={'10px'} bg={'blackAlpha.400'} boxShadow={'0 5px 10px rgba(0,0,0, 0.6)'} h={'full'} w='90vw' m='0 auto'   >
                    <Flex h={'full'}
                        justifyContent={'start'}
                        alignItems={'center'}
                        my={'2%'}

                    >
                        <Flex w={'full'} h={"full"} flexDir={'column'} justifyContent='center' alignItems={'center'}>

                            <Heading textShadow={'0 5px 10px rgba(0,0,0, 0.6)'} > Desenvolvedor Web Full Stack</Heading>
                            <Flex justifyContent='center' alignItems={'center'} gap='1%' >
                                {/* <FaReact size={'5%'} />
                                <SiJavascript size={'5%'} />
                                <SiChakraui size={'5%'} />
                                <FaHtml5 size={'4.3%'} />
                                <IoLogoCss3 size={'5%'} />
                                <SiStyledcomponents size={'5%'} /> */}
                            </Flex>
                            <Stack w={'300px'} rounded={'25px'} shadow={'0 5px 15px rgba(0 ,0, 0, 0.2)'} >
                                <Image position={'relative'} src={Perfil} />
                            </Stack>
                            <Box w='75vw' 
                                m={'0 auto'}>
                               
                                <Skills />
                            </Box>
                        </Flex>

                    </Flex>
                    {/* <Box
                           w={'min-content'}
                            zIndex={'-1'}
                            bg={'cadetblue'}                            
                            transform={'rotate(20deg)'}
                            m='0 auto'
                            left='400px'
                            rounded={'8px'}
                            boxShadow={'0 5px 15px rgba(0 ,0, 0, 0.2)'}
                        > 
                        HTML
                        </Box> */}
                </Box>
                <Flex
                    border='0.7px solid #f0f0f1'
                    margin='10px 20px'
                ></Flex>
                {/* <Box  w='90vw'
                    m={'0 auto'}>
                   <Center><Heading>Habilidades</Heading></Center> 
                  <Skills/>      
                </Box> */}
                <Box w='90vw'
                    m={'0 auto'}>
                    <Projects />
                </Box>
                <Flex
                    border='0.7px solid #f0f0f1'
                    margin='10px 20px'
                ></Flex>
                <Box w='90vw' mb='5%'
                    m={'0 auto'}>
                    <AboutMe />
                </Box>
                <Flex
                    border='0.7px solid #f0f0f1'
                    margin='10px 20px'
                ></Flex>

            </Box>
            <Box w='75vw' 
                                m={'0 auto'}>
                               
                                <CaptionCarousel/>
                            </Box>
        </>
    )
}