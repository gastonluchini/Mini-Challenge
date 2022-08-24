
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Table = () => {

   return (
      <div className='containerTable'>

         <Link to='/'><Button>Volver</Button></Link>

         <table className='table-box'>

            <caption>Datos de Mini-Challenge</caption>

            <thead className='thead'>
               <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Carrera</th>
                  <th>Hobbie</th>
               </tr>
            </thead>

            <tbody className='tbody'>

               <tr>
                  <td>Pedro</td>
                  <td>20 años</td>
                  <td>Ingeniería</td>
                  <td>Futbol</td>
               </tr>

               <tr>
                  <td>Rodrigo</td>
                  <td>22 años</td>
                  <td>Arquitectura</td>
                  <td>Bajo eléctrico</td>
               </tr>

               <tr>
                  <td>Romina</td>
                  <td>21 años</td>
                  <td>Abogacía</td>
                  <td>Acrobacia</td>
               </tr>

               <tr>
                  <td>Ana</td>
                  <td>23 años</td>
                  <td>Contadora</td>
                  <td>Astronomía</td>
               </tr>

            </tbody>

         </table>

      </div>
   );
}

export default Table;
