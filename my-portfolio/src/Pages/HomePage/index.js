import { Box} from "@chakra-ui/react";
import NavMenu from "../../components/NavMenu";
import SimpleFooter from "../../components/Footer";
import Profile from "../../components/Profile/profile";
import Skills from "../../components/Skills/skills";
import TimeLineProjects from "../../components/TimeLimeProjects/timeLineProjects";
import Sobre from "../../components/Sobre/sobre";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
export default function HomePage() {
  return (
    <Box
      bgImage="linear-gradient(45deg,     
        #254EDB 58%,
        #102693 2%,
        #0E4AFD 68%)"
    >
      <NavMenu />
      <Slide right >
        <Profile />
      </Slide>
      
      <Skills  />
      <TimeLineProjects   />
      <Zoom>
        <Sobre   />
      </Zoom>
      <SimpleFooter />
    </Box>
  );
}
