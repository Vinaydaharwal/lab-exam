
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Route path="/" element={Home} />
      <Switch>
        <Route path="/" element={Home} />
        <Route path="/login" element={Login} />
        <Route path="/signup" element={Signup} />
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App
