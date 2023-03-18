import { Box, Flex, Heading, Image, Text, useColorModeValue, } from "@chakra-ui/react";
import SideBarMenu from "../../components/SideBarMenu";
import backgroundSkill from '../../assets/imagem/background.jpg'
import vscode from '../../assets/icons/icons8-visual-studio-100.png'

import { Animated } from "react-animated-css";
import { React } from "react";
import { SiBootstrap, SiChakraui, SiCss3, SiExpress, SiGithub, SiHtml5, SiJavascript, SiJest, SiMysql, SiNotion, SiPostman, SiReact, SiStyledcomponents, SiTypescript, SiVercel, SiVsco } from "react-icons/si";

import { FaAws, FaNode, } from "react-icons/fa";
export default function SkillsPage() {

    return (

        <Box minH='100vh'
            w='100vw'
            bgImage={backgroundSkill}
            backgroundRepeat='no-repeat'
            backgroundSize={'cover'}
        >

            <SideBarMenu />
            <Box w={['100vw', '80vw']}

            >
                <Flex
                    shadow={'dark-lg'}
                    flexDir={['column', 'row']}
                    w='100%'
                    ml={['', '5vw', '320px']}
                    minH={'100vh'}
                    justifyContent={['center', 'space-evenly']}
                    alignItems={['center', 'flex-start']}
                    flexWrap='wrap'>
                    {/*front-end skills  */}
                    <Box
                        rounded={'20px'}
                        mt={10}
                        p={2}
                        shadow={'dark-lg'}
                        bg={useColorModeValue('#22222', 'gray.900')}
                        color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
                        minH='60vh'
                        w={['', '40%']}>
                        <Heading
                            align='center'
                            size='3xl'
                            p={7}
                            fontWeight={'extrabold'}
                            letterSpacing='2px' >Front-end </Heading>

                        <Animated animationIn="zoomIn" >
                            <Flex
                                justifyContent={'space-evenly'}
                                alignContent='center'
                                gap={2}
                                flexWrap={'wrap'} >
                                <SiReact size='25%' />
                                <SiJavascript size="25%" />
                                <SiHtml5 size="25%" />
                                <SiCss3 size="25%" />
                                <SiChakraui size="25%" />
                                <SiStyledcomponents size="25%" />
                                <SiTypescript size="25%" />
                                <SiBootstrap size="25%" />
                            </Flex>
                        </Animated>
                    </Box>
                    {/*Back-end skills  */}
                    <Box
                        rounded={'20px'}
                        mt={10}
                        p={2}
                        shadow={'dark-lg'}
                        bg={useColorModeValue('#22222', 'gray.900')}
                        color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
                        minH='60vh'
                        w={['', '40%']}>
                        <Heading
                            p={3}
                            align='center'
                            size='3xl'
                            fontWeight={'extrabold'}
                            letterSpacing='2px' >Back-End </Heading>
                        <Text fontSize='2xl' fontWeight={'bold'} align={'center'} > Em aprendizado! </Text>

                        <Animated animationIn="zoomIn" >
                            <Flex
                                justifyContent={'space-evenly'}
                                alignItems='center'
                                gap={2}
                                flexWrap={'wrap'} >
                                <FaNode size="25%" />
                                <SiExpress size='25%' />
                                <SiTypescript size='25%' />
                                <SiJavascript size="25%" />
                                <SiMysql size="25%" />
                                <FaAws size="25%" />
                                <SiJest size='25%' />
                            </Flex>
                        </Animated>

                    </Box>

                    <Box
                        rounded={'20px'}
                        m={3}
                        p={2}
                        shadow={'dark-lg'}
                        bg={useColorModeValue('#22222', 'gray.900')}
                        color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
                        h='28vh'
                        w={['', '88%']}>
                        <Heading
                            align='center'
                            size='3xl'                            
                            fontWeight={'extrabold'}
                            p={3}
                            letterSpacing='2px' > Ferramentas</Heading>

                        <Animated animationIn="bounceIn" >
                            <Flex
                                justifyContent={'space-around'}
                                alignItems='center'
                                gap={2}
                                flexWrap={'wrap'} >
                                <Image   src={vscode} alt='iconVscode' />
                                <SiGithub size={"10%"} />

                                <SiPostman size="10%" />
                                <SiNotion size="10%" />
                                <SiVercel size="10%" />


                            </Flex>
                        </Animated>

                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}