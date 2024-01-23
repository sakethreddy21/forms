
import { Routes, Route } from 'react-router-dom'
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
        <Route path='/address' element={<Address/>} />
        <Route path='/account' element={<Account/>} />
        </Route>
        <Route path='/data' element={<Data/>} />
        </Routes>
    </div>
  );
}

export default App;
