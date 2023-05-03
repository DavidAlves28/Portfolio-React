import { Box} from "@chakra-ui/react";
import NavMenu from "../../components/NavMenu";
import SimpleFooter from "../../components/Footer";
import Profile from "../../components/Profile/profile";
import Skills from "../../components/Skills/skills";
import TimeLineProjects from "../../components/TimeLimeProjects/timeLineProjects";
import Sobre from "../../components/Sobre/sobre";

export default function HomePage() {
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
      <Profile />
      <Skills />
      <TimeLineProjects   />
      <Sobre />
      <SimpleFooter />
    </Box>
  );
}
