import React from 'react' ;
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Games from './components/Games'

const App = () => {
  return (
   <>
      
              <Router>
            
             <Routes>
                 <Route  path="/" element={<Home/>} />
                 <Route  path='/Games' element={<Games/>} />
             </Routes>

        </Router>
   </>
  )
}

export default App
