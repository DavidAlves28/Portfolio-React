import { Animated } from "react-animated-css";

import { Box, Divider, Flex, Image, Stack } from "@chakra-ui/react";
import Type from "../typeWriter/index.";
import bg from "../../assets/imagem/sapiens.svg";
import React from 'react'

//

export default function Profile() {
  return (
    <Stack
      justify={"center"}
      align={['end','']}
      h={["", "90vh"]}
      w={["100%", "100%", "80%"]}
      m="0 auto"
    >
     
        <Flex
          mt="10px"
          m="0 auto "
          h={["85vh", "90vh"]}
          w={{ base: "100%", sm: "80%", md: "20em", lg: "80%" }}
          rounded="16px"
          fontSize={"30px"}
          flexDir={["column", "column", "row"]}
          justifyContent={["center", "center"]}
          alignItems={["flex-start", "center"]}
        >
          <Stack w="100%">
            <Image alt="imagem_perfil" src={bg} />
          </Stack>

          <Stack
            bgGradient="linear(to-r,#D6E4FF, #44BDFF)"
            bgClip="text"
            fontSize={["3xl", "2xl", "2xl", "5xl"]}
            fontWeight="semibold"
            w="100%"
            m={["10px", "40px"]}
          >
            <Type />
          </Stack>
        </Flex>
      
    </Stack>
  );
}
