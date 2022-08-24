
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Form = () => {

   const initialState = {
      name: '',
      hobbie: '',
      age: '',
   }

   const [input, setInput] = useState(initialState);
   const [show, setShow] = useState([{
      name: '',
      hobbie: '',
      age: '',
   }]);
   
   const handleChange = (e) => {
      e.preventDefault();
      setInput({
         ...input,
        [e.target.id]: e.target.value 
      });
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      setShow({
         name: [show.name, input.name],
         hobbie: [show.hobbie, input.hobbie],
         age: [show.age, input.age],
      });
      setInput(initialState);
   }

   return (
      <div className='containerForm'>

         <Link to='/'><Button>Volver</Button></Link>

         <form className='form-box' onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input id='name' type="text" placeholder='Nombre' onChange={handleChange} value={input.name}/>
            
            <label htmlFor="hobbie">Hobbie</label>
            <input id='hobbie' type="text" placeholder='Hobbie' onChange={handleChange} value={input.hobbie}/>

            <label htmlFor="age">Edad</label>
            <input id='age' type="number" placeholder='Años' onChange={handleChange} value={input.age}/>

            <Button type='submit'>Submit</Button>
         </form>

         <div className='containerResponse'>
            <div>           
               {
                  show.name?.map(e=>(
                     <div key={e}>{e}</div>
                  ))
               }  
            </div> 

            <div>           
               {
                  show.hobbie?.map(e=>(
                     <div key={e}>{e}</div>
                  ))
               }  
            </div> 

            <div>           
               {
                  show.age?.map(e=>(
                     <div key={e}>{e}</div>
                  ))
               }  
            </div> 
         </div>

         

      </div>
   );
}

export default Form;
