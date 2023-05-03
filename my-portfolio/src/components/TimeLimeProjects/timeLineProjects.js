import React from "react";
import {
  Box,
  chakra,
  Link,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
// icons para tecnologias utilizadas
import {
  SiChakraui,
  SiGithub,
  SiHtml5,
  SiReact,
  SiVercel,
  SiStyledcomponents,
  SiJavascript,
  SiCss3,
  SiBootstrap,
  SiJest,
  SiTypescript,
  SiExpress,
  SiPostman,
  SiSqlite,
} from "react-icons/si";
import { BsBookmarkCheckFill } from "react-icons/bs";
import pokedex from "../../assets/imagem/pokedex.png";
import ecommerce from "../../assets/imagem/ecommerceLabenu.png";
import blackjack from "../../assets/imagem/Desktop-blackjack.png";
import calculadora from "../../assets/imagem/calculadora.png";
import houseStore from "../../assets/imagem/houseStore.png";
import emBreve from "../../assets/imagem/Blue Minimalist Linktree Background.jpg";

const projects = [
  {
    id: 1,
    link: "https://house-store-ecommerce.vercel.app/",
    image: houseStore,
    title: "House Store E-commerce",
    icon: [SiChakraui, SiReact, SiGithub, SiHtml5, SiVercel],
    description:
      "Projeto pessoal para por em pratica conteúdos aprendidos, buscando desenvolver habilidades no React ,JavaScript, Chakra UI e etc. Consumindo API dummyJSON Ela possui JSON de produtos e muitos outros dados que  será usado em projeto futuros.",
    date: "Fevereiro, 2023",
  },
  {
    id: 2,
    link: "https://projeto-react-apis-mu.vercel.app/",
    image: pokedex,
    title: "Pokedex",
    icon: [
      SiReact,
      SiJavascript,
      SiStyledcomponents,
      SiGithub,
      SiHtml5,
      SiVercel,
    ],
    description: `O Projeto React e APIs é um site de pokémons que possui três páginas: Home, Pokedex e Detalhes. Sendo possível adicionar á pokedex e remove-los. O design do projeto foi dado por Figma. Firmando apredizados do React como hook , useContext  , Design system e etc.`,
    date: "Janeiro, 2023",
  },
  {
    id: 3,
    link: "https://projeto-frontend-react.vercel.app/",
    image: ecommerce,
    title: "LabeCommerce",
    icon: [SiReact, SiJavascript, SiChakraui, SiGithub, SiHtml5, SiVercel],
    description: `Projeto realizado com conteúdo aprendidos no bootCamp Labenu , com funcionalidades básicas para um ecommerce.
    Podendo adicionar e remover itens do carrinho , filtrar por nome, preço , categoria e ordenar A-Z ou Z-A  simultaniamente.`,
    date: "Janeiro, 2023",
  },

  {
    id: 4,
    link: "https://calculadora-react-f5hr.vercel.app/",
    image: calculadora,
    title: "Calculadora ",
    icon: [
      SiReact,
      SiJavascript,
      SiBootstrap,
      SiJest,
      SiGithub,
      SiHtml5,
      SiVercel,
    ],
    description: `Projeto com foco em treinar halibadades com React ,BootStrap , Jest ,Hooks e etc. Contendo funcionalidades simples como somar, subtrair , multiplicar e dividir.`,
    date: "Novembro, 2022",
  },
  {
    id: 5,
    link: "http://mundane-love.surge.sh",
    image: blackjack,
    title: "Black-jack ou 21",
    icon: [SiJavascript, SiHtml5, SiCss3],
    description: ` Projeto com foco em treinar halibadades com Javascript, CSS , HTML. Aparentimente simples, mas com lógica bem interessante para desenvolver. Contém regras básicas do jogo, o jogador pode comprar cartas e/ou desistir jogando contra a máquina.`,
    date: "Novembro, 2022",
  },
  {
    id: 6,
    link: "#",
    image: emBreve,
    title: "LabeCommerce back-end",
    icon: [SiTypescript, SiExpress, SiPostman, SiSqlite],
    description: `Projeto em desenvolvimento  no BootCamp Labenu. É o primeiro projeto do back-end, onde praticamos toda a base de criação de uma API vinculada a um banco de dados real`,
    date: "Abril, 2023",
  },
];
// Card do projeto
const TimeLineProjects = () => {
  return (
    <Box
      id="Projetos"
      w={["100%", "100%", "60%"]}
      m="0 auto"
      p={{ base: 2, sm: 10 }}
    >
      <Stack justify={"center"} align={"center"} p="12px">
        <Text
          bgColor="#44BDFF"
          fontWeight="bold"
          bgClip="text"
          ml="10px"
          fontSize="4xl"
        >
          Projetos
        </Text>
      </Stack>
      {projects.map((project, index) => (
        <Flex key={index} mb="10px">
          <LineWithDot />
          <Card {...project} />
        </Flex>
      ))}
    </Box>
  );
};

const Card = ({ title, link, image, description, icon, date }) => {
  return (
    <>
      <HStack
        p={{ base: 3, sm: 6 }}
        w={{ base: "100%", sm: "110%" }}
        ml="-10px"
        mb="10px"
        bg="#102693"
        shadow="dark-lg"
        spacing={5}
        rounded="lg"
        alignItems="center"
        pos="relative"
        _before={{
          content: `""`,
          w: "0",
          h: "0",
          borderColor: `transparent ${useColorModeValue(
            "#edf2f6",
            "#1a202c"
          )} transparent`,
          borderStyle: "solid",
          borderWidth: "15px 15px 15px 0",
          position: "absolute",
          left: "-15px",
          display: "block",
        }}
      >
        <Flex flexDir={["column", "row"]}>
          <VStack spacing={2} mb={5} textAlign="left">
            <Link
              letterSpacing={1}
              href={link}
              target="_blank"
              _hover={{ color: "teal.400" }}
              fontSize="2xl"
              textDecoration={"underline"}
              lineHeight={1.2}
              fontWeight="bold"
              w="90%"
              bgGradient="linear(to-r, #38BAED, #114F89)"
              bgClip="text"
            >
              {title}
              <Text fontSize="sm">{date}</Text>
            </Link>
            <Text
              lineHeight={1.7}
              color="#ffff"
              fontSize="md"
              w="90%"
              letterSpacing={1}
              textAlign={"justify"}
            >
              {description}
            </Text>
          </VStack>
          <Stack w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}>
            <HStack m="0 auto" spacing={2} mb={1}>
              {icon.map((ico) => (
                <Icon key={ico} as={ico} w={8} h={10} color="#6690FF" />
              ))}
            </HStack>
            <Image rounded={"10px"} alt="imagemDoProjeto" src={image} />
          </Stack>
        </Flex>
      </HStack>
    </>
  );
};
// linha vertical com ponto
const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="2px solid"
        borderColor="#222"
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
        >
          <BsBookmarkCheckFill color="#44BDFF" size="25px" />
        </Box>
      </Box>
    </Flex>
  );
};

export default TimeLineProjects;
