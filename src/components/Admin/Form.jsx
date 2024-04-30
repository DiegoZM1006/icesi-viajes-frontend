import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Form(props) {
    return (
        <form className="[box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] h-full bg-[--var-light] flex flex-col gap-6 p-5 rounded-lg max-w-[450px]" action="">
            <div className='flex flex-row gap-2'>
                <div className='flex-1'>
                    <label htmlFor="name">Nombre(s)</label>
                    <input value={props.name} type="text" id='name' name='name' placeholder='Escribe el nombre' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                </div>
                <div className='flex-1'>
                    <label htmlFor="lastname">Apellido(s)</label>
                    <input value={props.lastname} type="text" id='lastname' name='lastname' placeholder='Escribe el apellido' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                <div className="flex-1">
                    <label htmlFor="rol">Rol</label>
                    <select name="rol" id="rol" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                        <option value="ida-vuelta">Administrador</option>
                        <option value="ida">Agente</option>
                        <option value="none">Viewer</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label htmlFor="email">Correo electronico</label>
                    <input value={props.email} type="email" id='email' name='email' placeholder='Escribe el email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                <div className="flex-1">
                    <label htmlFor="phone_number">Telefono celular</label>
                    <input value={props.phone_number} type="number" id='phone_number' name='phone_number' placeholder='Escribe el telefono' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                </div>
                <div className="flex-1">
                    <label htmlFor="id_card">Cedula</label>
                    <input value={props.id_card} type="number" id='id_card' name='id_card' placeholder='Escribe la cedula' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                </div>
            </div>
            <div>
                <label htmlFor="address">Dirección</label>
                <input value={props.address} type="text" id='address' name='address' placeholder='Escribe la dirección' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </div>
            <div>
                <label htmlFor="user">Usuario</label>
                <input value={props.user} type="text" id='user' name='user' placeholder='Escribe el usuario' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input value={props.password} type="password" id='password' name='password' placeholder='Escribe la contraseña' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </div>
            <div className="flex gap-5 w-full mt-5">
                <Link className="flex flex-grow justify-center px-3 py-2 bg-[--var-danger] text-white rounded-md" to='/clients'>
                    Volver
                </Link>
                <button type="submit" className="flex-grow px-3 py-2 bg-[--var-success] text-white rounded-md">Crear</button>
            </div>
        </form>
    );
}

Form.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    rol: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    id_card: PropTypes.string,
    address: PropTypes.string,
    user: PropTypes.string,
    password: PropTypes.string
}

export default Form;