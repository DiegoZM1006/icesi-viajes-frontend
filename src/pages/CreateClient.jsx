import Form from "../components/Admin/Form";
import { Link } from "react-router-dom";

function CreateClient() {
    return (
        <main className='flex flex-col gap-5 w-full'>
            <section>
                <p className="text-md font-thin flex gap-1">
                    <Link className="hover:underline hover:text-blue-500" to='/clients'>
                        Administrar clientes 
                    </Link> 
                    &gt; 
                    <Link className="hover:underline text-blue-500" to='/clients/create'>
                        Crear cliente 
                    </Link> 
                </p>
                <h1 className="text-3xl font-semibold">Crear cliente</h1>
            </section>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
                <Form />
            </main>
        </main>
    );
}

export default CreateClient;