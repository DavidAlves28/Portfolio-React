import { Box } from "@chakra-ui/react";
import SimpleFooter from "../../components/Footer";
import NavMenu from "../../components/NavMenu";
import Skills from "../../components/Skills/skills";
import SobreMim from "../../components/Sobre/sobre";

export default function Sobre() {
  return (
    <Box
      bgImage="linear-gradient(45deg,     
            #254EDB 58%,
            #102693 2%,
            #0E4AFD 68%)"
      fontFamily={"Russo One"}
      fontStyle={"sans-serif"}
    >
      <NavMenu />
      <Skills />
      <SobreMim />
      <SimpleFooter />
    </Box>
  );
}
