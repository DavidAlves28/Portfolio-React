
import pokedex from "../assets/imagem/pokedex.png";
import ecommerce from "../assets/imagem/ecommerceLabenu.png";
import backend from "../assets/imagem/backend1.jpg";
import labeddit from "../assets/imagem/labediit.png";
import houseStore from "../assets/imagem/houseStore.png";
// import emBreve from "../assets/imagem/Blue Minimalist Linktree Background.jpg";

export const projetos = [
  {
    id: 1,
    category: "Front-End",
    link: "https://house-store-ecommerce.vercel.app/",
    image: houseStore,
    title: "House Store E-commerce",
    description:
      "Projeto pessoal para por em pratica conteúdos aprendidos, buscando desenvolver habilidades no React ,JavaScript, Chakra UI e etc. Consumindo API dummyJSON Ela possui JSON de produtos e muitos outros dados que  será usado em projeto futuros.",
    date: "Fevereiro, 2023",
  },
  {
    id: 2,
    category: "Front-End",
    link: "https://projeto-react-apis-mu.vercel.app/",
    image: pokedex,
    title: "Pokedex",   
  
    description: `O Projeto React e APIs é um site de pokémons que possui três páginas: Home, Pokedex e Detalhes. Sendo possível adicionar á pokedex e remove-los. O design do projeto foi dado por Figma. Firmando apredizados do React como hook , useContext  , Design system e etc.`,
    date: "Janeiro, 2023",
  },
  {
    id: 3,
    category: "Front-End",
    link: "https://projeto-frontend-react.vercel.app/",
    image: ecommerce,
    title: "LabeCommerce",   
    description: `Projeto realizado com conteúdo aprendidos no bootCamp Labenu , com funcionalidades básicas para um ecommerce.
      Podendo adicionar e remover itens do carrinho , filtrar por nome, preço , categoria e ordenar A-Z ou Z-A  simultaniamente.`,
    date: "Janeiro, 2023",
  },

  {
    id: 4,
    category: "Full-Stack",
    link: "https://labedit-front-end.vercel.app/",
    image: labeddit,
    title: "LabeEddit",
  
    description: `Projeto com foco em treinar halibadades com React ,BootStrap , Jest ,Hooks e etc. Contendo funcionalidades simples como somar, subtrair , multiplicar e dividir.`,
    date: "Julho, 2023",
  },
  {
    id: 5,
    category: "Back-End",
    link: "https://github.com/DavidAlves28/projeto-labook-backend",
    image: backend,
    title: "Labook Back-end",
    description: `Projeto criado utilizando Typescript e Programação orientada á objetos, dando mais segurança e padronização.A Arquitetura em camadas para facilitar o desenvolvimento e visão do projeto.Gerenciador de senhas UUID e gerador de hashes (password) para tornar escalável e seguro . Todos os endpoints necessitam de autenticação e assim autorizadas para utilizar cada endpoint.`,
    date: "Maio, 2023",
  },
  {
    id: 6,
    category: "Back-End",
    link: "https://github.com/DavidAlves28/labecommerce-backend",
    image: backend,
    title: "LabeCommerce back-end", 
    description: `Projeto em desenvolvimento  no BootCamp Labenu. É o primeiro projeto do back-end, onde praticamos toda a base de criação de uma API vinculada a um banco de dados real`,
    date: "Abril, 2023",
  },
  {
    id: 7,
    category: "Back-End",
    link: "https://github.com/DavidAlves28/Labedit_back-end",
    image: backend,
    title: "Labeddit back-end", 
    description: `Projeto em desenvolvimento  no BootCamp Labenu. É o primeiro projeto do back-end, onde praticamos toda a base de criação de uma API vinculada a um banco de dados real`,
    date: "Abril, 2023",
  },
];
