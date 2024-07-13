import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../Styles/Global.css'
import '../../Styles/IniciaSesion-Registro.css'
import { register } from '../../src/fetching/auth.fetching'
import { useNavigate } from 'react-router-dom'

const Registrate = () => {
  const [errorText, setErrorText] = useState('') // Texto de error al registrar el usuario al servidor
  const navigate = useNavigate() // Hook para redireccionar a otras pantallas
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      
      const usuario = { // Crear un objeto con los datos del usuario a registrar
        nombre: event.target.nombre.value, // Obtener los valores de los campos del formulario y asignarlos al objeto de usuario
        apellido: event.target.apellido.value,
        edad: event.target.edad.value,
        email: event.target.email.value,
        password: event.target.password.value,
        passwordConfirm: event.target.passwordConfirm.value
      }
      await register(usuario) // Llamar a la función de registro del servidor
      setErrorText('') // Limpiar el texto de error
      navigate('../Login') // Redireccionar a la pantalla de inicio de sesión
    }
    catch (error) {
      setErrorText(error.message) // Mostrar el error al usuario en pantalla
    }
  }
  return (
    <>
      <Navbar />
      <div className='containerInciarSecionCompleto'>
        <img className="imgRegistro" src="./img/vaso-whisky.jpg" alt="vaso-whisky" />
        <div className='containerForm'>
          <h3 className='titleRegistro'>Registrate</h3>
          <form action="" className='containerFormIS' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" placeholder='Ezequiel' className='inputIS'  />
            </div>
            <div>
              <label htmlFor="apellido">Apellido"</label>
              <input type="text" id="apellido" name="apellido" placeholder='Gonzalez' className='inputIS'  />
            </div>
            <div>
              <label htmlFor="edad">Edad</label>
              <input type='numbre' id="edad" name="edad" placeholder='20' className='inputIS'  />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder='H&S@gmail.com' className='inputIS'  />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" className="inputIS" placeholder="**********"  />
            </div>
            <div>
              <label htmlFor="passwordConfirm">Confirmar contraseña</label>
              <input type="password" id="passwordConfirm" name="passwordConfirm" className="inputIS" placeholder="**********"  />
            </div>

            {errorText
              &&
              <span style={{ color: 'red' }}>
                {errorText}
              </span>
            }

            <button type="submit" className='btnIS'>Registrate</button>

          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Registrate