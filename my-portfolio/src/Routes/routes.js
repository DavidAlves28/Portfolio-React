
import { Routes , Route ,BrowserRouter} from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import Projetos from '../Pages/ProjetosPage'
import SkillsPage from '../Pages/SkillsPage'
import AboutMe from '../Pages/Sobre'



export default function Router (){

    return ( 
        <BrowserRouter>    
         <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/projetos' element={<Projetos/>}/>
            <Route path='/skills' element={<SkillsPage/>}/>
            <Route path='/aboutme' element={ <AboutMe/>}/>            
         </Routes>   
        </BrowserRouter>
    )
}