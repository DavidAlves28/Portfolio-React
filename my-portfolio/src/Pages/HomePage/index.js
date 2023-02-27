
import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import Projects from './../../components/Projects/index';
import Perfil from '../../assets/imagem/fotoPerfil.png'
import AboutMe from '../../components/About';
import { FaHtml5 ,FaReact,FaCss3Alt} from 'react-icons/fa'
import { SiJavascript , SiChakraui , SiStyledcomponents} from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'

export default function HomePage() {
    return (
        <>
            <Box boxShadow={'0 5px 10px rgba(0,0,0, 0.6)'} minH={'100%'}>
                <Box bg={'blackAlpha.400'} boxShadow={'0 5px 10px rgba(0,0,0, 0.6)'} minH={'82vh'} w='90vw' m='0 auto'   >
                    <Flex h={'92vh'}
                        justifyContent={'start'}
                        alignItems={'center'}                       
                        my={'2%'}

                    >
                        <Flex flexDir={'column'} justifyContent='center' alignItems={'center'}>
                            <Heading textShadow={'0 5px 10px rgba(0,0,0, 0.6)'} > Desenvolvedor Web Full Stack</Heading>
                            <Flex justifyContent='center' alignItems={'center'}  gap='1%' >
                                <FaReact size={'5%'} />
                                <SiJavascript size={'5%'} />
                                <SiChakraui size={'5%'} />
                                <FaHtml5 size={'4.3%'} />
                                <IoLogoCss3 size={'5%'} />
                                <SiStyledcomponents size={'5%'} />
                            </Flex>
                        <Stack w={'300px'} rounded={'25px'} shadow={'0 5px 15px rgba(0 ,0, 0, 0.2)'} >
                            <Image position={'relative'} src={Perfil} />
                        </Stack>
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
        </>
    )
}