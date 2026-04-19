import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Layout/MainLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout></MainLayout>}>
            <Route path='/signup' element={<h1>Signup</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
