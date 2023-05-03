import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import { BsPatchCheckFill } from "react-icons/bs";

export default function Skills() {
  const front = [
    "Javascript",
    "Typescript",
    "React",
    "Hooks",
    "REST API",
    "Redux",
    "Axios",
    "HTML5",
    "CSS3",
    "Styled-components",
    "Design System",
  ];
  const back = [
    "Node",
    "Typescript",
    "Express",
    "Knex",
    "Mysql",
    "SQL",
    "AWS",
    "Firebase",
    "Jest",
  ];
  const ferramentas = [
    "GitHub",
    "Git",
    "Postman",
    "Vercel",
    "Figma",
    "Justinmind",
  ];
  return (
    <>
      <Stack
        id="Habilidades"
        justify={"center"}
        align={"center"}
        mt="40px"
        p="12px"
      >
        <Text
          bgColor="#44BDFF"
          fontWeight="bold"
          bgClip="text"
          ml="10px"
          fontSize="4xl"
        >
          Habilidades
        </Text>
      </Stack>
      <Flex
        w={["100%", "100%", "62%"]}
        m="0 auto"
        justifyContent={"center"}
        p={2}
        roundedBottomLeft={"10% "}
        roundedTopRight={"10%"}
        roundedBottomRight={"16px"}
        roundedTopLeft={"16px"}
        shadow={"dark-lg"}
        minH="40vh"
        flexDir={["column", "column", "row"]}
      >
        <Flex
          flexDir={["column", "column", "row"]}
          flexWrap={"wrap"}
          gap={3}
          minH={["80vw", "15vh"]}
          w="100%"
          justifyContent={["center", "space-beetwen"]}
          alignItems={["center", "self-start"]}
        >
          <Box>
            <Text
              bgColor="#44BDFF"
              fontWeight="bold"
              bgClip="text"
              ml="10px"
              fontSize="4xl"
            >
              Front-end
            </Text>
            {front.map((skill, index) => {
              return (
                <Stack
                  key={index}
                  bg="#2222"
                  borderRight={"2px solid #fff"}
                  rounded={"base"}
                  direction={"row"}
                  w="270px"
                  m={1}
                  _hover={{
                    ml: "-2px",
                    cursor: "pointer",
                  }}
                >
                  <BsPatchCheckFill
                    align="center"
                    color="#44BDFF"
                    size={"25px"}
                  />
                  <Text
                    w="100%"
                    bgGradient="linear(to-l, #3366FF, #D9FBFF)"
                    bgClip="text"
                    letterSpacing={"3px"}
                    fontSize={"18px"}
                    textAlign={"left"}
                    fontWeight="bold"
                  >
                    {skill}
                  </Text>
                </Stack>
              );
            })}
          </Box>
          <Box>
            <Text
              bgColor="#44BDFF"
              fontWeight="bold"
              bgClip="text"
              ml="10px"
              fontSize="4xl"
            >
              Back-end
            </Text>
            {back.map((skill, index) => {
              return (
                <Stack
                  key={index}
                  bg="#2222"
                  borderRight={"2px solid #fff"}
                  rounded={"base"}
                  direction={"row"}
                  w="270px"
                  m={1}
                  _hover={{
                    ml: "-2px",
                    cursor: "pointer",
                  }}
                >
                  <BsPatchCheckFill
                    align="center"
                    color="#44BDFF"
                    size={"25px"}
                  />
                  <Text
                    w="100%"
                    bgGradient="linear(to-l, #3366FF, #D9FBFF)"
                    bgClip="text"
                    letterSpacing={"3px"}
                    fontSize={"18px"}
                    textAlign={"left"}
                    fontWeight="bold"
                  >
                    {skill}
                  </Text>
                </Stack>
              );
            })}
          </Box>
          <Box>
            <Text
              bgColor="#44BDFF"
              fontWeight="bold"
              bgClip="text"
              ml="10px"
              fontSize="4xl"
            >
              Ferramentas
            </Text>
            {ferramentas.map((skill, index) => {
              return (
                <Stack
                  key={index}
                  bg="#2222"
                  borderRight={"2px solid #fff"}
                  rounded={"base"}
                  direction={"row"}
                  w="270px"
                  m={1}
                  _hover={{
                    ml: "-2px",
                    cursor: "pointer",
                  }}
                >
                  <BsPatchCheckFill
                    align="center"
                    color="#44BDFF"
                    size={"25px"}
                  />
                  <Text
                    w="100%"
                    bgGradient="linear(to-l, #3366FF, #D9FBFF)"
                    bgClip="text"
                    letterSpacing={"3px"}
                    fontSize={"18px"}
                    textAlign={"left"}
                    fontWeight="bold"
                  >
                    {skill}
                  </Text>
                </Stack>
              );
            })}
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
