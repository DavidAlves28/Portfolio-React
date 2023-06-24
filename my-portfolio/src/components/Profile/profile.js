import React from "react";
import { Box, Flex, GridItem, Image, Stack } from "@chakra-ui/react";
import Type from "../typeWriter/index.";
import devDark from "../../assets/imagem/developer-dark.svg";
import { motion } from "framer-motion";

export default function Profile() {
  const MotionFlex = motion(Flex);

  return (
    <>
      <MotionFlex
        py={3}
        px={3}
        borderRadius="md"
        w="full"
        borderLeft="2px"
        borderColor="teal.500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transitionDuration={'1.2s'}       
 
      >
        <Flex
          w={["90vw", "80vw", "80vw"]}
          h="90vh"
          m="0 auto"
          flexDir={["column", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack w={{ base: "70%", md: "100%" }} m={["0 auto", ""]}>
            <Image alt="imagem_perfil" src={devDark} />
          </Stack>
          <GridItem
            bgGradient="linear(to-r,#D6E4FF, #44BDFF)"
            bgClip="text"
            fontSize={["3xl", "2xl", "2xl", "5xl"]}
            fontWeight="semibold"
            w="100%"
            m={["10px", "40px"]}
          >
            <Type />
          </GridItem>
        </Flex>
      </MotionFlex>
    </>
  );
}
