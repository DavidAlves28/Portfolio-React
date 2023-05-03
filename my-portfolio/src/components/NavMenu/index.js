import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import perfil from "../../assets/imagem/fotoPerfil2.png";
import cv_david from "../../assets/CV_ DAVID_ ALVES_ COSTA.pdf";
import { FiDownload } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Links = ["Habilidades", "Projetos", "Sobre"];

export default function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        h={{ base: "100%", sm: "50%", md: "20%" }}
        fontSize="20px"
        bg="#02024C"
        p={4}
      >
        <Flex
          h="full"
          w="full"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
              justify="center"
            >
              {Links.map((link) => (
                <AnchorLink key={link} href={`#${link}`}>
                  <Button
                    w="100%"
                    _hover={{
                      backgroundPosition: "100%",
                      backgroundColor: "#2F2FA5",
                      color: "#38C0FF",
                    }}
                    letterSpacing={2}
                    fontWeight="bold"
                    h="10"
                    color="#fff"
                    border=" 3px solid #2F2FA5"
                    backgroundImage="linear-gradient(45deg, #2F2FA5 50%, transparent 50%)"
                    backgroundSize={{ base: "80em", sm: "80em", md: "500px" }}
                    backgroundRepeat="no-repeat"
                    backgroundPosition="0%"
                    transition="background 500ms ease-in-out"
                    rounded="lg"
                    fontSize="2xl"
                  >
                    {link}
                  </Button>
                </AnchorLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={5}>
            <Menu>
              <Button
                w="min-content"
                _hover={{
                  backgroundColor: "#2F2FA5",
                  backgroundPosition: "100%",
                  color: "#38C0FF",
                }}
                fontWeight="bold"
                as="a"
                h="10"
                color="#fff"
                border=" 3px solid #2F2FA5"
                backgroundImage="linear-gradient(45deg, #2F2FA5 50%, transparent 50%)"
                backgroundSize={{ base: "80em", sm: "80em", md: "500px" }}
                backgroundRepeat="no-repeat"
                backgroundPosition="0%"
                transition="background 500ms ease-in-out"
                rounded="lg"
                fontSize="2xl"
                download={cv_david}
                href={cv_david}
              >
                Download CV <FiDownload />
              </Button>

              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                minW={0}
              >
                <Avatar size={"sm"} src={perfil} />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={5} mt="10px" display={{ md: "none" }}>
            <Stack as={"nav"} spacing={2}>
              {Links.map((link) => (
                <AnchorLink key={link} href={`#${link}`}>
                  <Button
                    w="100%"
                    _hover={{
                      backgroundPosition: "100%",
                      color: "##9494F0",
                    }}
                    fontWeight="bold"
                    letterSpacing={2}
                    h="10"
                    color="#fff"
                    border=" 3px solid #2F2FA5"
                    backgroundImage="linear-gradient(45deg, #2F2FA5 50%, transparent 50%)"
                    backgroundSize={{ base: "80em", sm: "80em", md: "500px" }}
                    backgroundRepeat="no-repeat"
                    backgroundPosition="0%"
                    transition="background 500ms ease-in-out"
                    rounded="lg"
                    fontSize="2xl"
                  >
                    {link}
                  </Button>
                </AnchorLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
