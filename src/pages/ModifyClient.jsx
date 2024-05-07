import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/axios";
import FormUpdateClient from "../components/Admin/FormUpdateClient";

function ModifyClient() {

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
            const response = await axios.get(`http://localhost:8080/api/v1/clients/searchClient/${id}`, config);
            setData(response.data);
        }
        fetchData();
    }, [id]);

    return (
        <main className='flex flex-col gap-5 w-full'>
            <h1 className="text-3xl font-semibold">Modificar cliente</h1>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
            {data && <FormUpdateClient id={parseInt(id)} name={data.name} lastname={data.lastname} phone_number={data.phone_number} id_card={data.card_number} email={data.email} address={data.address} user={data.username} password={data.password} />}
            </main>
        </main>
    );
}

export default ModifyClient;