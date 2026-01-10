import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { AuthContextProvider } from './context/auth';
//import { Teste } from './pages/index';

function App() {
  return (
    <Router>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        {/* <Route path='/teste' element={<Teste />} /> */}
      </Routes>
    </AuthContextProvider>
    </Router>
  );
}

export default App;
