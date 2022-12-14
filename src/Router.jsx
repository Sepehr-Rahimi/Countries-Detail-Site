import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home, Detail } from './Pages'




const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:code' element={<Detail />} />
        </Routes>
    </BrowserRouter>
)


export default Router