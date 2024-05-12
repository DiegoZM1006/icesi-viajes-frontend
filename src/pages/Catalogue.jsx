import CardCatalogue from "../components/Sidebar/CardCatalogue"
import { Link } from 'react-router-dom';
import image from '../assets/image-catalogue.jpg'
import { useEffect, useState } from "react";
import allDestinations from "../services/allDestinations";

function Catalogue() {

    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await allDestinations();
                setData(response);
            } catch (error) {
                setData('Ha ocurrido un error');
            }
        };

        fetchData(); 

    }, []);

    return (
        <main className='flex flex-col gap-5 w-full'>
            <section className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Catálogo</h1>
                <Link to='/catalogue/create'>
                    <button className="py-2 px-4 bg-[--var-dark-shades] text-white rounded-md">Crear destino</button>
                </Link>
            </section>
            <section className="h-auto">
                <div className="h-[200px] bg-gray-200 p-4 rounded-md flex flex-col justify-center items-center gap-2 bg-cover bg-center text-white bg-blend-multiply" style={{ backgroundImage: `url(${image})` }}>
                    <h3 className="text-xl font-semibold">Busca tus lugares soñados</h3>
                    <p className="w-[500px] text-center">Organiza tus destinos con nuestra selección de los mejores lugares, disponibles para ti en cualquier momento del día.</p>
                </div>
                <div className="-mt-10 p-4 rounded-md flex flex-col md:flex-row gap-4">
                    <input type="text" placeholder="País" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="text" placeholder="Ciudad" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="text" placeholder="Precio" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
            </section>
            <section className="flex flex-row flex-wrap gap-10 w-full justify-around mt-5">
                {data && data.map((item, index) => (
                    <CardCatalogue key={index} name={item.name} image={item.image} description={item.aditional_information} rating={item.stars} deleteMode />
                ))}
            </section>
        </main>
    )
}

export default Catalogue;