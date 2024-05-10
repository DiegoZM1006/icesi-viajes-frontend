import { Link } from "react-router-dom";
import { addEmployee } from "../../services/addEmployee";
import { useState } from "react";

function FormCreateEmployee() {

    const [valid, setValid] = useState();
    const [errors, setErrors] = useState();

    const handleAddEmployee = async (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const lastname = event.target.lastname.value
        const role = event.target.role.value
        const email = event.target.email.value
        const phone_number = event.target.phone_number.value
        const card_number = event.target.card_number.value
        const address = event.target.address.value
        const username = event.target.username.value
        const password = event.target.password.value

        const data = {
            name,
            lastname,
            role,
            email,
            phone_number,
            card_number,
            address,
            username,
            password
        }

        await addEmployee(data, setErrors, setValid)
    }

    return (
        <form onSubmit={handleAddEmployee} className="[box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] h-full bg-[--var-light] flex flex-col gap-6 p-5 rounded-lg max-w-[500px]" action="POST">
            <div className='flex flex-row gap-2'>
                <div className='flex-1'>
                    <label htmlFor="name">Nombre(s)</label>
                    <input type="text" id='name' name='name' placeholder='Escribe el nombre' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
                </div>
                <div className='flex-1'>
                    <label htmlFor="lastname">Apellido(s)</label>
                    <input type="text" id='lastname' name='lastname' placeholder='Escribe el apellido' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                <div className="flex-1">
                    <label htmlFor="phone_number">Telefono celular</label>
                    <input type="number" id='phone_number' name='phone_number' placeholder='Escribe el telefono' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
                </div>
                <div className="flex-1">
                    <label htmlFor="card_number">Cedula</label>
                    <input type="number" id='card_number' name='card_number' placeholder='Escribe la cedula' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                <div className="flex-1">
                    <label htmlFor="role">Rol</label>
                    <select id='role' name='role' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required>
                        <option value='ADMIN'>Administrador</option>
                        <option value='AGENT'>Empleado</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" id='email' name='email' placeholder='Escribe el email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
                </div>
            </div>
            <div>
                <label htmlFor="address">Dirección</label>
                <input type="text" id='address' name='address' placeholder='Escribe la dirección' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
            </div>
            <div>
                <label htmlFor="username">Usuario</label>
                <input type="text" id='username' name='username' placeholder='Escribe el usuario' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id='password' name='password' placeholder='Escribe la contraseña' className='w-full mt-1 p-2 border border-gray-300 rounded-md' required/>
            </div>
            <div className="flex gap-5 w-full mt-5">
                <Link className="flex flex-grow justify-center px-3 py-2 bg-[--var-danger] text-white rounded-md" to='/employees'>
                    Volver
                </Link>
                <button type="submit" className="flex-grow px-3 py-2 bg-[--var-success] text-white rounded-md">Crear</button>
            </div>
            {errors && <p className='text-red-600'>{errors}</p>}
            {valid && <p className='text-green-600'>{valid}</p>}
        </form>
    );
}

export default FormCreateEmployee;
