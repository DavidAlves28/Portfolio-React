import { Box, Image, Stack, Text } from "@chakra-ui/react";
import Perfil from "../../assets/imagem/fotoPerfil2.png";

export default function Sobre() {
  return (
    <Box
      id="Sobre"
      fontFamily={"heading"}
      p={10}
      m="0 auto"
      w={["100vw", "", "60vw"]}
    >
  
      <Stack
        direction={["column", "row"]}
        align="center"
        justify={"space-between"}
    
        p={"2%"}
        mb={"20px"}
      >
        <Text fontSize={"35"} color="#B4F2FF" as={"b"}>
          DAVID ALVES COSTA
        </Text>
        <Image
          borderLeft={"2px solid white"}
          borderTop={"2px solid white"}
          roundedBottomLeft={"30% "}
          roundedTopRight={"30%"}
          roundedBottomRight={"16px"}
          roundedTopLeft={"16px"}
          shadow={"dark-lg"}
          w={["40%", "25%"]}
          src={Perfil}
        />
      </Stack>
      <Box bg="#1939B7" shadow={"dark-lg"}  rounded={"md"} p={10}>
        <Text
          color="#B4F2FF"
          fontWeight={"bold"}
          fontSize={"17"}
          mb={7}
          textAlign={"justify"}
          lineHeight={1.5}
        >
          Quero lhe agradecer primeiramente por estar aqui. O que dizer sobre
          mim? Talvez uma das perguntas mais difíceis que eu vinha tentando
          responder e o tempo me ajudou a responder essa pergunta.
          <br />
          <br />
          Começando pela minha família, sou Pai do Gui de 7 anos e casado com
          uma mulher sensacional há 8 anos, mas juntos há 13 anos, Nilce. Sou
          uma pessoa simples que vem tentando melhorar cada dia.
          <br />
          <br />
          Na vida profissional comecei a trabalhar cedo, com 14 anos, em
          supermercado. Passei por diversas áreas, reposição de mercadorias,
          entregas e açougue. Me destacando no setor de açougue, atuando como
          líder de setor e cargos de confiança. Esses me deram os valores e
          qualidades para seguir em diversos caminhos, tendo oportunidade de
          trabalhar em outro país.
          <br />
          <br />
          Eu sou muito grato por tudo que essa profissão me deu. No entanto,
          devido a prioridade da minha família eu deixei de seguir vários
          sonhos, mas no ano 2022, com o apoio da minha família, me desafiei a
          seguir o caminho da tecnologia que almejava há muitos anos.
          <br />
          <br />
          Desde os doze anos de idade, com meu primeiro computador, sempre
          entusiasta de games e tecnologia, vi nesse mundo algo que faz me
          sentir completo, que posso ser mais útil. Então resolvi cair de cabeça
          e encarar esse desafio. No início achava que iria ser muito difícil,
          que aos 28 anos isso não iria dar certo, mas depois fazer um teste e
          ver do que eu sou capaz, isso mudou minha vida.
          <br />
          <br />
          Desde os doze anos de idade, com meu primeiro computador, sempre
          entusiasta de games e tecnologia, vi nesse mundo algo que faz me
          sentir completo, que posso ser mais útil. Então resolvi cair de cabeça
          e encarar esse desafio. No início achava que iria ser muito difícil,
          que aos 28 anos isso não iria dar certo, mas depois fazer um teste e
          ver do que eu sou capaz, isso mudou minha vida.
          <br />
          <br />
          Só o fato de começar a estudar e ver que toda a experiência que tenho
          até hoje está me ajudando a seguir firme todos os dias.
          <br />
          Mas quais experiências estão me ajudando e mantendo o foco todos os
          dias? Eu destaco Resiliência, Disciplina, Autoconfiança, Flexibilidade
          e Adaptabilidade. Essas não são todas, mas são as que faz continuar
          todos os dias. Sei que essa transição de carreira é difícil , mas eu
          estou me empenhando ao máximo para construir uma base sólida.
          <br />
          Mas o que um Desossador (Açougueiro) pode trazer para esse mundo da
          programação? Bom, meu trabalho sempre exigiu ter contato com o
          público, e por isso tive a oportunidade de aprender o que é qualidade!
          <br />
          <br />
          Qualidade é o valor que o cliente pede e necessita, assim como na
          programação esse conceito é muito valorizado, pois cada cliente
          precisa da qualidade específica para seu produto. A escuta ativa me
          abriu os olhos, pois percebi que sempre tive esse hábito de escutar,
          analisar e entender oque acontecia ao redor.
          <br />
          <br />
          O Trabalho em equipe é o mais desafiador! saber lidar com muitas
          pessoas e com vários perfis é algo que aprendi de uma forma tranquila,
          mas nem todos foram assim. Fazer amizades, conhecer e respeitar as
          pessoas com quem trabalhamos é importante para a convivência. Me
          adaptar ao ambiente e manter meus valores foram o que sempre me guiou
          na minha carreira.
          <br />
          <br />
          Enfim, muitas experiências me fizeram chegar aqui hoje e não vou parar
          por aqui, tenho a mesma ambição de aprender de quando eu consegui meu
          primeiro emprego, e quero ter mais experiências futuras e aprender
          muito com várias pessoas, principalmente nesse mundo da programação.
          Pois esse início é sim difícil, mas com apoio da minha família e
          dedicação, vou entregar resultados satisfatórios e me superar ainda
          mais a cada novo projeto.
          <br />
        </Text>
      </Box>
    </Box>
  );
}
