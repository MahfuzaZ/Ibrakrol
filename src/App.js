import { Route, Routes } from 'react-router';
import Layout from './Components/Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import sass from './App.module.scss'
import Main from './Components/Main';
import Form from './Components/Form';


function App() {
  return (
    <div className={sass.App}>
         <Layout>
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/main' element={<Main/>}>
                   <Route path='form' element={<Form/>}/>
                </Route>
              </Routes>
         </Layout>
    </div>
  );
}

export default App;
