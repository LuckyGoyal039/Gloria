// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Signup from './components/Signup';
// import { Container} from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
// import Demo from './components/demo'
import Login from './components/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Account from './components/Account';


function App() {
  return (
    // <Container className="d-flex align-items:center justify-content:center" style={{minHeight:"100vh"}}>
    //   <div className="w-100" style={{maxWidth:"400px"}}>
    //   <Signup/>
    //   </div>
    // </Container>
    <BrowserRouter>

    <AuthProvider>
      <Routes>
      <Route exact path='/' element={<Dashboard/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/account' element={<Account/>}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
    // <Login/>
    // <Demo/>
  );
}

export default App;
