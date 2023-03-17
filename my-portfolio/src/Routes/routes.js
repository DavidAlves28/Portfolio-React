
import { Routes , Route ,BrowserRouter} from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import Projetos from '../Pages/Projetos'


export default function Router (){

    return ( 
        <BrowserRouter>    
         <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/projetos' element={<Projetos/>}/>
            {/* <Route path='/skills' element={<Skills/>}/> */}
            {/* <Route path='/sobre' element={<Sobre/>}/> */}
            {/* <Route  path='*' element={<ErrorPage/>}/> */}
         </Routes>   
        </BrowserRouter>
    )
}