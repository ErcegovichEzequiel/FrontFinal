// import React, { useEffect } from 'react'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import Historia from '../Screens/Historia'
// import Home from '../Screens/Home'
// import Login from '../Screens/Login/Login'
// import Register from '../Screens/Register/Register'
// import Carrito from '../Screens/Carrito'
// import Nosotros from '../Screens/Nosotros'
// import Tienda from '../Screens/Tienda'
// import { verificarToken } from './fetching/auth.fetching'

// const RouterList = () => {

//   const navigate = useNavigate()
//   useEffect(() => {
//     verificarToken()
//       .then(resultado => {
//         if (resultado.status === 200) {
//           navigate('/')
//         }
//         else {
//           navigate('/Login')
//         }
//       })

//   }, [])


//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/Historia' element={<Historia />}></Route>
//         <Route path='/Login' element={<Login />}></Route>
//         <Route path='/Register' element={<Register />}></Route>
//         <Route path='/Carrito' element={<Carrito />}></Route>
//         <Route path='/Nosotros' element={<Nosotros />}></Route>
//         <Route path='/Tienda' element={<Tienda />}></Route>
//       </Routes>
//     </div>
//   )
// }

// export default RouterList


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Historia from '../Screens/Historia';
import Home from '../Screens/Home';
import Login from '../Screens/Login/Login';
import Register from '../Screens/Register/Register';
import Carrito from '../Screens/Carrito';
import Nosotros from '../Screens/Nosotros';
import Tienda from '../Screens/Tienda';

const RouterList = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Historia' element={<Historia />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Tienda' element={<Tienda />} />
      </Routes>
    </div>
  );
};

export default RouterList;
