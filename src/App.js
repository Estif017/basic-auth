import React from 'react'
import { Container } from 'react-bootstrap'
import Switch from 'react-bootstrap/esm/Switch'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import { AuthProvider } from './context/AuthContext'
import Dashboard from './pages/Dashboard'
import ForgetPasword from './pages/ForgetPasword'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import UpdateProfile from './pages/UpdateProfile'
// import app from './firebase'

export default function App() {
  
  return (
    <Container 
      className='d-flex align-items-center justify-content-center'
      style={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth:'400px'}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoutes exact path='/' component={Dashboard}/>
                <PrivateRoutes path='/update-profile' component={UpdateProfile}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/login' component={LogIn}/>
                <Route path='/forgot-password' component={ForgetPasword}/>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
    </Container>
  )
}
