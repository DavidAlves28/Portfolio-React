import React from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    Center,
    Button,
} from '@chakra-ui/react';

import { FcTimeline, FcIdea, FcHome, FcAbout } from "react-icons/fc";
import { FiMenu } from 'react-icons/fi';
import ColorsMode from '../ColorsMode';
import SimpleFooter from '../Footer';
import { useNavigate } from 'react-router-dom';
import { goToHome, goToProjetos, goToSkills } from "../../Routes/coordinator";

import background from '../../assets/imagem/background.jpg'

export default function SideBarMenu({ children }) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                // w='14vw'
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>

            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} >
                {children}

            </Box>
        </Box>

    );
}

//Conteúdo do SideBar
const SidebarContent = ({ onClose, ...rest }) => {
    const navigate = useNavigate()
    return (
        <Box
            bg={useColorModeValue('whiteAlpha.900', 'blackAlpha.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('blackAlpha.300', 'blackAlpha.900')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="100vh"
            {...rest}>
            <Flex
                flexDir={'column'}
                h="40"
                alignItems="flex-start"
                mx="8"
                justifyContent="center">
                <CloseButton alignSelf={'end'} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                <Text fontSize="3xl" fontFamily="monospace" fontWeight="bold">
                    PortFólio

                </Text>
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    David Alves Costa
                </Text>
            </Flex>
            <NavItem onClick={() => goToHome(navigate)} fontSize='2xl' fontWeight='bold' icon={FcHome}>Home</NavItem>
            <NavItem onClick={() => goToProjetos(navigate)} fontSize='2xl' fontWeight='bold' icon={FcIdea}>Projetos</NavItem>
            <NavItem onClick={() => goToSkills(navigate)} fontSize='2xl' fontWeight='bold' icon={FcTimeline}>Skills</NavItem>
            <NavItem fontSize='2xl' fontWeight='bold' icon={FcAbout}>Sobre</NavItem>


            <Box
                position={['', 'absolute']}
                bottom='30px'>

                <ColorsMode  />
                   
                <SimpleFooter />
            </Box>
        </Box>
    );
};


const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="6"
                mx="7"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="5"
                        fontSize="40"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>

        </Link>
    );
};


const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                PortFólio David Alves
            </Text>

        </Flex>
    );
};