import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/axios";
import FormUpdateEmployee from "../components/Admin/FormUpdateEmployee";

function ModifyEmployee() {

    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {

        let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
        const config = {
            headers: {
                Authorization: `Bearer ${auth?.data.token}`        
            }
        };

        async function fetchData() {
            const response = await axios.get(`http://localhost:8080/api/v1/employees/searchEmployee/${id}`, config);
            setData(response.data);
        }
        fetchData();
    }, [id]);

    return (
        <main className='flex flex-col gap-5 w-full'>
            <h1 className="text-3xl font-semibold">Modificar empleado</h1>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
            {data && <FormUpdateEmployee id={parseInt(id)} name={data.name} lastname={data.lastname} phone_number={data.phone_number} id_card={data.card_number} email={data.email} address={data.address} user={data.username} password={data.password} role={data.role} />}
            </main>
        </main>
    );
}

export default ModifyEmployee;
