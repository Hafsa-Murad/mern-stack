import{BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {

  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/sign-in' element={<SignIn />}></Route>
    <Route path='/sign-out' element={<SignOut />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
   </Routes>
    </BrowserRouter>
  )
}

export default App
