import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Layout/MainLayout'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout></MainLayout>}>
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
            <Route path='signup' element={<Signup></Signup>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
