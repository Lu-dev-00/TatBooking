import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './views/HomePage/HomePage';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import LoginView from './views/Login/LoginView';
import SignUp from './views/Sign Up/SignUp';
import Dashboard from './views/DashBoard/Dashboard';
import AuthProvider from './context/AuthContect';
import ProfileView from './views/ProfileView/ProfileView';
import PrivateRoutes from './util/PrivateRoutes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}>
             </Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginView/>}/>
        </Routes>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/profile" element={<ProfileView/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
