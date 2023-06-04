import {
  Box,
  chakra,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={12}
      h={12}
      target={"_blank"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.400", "whiteAlpha.400"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SimpleFooter() {
  return (
    <Box w="100%">
      <Flex
        letterSpacing={2}
        w="100%"
        py={2}
        color='#fff'
        shadow={"dark-lg"}
        h={["", "7vh"]}
        direction={"row"}
        spacing={4}
        justify={{ base: "space-evenly", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/david-dev/full/"}
          >
            <FaLinkedin size="90%" />
          </SocialButton>
          <SocialButton
            label={"github"}
            href={"https://github.com/DavidAlves28"}
          >
            <FaGithub size="90%" />
          </SocialButton>
        </Stack>
        <Text fontSize={"lg"} fontWeight="bold">
          2023 David Alves Costa
        </Text>
      </Flex>
    </Box>
  );
}
