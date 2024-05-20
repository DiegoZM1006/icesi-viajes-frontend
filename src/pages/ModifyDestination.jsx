import Form from "../components/Catalogue/Form";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../services/axios";

function ModifyDestination() {
    
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
            const response = await axios.get(`http://localhost:8080/api/v1/destinations/searchDestination/${id}`, config);
            setData(response.data);
        }
        fetchData();
    }, [id]);
    
    return (
        <main className='flex flex-col gap-5 w-full'>
            <h1 className="text-3xl font-semibold">Modificar destino</h1>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
                {
                    data ? <Form /> : <p className="text-3xl">Cargando...</p>
                }
            </main>
        </main>
    );
}

export default ModifyDestination;