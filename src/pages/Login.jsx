import '../index.css'
import image from '../assets/agente.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../services/login'

function Login() {

  const [erros, setErrors] = useState()

  const handleLogin = async (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    setErrors(await login(username, password))

  }

  return (
    <main className='w-full h-screen bg-[--var-dark-shades] flex justify-center items-center'>
      <section className='w-[90%] h-[90%] max-w-[1240px] max-h-[750px] bg-[--var-light] flex rounded-lg overflow-hidden [box-shadow:0px_0px_15px_0px_rgba(0,_0,_0,_0.50)]'>
        <article className='flex flex-col justify-center items-center w-1/3 h-full p-5'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-4xl font-bold'>¡Bienvenido!</h1>
            <h3>Por favor ingresa la información de tu cuenta.</h3>
            <form onSubmit={handleLogin} method='POST' className='flex flex-col gap-6'>
              <div>
                <label htmlFor="username">Usuario</label>
                <input type="text" id='username' name='username' placeholder='Ingresa tu usuario' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
              </div>
              <div>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id='password' name='password' placeholder='Ingresa tu usuario' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
              </div>
              <div className='flex items-center justify-end gap-2'>
                <label htmlFor="remember" className='font-thin'>Recordar sesión</label>
                <input type="checkbox" id='remember' name='remember' className='w-4 h-4' />
              </div>
              <button type="submit" className='w-full p-2 rounded-md bg-[--var-dark-shades] text-[--var-light] hover:bg-[--var-hover-dark-shades]'>Iniciar sesión</button>
            </form>
            {erros && <p className='text-red-600'>{erros}</p>}
            <p className='w-full text-end'>¿No tienes cuenta?
              <Link to='/register'> <span className='und underline text-[--var-dark-shades]'>registrate</span></Link>
            </p>
          </div>
        </article>
        <img className='w-2/3 h-full object-cover' src={image} alt="Un hombre atiende a unos clientes en una agencia de viajes" />
      </section>
    </main>
  )
}

export default Login
