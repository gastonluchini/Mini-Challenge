
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {

   return (
      <div>
         <div className='containerHeader-button'>
            <Link to='/table'><Button className='header-button-1'>Tabla</Button></Link>
            <Link to='/form'><Button className='header-button-2'>Formulario</Button></Link>
         </div>

         <div className='containerHeader-text'>
            <p>Mini - Challenge</p> 
         </div>
      </div>
   );
}

export default Header;
