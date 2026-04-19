import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Layout/MainLayout'
import Signup from './Components/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout></MainLayout>}>
            <Route path='/signup' element={<Signup></Signup>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
