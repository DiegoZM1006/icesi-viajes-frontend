import CardCatalogue from "../components/Sidebar/CardCatalogue"
import { Link } from 'react-router-dom';
import image from '../assets/image-catalogue.jpg'

const data = [
    {
        name: 'Cartagena',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 5,
    },
    {
        name: 'Hawaii',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.5,
    },
    {
        name: 'Miami',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 5,
    },
    {
        name: 'Cancún',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.8,
    },
    {
        name: 'Bogotá',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.3,
    },
    {
        name: 'Cartagena',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.5,
    },
    {
        name: 'Hawaii',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.7,
    },
    {
        name: 'Miami',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.2,
    },
    {
        name: 'Cancún',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.8,
    },
    {
        name: 'Bogotá',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.3,
    },{
        name: 'Cartagena',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.5,
    },
    {
        name: 'Hawaii',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.7,
    },
    {
        name: 'Miami',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.2,
    },
    {
        name: 'Cancún',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.8,
    },
    {
        name: 'Bogotá',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.3,
    },
    {
        name: 'Cancún',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.',
        stars: 4.8,
    },
]

function Catalogue() {
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
                    <h3 className="text-xl font-semibold">Busca tus destinos soñados</h3>
                    <p className="w-[500px] text-center">Organiza tus destinos soñados con nuestra selección de los mejores lugares, disponibles para ti en cualquier momento del día.</p>
                </div>
                <div className="-mt-10 p-4 rounded-md flex flex-col md:flex-row gap-4">
                    <input type="text" placeholder="País" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="text" placeholder="Ciudad" className="w-full p-2 border border-gray-300 rounded-md" />
                    <input type="text" placeholder="Precio" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
            </section>
            <section className="flex flex-row flex-wrap gap-10 w-full justify-around mt-5">
                {data.map((item, index) => (
                    <CardCatalogue key={index} name={item.name} description={item.description} rating={item.stars} deleteMode />
                ))}
            </section>
        </main>
    )
}

export default Catalogue;