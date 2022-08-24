
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import Header from './Components/Header';
import Table from './Components/Table';

function App() {

   return (

      <BrowserRouter>
         <div className="App">
            <Routes>
               <Route exact path='/' element={<Header/>} />
               <Route exact path='/table' element={<Table/>} />
               <Route exact path='/form' element={<Form/>} />             
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
