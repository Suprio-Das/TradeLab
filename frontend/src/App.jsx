import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Layout/MainLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout></MainLayout>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
