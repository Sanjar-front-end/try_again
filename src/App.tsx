import './App.css'
import LogInPage from './components/LoginPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import PrivateRoutes  from './utils/PrivateRoutes'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LogInPage/>}></Route>
          <Route path="/" element={<PrivateRoutes>
            <MainPage/>
          </PrivateRoutes>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App