import CardCatalogue from "../components/Sidebar/CardCatalogue"
import { Link } from 'react-router-dom';
import image from '../assets/image-catalogue.jpg'
import { useEffect, useState } from "react";
import allDestinations from "../services/allDestinations";

function Catalogue() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");

    let auth = JSON.parse(localStorage.getItem('user') || 'null');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await allDestinations();
                setData(response);
            } catch (error) {
                setData([]);
            }
        };

        fetchData(); 
    }, []);

    useEffect(() => {
        // Filter the data based on the inputs
        const filtered = data.filter(item => {
            const countryMatch = item.country.toLowerCase().includes(country.toLowerCase());
            const cityMatch = item.city.toLowerCase().includes(city.toLowerCase());
            const priceMatch = item.price.toString().includes(price);

            return countryMatch && cityMatch && priceMatch;
        });

        setFilteredData(filtered);
    }, [data, country, city, price]);

    return (
        <main className='flex flex-col gap-5 w-full'>
            <section className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Catálogo</h1>
                {
                auth?.data.role === 'ADMIN' || auth?.data.role === 'AGENT' ? 
                <Link to='/catalogue/create'>
                    <button className="py-2 px-4 bg-[--var-dark-shades] text-white rounded-md">Crear destino</button>
                </Link> : null
                }
            </section>
            <section className="h-auto">
                <div className="h-[200px] bg-gray-200 p-4 rounded-md flex flex-col justify-center items-center gap-2 bg-cover bg-center text-white bg-blend-multiply" style={{ backgroundImage: `url(${image})` }}>
                    <h3 className="text-xl font-semibold">Busca tus lugares soñados</h3>
                    <p className="w-[500px] text-center">Organiza tus destinos con nuestra selección de los mejores lugares, disponibles para ti en cualquier momento del día.</p>
                </div>
                <div className="-mt-10 p-4 rounded-md flex flex-col md:flex-row gap-4">
                    <input type="text" placeholder="País" className="w-full p-2 border border-gray-300 rounded-md" value={country} onChange={e => setCountry(e.target.value)} />
                    <input type="text" placeholder="Ciudad" className="w-full p-2 border border-gray-300 rounded-md" value={city} onChange={e => setCity(e.target.value)} />
                    <input type="text" placeholder="Precio" className="w-full p-2 border border-gray-300 rounded-md" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
            </section>
            <section className="flex flex-row flex-wrap gap-10 w-full justify-around mt-5">
                {filteredData.map((item) => (
                    <CardCatalogue key={item.id} data={item} deleteMode={auth?.data.role === 'ADMIN' || auth?.role === 'AGENT'} />
                ))}
            </section>
        </main>
    )
}

export default Catalogue;