import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function AboutMe() {

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDir={'column'}
            my={'2%'}
            h={'100%'}
            mb='5%'
            bg={'blackAlpha.200'}
            boxShadow={'0 5px 10px rgba(0,0,0, 0.6)'}
        >
            <Box m={'0'} p={'2%'} mb={'20px'} >
                <Heading fontSize={'80px'}  >Sobre Mim </Heading>
            </Box>
            <Box p={'2%'}  >
                    <Text fontSize={'30'} textAlign='center' as={'b'}> DAVID ALVES COSTA </Text>
                <Text textAlign={'justify'} >                    
                    Quero lhe agradecer primeiramente por estar aqui.
                    Oque dizer sobre mim ? Talvez uma das perguntas mais difíceis que eu vinha tentando responder.
                    O tempo me ajudou a responder essa pergunta.
                    <br/><br />
                     Començando pela minha família , sou Pai do
                    Gui de sete anos. Casado com uma mulher sensacional há 8 anos mas juntos há 13 anos , Nilce, sou uma
                    pessoa simples que vem tentando melhorar cada dia.
                    <br /><br />
                    Na vida profissional começei a trabalhar cedo, com quatorze anos, em supermercado. Passei por
                    diversas
                    áreas, reposição de mercadorias, entregas e açougue. Me destacando no setor de açougue, atuando como
                    líder
                    de setor e cargos de confiança. Esses me deram os valores e qualidades para seguir em diversos
                    caminhos,
                    tendo oportunidade de trabalhar em outro país. Eu sou muito grato por tudo que essa
                    profissão me deu. No entanto devido a prioridade da minha família eu deixei de seguir vários sonhos,
                    mas neste ano 2022, com o apoio da esposa e família, me desafiei a seguir o caminho da
                    tecnologia que almejava há muitos anos.
                    <br /><br />
                    Desde os doze anos de idade, com meu primeiro computador, sempre entusiasta de games e tecnologia,
                    vi nesse mundo algo que faz me sentir completo, que posso ser mais útil. Então resolvi cair de
                    cabeça e
                    encarar esse desafio. No ínicio achava que iria ser muito difícil, que aos 28 anos isso não iria dar
                    certo,mas depois fazer um teste e ver do que eu sou capaz, ah! isso mudou minha vida, só o fato de
                    começar a
                    estudar e ver que toda a experiência que tenho até hoje está me ajudando a seguir firme todos os
                    dias.
                    <br /><br />
                    Mas quais experiências estão me ajudando e matendo o foco todos os dias?
                    Eu destaco  Resiliência, Disciplina, Autoconfiança, Flexibilidade , Adaptabilidade.  Essas
                    não são
                    todas,mas são as que faz continuar todos os dias.
                    Essa transição de carreira, é díficil não só para mim, mas para todos aqueles que desejam também.
                    <br /><br />
                    Mas oque um Desossador (Açougueiro) pode trazer para esse mundo da programação?
                    Bom!, meu trabalho sempre exigiu ter contato com o público, e por isso
                    tive a oportunidade de aprender oque é Qualidade! qualidade é o valor que o cliente pede e
                    necessita, assim como na programação esse conceito é muito valorizado, pois cada cliente precisa da
                    qualidade específica para seu produto. A Escuta-ativa essa me abriu os olhos, pois percebi que sempre
                    tive esse hábito de escutar, analisar e entender oque acontecia ao redor. O Trabalho em
                    equipe é o mais desafiador! saber lidar com muitas pessoas e com vários perfis são algo que
                    aprendi de uma forma tranquila, mas nem todos foram assim, fazer amizades, conhecer e respeitar as
                    pessoas com quem trabalhamos é importante para a convivência. Me adaptar ao ambiente e manter meus
                    valores foram o que sempre me guiou na minha carreira.
                    <br /><br />
                    Enfim, muitas experiências me fizeram chegar aqui hoje e não vou parar por aqui, tenho
                    a mesma ambição de aprender de quando eu consegui meu primeiro emprego, e quero ter mais
                    experiências futuras e aprender muito com várias pessoas, principalmente nesse mundo da programação .
                    Pois esse ínicio é sim díficil, mas com apoio da minha família e dedicação, vou entregar resultados
                    satisfatórios e me superar ainda mais a cada novo projeto.
                </Text>


            </Box>
        </Flex>
    )
}