import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Authlayout from './_auth/Authlayout'
import Personal from './_auth/forms/Personal';
import Address from './_auth/forms/Address';
import Account from './_auth/forms/Account';

function App() {
  return (
    <div className="flex h-screen">
      <Routes>
      <Route element={<Authlayout/>}>
        <Route path='/personal' element={<Personal/>} />
        <Route path='/address' element={<Address/>} />
        <Route path='/account' element={<Account/>} />
        </Route>
        </Routes>
    </div>
  );
}

export default App;
