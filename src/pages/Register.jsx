import '../index.css'
import image from '../assets/register-image.png'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <main className='w-full h-screen bg-[--var-dark-shades] flex justify-center items-center'>
      <section className='w-[90%] h-[90%] max-w-[1240px] max-h-[824px] bg-[--var-light] flex rounded-lg overflow-hidden [box-shadow:0px_0px_15px_0px_rgba(0,_0,_0,_0.50)]'>
        <img className='w-2/3 h-full object-cover' src={image} alt="Un hombre atiende a unos clientes en una agencia de viajes" />
        <article className='flex flex-col justify-center items-center w-1/3 h-full p-5'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-4xl font-bold'>Registrate</h1>
            <h3>Por favor ingresa la información para tu cuenta.</h3>
            <form action="" method='POST' className='flex flex-col gap-6'>
                <div className='flex flex-row gap-2'>
                    <div className='flex-1'>
                        <label htmlFor="name">Nombre(s)</label>
                        <input type="text" id='name' name='name' placeholder='Ingresa su(s) nombre(s)' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="lastname">Apellido(s)</label>
                        <input type="text" id='lastname' name='lastname' placeholder='Ingresa su(s) apellido(s)' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                    </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className='flex-1'>
                        <label htmlFor="phone">Telefono celular</label>
                        <input type="number" id='phone' name='phone' placeholder='Ingresa su telefono' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="id-card">Cedula</label>
                        <input type="number" id='id-card' name='id-card' placeholder='Ingresa su cedula' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id='email' name='email' placeholder='Ingresa su correo electronico' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                </div>
                <div>
                    <label htmlFor="username">Usuario</label>
                    <input type="text" id='username' name='username' placeholder='Ingresa su usuario' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id='password' name='password' placeholder='Ingresa su contraseña' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                </div>
                <button type="submit" className='w-full p-2 rounded-md bg-[--var-dark-shades] text-[--var-light] hover:bg-[--var-hover-dark-shades]'>Registrarse</button>
            </form>
            <p className='w-full text-end'>¿Ya tienes una cuenta? 
              <Link to='/'> <span className='und underline text-[--var-dark-shades]'>ingresa</span>
            </Link>
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Register
