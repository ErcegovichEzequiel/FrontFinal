import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../Styles/Global.css'

const UsuarioDesarrollador = () => {
  return (
    <>
      <Navbar />
      <div className="containerUsuarioDesarrollador">
        <h1>Bienvenido (nombre del usuario logueado)</h1>
        <h1>Aquí podrá editar los usuarios de su tienda.</h1>
        <div className="cartsUsuarioDesarrollador">
          <div  className='cartUsuario'>
            <h3>Agregar usuario</h3>
            <p></p>
            <button>Ejecutar acción</button>
          </div>
          <div  className='cartUsuario'>
            <h3>Editar usuario</h3>
            <p></p>
            <button>Ejecutar acción</button>
          </div>
          <div  className='cartUsuario'>
            <h3>Eliminar usuario por ID</h3>
            <p></p>
            <button>Ejecutar acción</button>
          </div>
          <div  className='cartUsuario'>
            <h3>Buscar usuario por ID</h3>
            <p></p>
            <button>Ejecutar acción</button>
          </div>
          <div  className='cartUsuario'>
            <h3>Traer todos los usuarios</h3>
            <p></p>
            <button>Ejecutar acción</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UsuarioDesarrollador