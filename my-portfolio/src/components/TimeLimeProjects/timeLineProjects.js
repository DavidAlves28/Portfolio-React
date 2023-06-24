import React, { useState } from "react";
import {
  Link,
  Text,    
  Image,
  Grid,
  VStack, 

  Select,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { projetos } from "../../data/projetos";

// icons para tecnologias utilizadas

// Card do projeto
const TimeLineProjects = () => {
  const MotionFlex = motion(Flex);
 
  const [stack, setStack] = useState("")
  const handleStack =(e)=>{
  setStack(e.target.value);
  }
 
  return (
    <>
      <VStack
        fontSize="50px"
        bgGradient="linear(to-r, #38BAED, #114F89)"
        bgClip="text"
      >
        <h1>Projetos</h1>
      </VStack>
      <Stack justify={"center"} align="center">
        <Select onChange={handleStack}   p="3" textAlign={"center"} gap="10px" w={"300px"}>         
          <option value={""}>Todos </option>
          <option value={"Back-End"}>Back-end</option>
          <option value={"Front-End"}>Front-end</option>
          <option value={"Full-Stack"}>Full-stack</option>
        </Select>
      </Stack>
      <MotionFlex
        py={3}
        px={3}
        borderRadius="md"
        w="full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transitionDuration={"1.2s"}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(3,1fr)" }}
          id="Projetos"
          flexWrap={"wrap"}
          m="0 auto"
          p={{ base: 2, sm: 10 }}
        >
          {projetos.filter((project)=>{
          return project === "" ? project :  project.category.includes(stack)
          
          })                  
          .map((project, index) => (
            <Flex key={index} mb="10px">
              <Card {...project} />
            </Flex>
          ))}
        </Grid>
      </MotionFlex>
    </>
  );
};

const Card = ({ title, link, image, description, icon, date }) => {
  return (
    <>
      <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
        <Link
          letterSpacing={1}
          href={link}
          target="_blank"
          fontSize="2xl"
          textDecoration={"underline"}
          lineHeight={1.2}
          fontWeight="bold"
          textAlign={"left"}
          w="90%"
          bgGradient="linear(to-r, #38BAED, #114F89)"
          bgClip="text"
          _hover={{ color: "teal.400" }}
        >
          {title}
          <Text fontSize="sm">{date}</Text>
        </Link>
        <Stack w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}>
        
          <Stack justify={"left"}>
            <Image rounded={"10px"} sizes="90%" alt="imagemDoProjeto" src={image} />
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

export default TimeLineProjects;
