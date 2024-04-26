import CardCatalogue from "../components/Sidebar/CardCatalogue"
import { Link } from 'react-router-dom';

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
            <section className="flex flex-row flex-wrap gap-10 w-full justify-around mt-5">
                {data.map((item, index) => (
                    <CardCatalogue key={index} name={item.name} description={item.description} rating={item.stars} />
                ))}
            </section>
        </main>
    )
}

export default Catalogue;