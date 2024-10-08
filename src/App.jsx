import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Messenger from './pages/messenger/Messenger';
import Bag from './pages/bag/Bag';
import Rounds from './pages/rounds/Rounds';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route
          path='/messenger'
          element={!user ? <Navigate to='/' /> : <Messenger />}
        />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/bag' element={user ? <Bag /> : <Login />} />
        <Route path='/rounds' element={user ? <Rounds /> : <Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
