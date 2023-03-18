
import { Box, Center, Divider, Flex, Heading, Image, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import Perfil from '../../assets/imagem/fotoPerfil2.png';
import Type from '../../components/typeWriter/index.';
import PillPity from 'pill-pity';
import SideBarMenu from '../../components/SideBarMenu';
import { Animated } from 'react-animated-css'

export default function HomePage() {
    // color mode da textura background
    const patterFill = useColorModeValue("black", "blackAlpha.900");

    return (


        <Box

            minH={'100vh'}>
            <SideBarMenu />
            {/* Textura background: */}
            <PillPity
                position={'absolute'}
                zIndex={-1}
                pattern='circuit-board'
                h='full'
                as={Flex}
                align="center"
                justify="center"
                fontWeight="extrabold"
                boxSize="100%"
                patternFill={patterFill}
                bgColor="blackAlpha.400"
                patternOpacity={0.3}
            />

            <Flex
                w='86vw'
                m=' 0 auto'
                h={'90vh'}
                flexDir={['', 'column']}
                justifyContent={'center'}
                alignItems={'center'}>
                <Flex
                    flexDir={'column'}
                    w={'full'}
                    h={"70vh"}
                    justifyContent='center'
                    alignItems={'center'}>

                    <Flex
                        flexDir={['column', 'row']}
                        h={['80vh', '']}
                        justifyContent='center'
                        alignItems={'center'}
                        w='70vw'>

                        <Heading size={'2xl'} w={['100%', '50%']}
                            textShadow={'0 5px 15px  rgba(0,0,0, 0.6)'} >
                            <Type />
                        </Heading>
                        <Animated
                            animationIn='fadeInRight'
                            animationInDuration={2000}
                            animationOut='fadeOut'
                            isVisible={true}
                        >
                            <Box
                                rounded={'50%'}
                                w='min-content'
                                shadow={'0 5px 20px 5px rgba(0,0,0, 0.6)'}>
                                <Stack w={['250px', '400px']}  >
                                    <Image
                                        bg={'blackAlpha.600'}
                                        rounded='50%'
                                        position={'relative'}
                                        src={Perfil} />
                                </Stack>
                            </Box>
                          
                        </Animated>
                    </Flex>
                </Flex>
            </Flex>
        </Box>








    )
}