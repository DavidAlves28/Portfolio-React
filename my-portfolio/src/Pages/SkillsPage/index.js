import { Box, Divider, Flex, Heading, Stack, Text, useColorModeValue, } from "@chakra-ui/react";
import SideBarMenu from "../../components/SideBarMenu";
import backgroundSkill from '../../assets/imagem/background.jpg'
import { Animated } from "react-animated-css";
import { React } from "react";
import {  SiGithub,SiNotion, SiPostman, SiVercel,} from "react-icons/si";

import { BsPatchCheckFill } from "react-icons/bs";
export default function SkillsPage() {

    return (

        <Box minH='100vh'
            w='100vw'
            bgImage={backgroundSkill}
            backgroundRepeat='no-repeat'
            backgroundSize={'cover'}
        >

            <SideBarMenu />
            <Box w={['100vw', '80vw']}>
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
                        shadow={'2xl'}
                        bg={useColorModeValue('#22222', 'gray.900')}
                        color={useColorModeValue('whiteAlpha.800')}
                        h='50vh'
                        w={['', '40%']}>
                        <Heading
                            align='center'
                            size='3xl'
                            p={7}
                            fontWeight={'extrabold'}
                            letterSpacing='2px' >Front-end </Heading>
                        <Animated animationIn="zoomIn" >
                            <Flex
                                h='80%'
                                flexDir={['column', 'row']}
                                justifyContent={'space-around'}
                                alignContent='center'
                                gap={2}
                                p={5}
                                flexWrap={'wrap'} >
                                <Box p={3} >

                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontSize={'20px'} fontWeight='semibold' >  Javascript
                                    </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontSize={'20px'} fontWeight='semibold' > React
                                    </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontSize={'20px'} fontWeight='semibold' >  HTML5
                                    </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontSize={'20px'} fontWeight='semibold' >  Design Sytem
                                    </Text>
                                    </Stack>
                                    <Divider />

                                </Box>
                                <Box p={3}  >
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontSize={'20px'} fontWeight='semibold' >  Styled-Components
                                    </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontSize={'20px'} fontWeight='semibold' >  Typescript
                                    </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontSize={'20px'} fontWeight='semibold' >  Axios
                                    </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontSize={'20px'} fontWeight='semibold' >  CSS3
                                    </Text>
                                    </Stack>
                                    <Divider />

                                </Box>
                            </Flex>

                        </Animated>
                    </Box>
                    {/*Back-end skills  */}
                    <Box
                        rounded={'20px'}
                        mt={10}
                        p={2}
                        shadow={'2xl'}
                        bg={useColorModeValue('#22222', 'gray.900')}
                        color={useColorModeValue('whiteAlpha.800')}
                        h='50vh'
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
                                flexDir={'row'}
                                justifyContent={'space-around'}
                                alignContent='center'
                                gap={2}
                                p={5}
                                flexWrap={'wrap'} >
                                <Box p={3} >

                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size='2vw' />    <Text fontWeight={'semibold'} fontSize='20px'  >  Node   </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontWeight={'semibold'} fontSize='20px'  >  Express  </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontWeight={'semibold'} fontSize='20px'  >  Typescript </Text>
                                    </Stack>
                                    <Divider />

                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontWeight={'semibold'} fontSize='20px'  >  Javascript </Text>
                                    </Stack>
                                    <Divider />
                                </Box>
                                <Box p={3}  >
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontWeight={'semibold'} fontSize='20px'  >  AWS  </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontWeight={'semibold'} fontSize='20px'  >  Mysql  </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontWeight={'semibold'} fontSize='20px'  >  Jest </Text>
                                    </Stack>
                                    <Divider />
                                    <Stack m={2} direction='row' >   <BsPatchCheckFill size={'2vw'} />  <Text fontWeight={'semibold'} fontSize='20px'  >  Knex </Text>
                                    </Stack>
                                    <Divider />
                                </Box>
                            </Flex>
                        </Animated>

                    </Box>

                    <Box
                        rounded={'20px'}
                        m={3}
                        p={2}
                        shadow={'2xl'}
                        bg={useColorModeValue('#22222', 'gray.900')}
                        color={useColorModeValue('whiteAlpha.800')}
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