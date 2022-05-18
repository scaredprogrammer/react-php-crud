import './App.css';
import { useState } from 'react';
import Form from './components/form';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import { Link } from 'react-router-dom';
import UserList from './components/userList';
// import Add from './components/add';

function App() {
  const [login, setlogin] = useState(false);
  const loginHandler = () => {
    setlogin(login => !login)
  }
  return (
    <div className="App">
        <div className='navv'>
          <Header />
        </div>
        <div className='main'>
          <div className='sidebar1'>
            <p>Students</p>
            <p><Link to='/student'>View Student</Link></p>
            <p><Link to='/add'>Add Student</Link></p> <br />
          </div>
          <div className='maininner'>
            <Routes>
              {/* <Route path='/login' element={loginHandler}>
              </Route> */}
              <Route path='/add' element={<Form />}>
              </Route>
              <Route path='/student' element={<UserList />}>
              </Route>
            </Routes>
          </div>
        </div>

      
    </div>
  );
}

export default App;
