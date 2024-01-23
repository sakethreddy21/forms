
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authlayout from './_auth/Authlayout'
import Personal from './_auth/forms/Personal';
import Address from './_auth/forms/Address';
import Account from './_auth/forms/Account';
import Data from './data/Data';

function App() {
  return (
    <div >
      <Routes>
      <Route element={<Authlayout/>}>
        <Route path='/personal' element={<Personal/>} />
        <Route path='/' element={<Address/>} />
        <Route path='/account' element={<Account/>} />
        </Route>
        <Route path='/data' element={<Data/>} />
        </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;
