import { Link } from "react-router-dom";
import FormCreateEmployee from "../components/Admin/FormCreateEmployee";

function CreateEmployee() {
    return (
        <main className='flex flex-col gap-5 w-full'>
            <section>
                <p className="text-md font-thin flex gap-1">
                    <Link className="hover:underline hover:text-blue-500" to='/employees'>
                        Administrar empleados 
                    </Link> 
                    &gt; 
                    <Link className="hover:underline text-blue-500" to='/employees/create'>
                        Crear empleado 
                    </Link> 
                </p>
                <h1 className="text-3xl font-semibold">Crear empleado</h1>
            </section>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
                <FormCreateEmployee />
            </main>
        </main>
    )
}

export default CreateEmployee;
