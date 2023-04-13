import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import NewContact from './pages/NewContact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/new-contact' element={<NewContact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
