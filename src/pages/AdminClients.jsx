import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import IconDashboard from '../components/Icons/IconDashboard';
import ButtonModal from '../components/Admin/ButtonModal';
import { Link } from 'react-router-dom';
import { allClients } from '../services/allClients';

function AdminClients() {

  const columns = [
    {
      name: 'Codigo',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Nombre(s)',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Apellido(s)',
      selector: row => row.lastname,
      sortable: true,
    },
    {
      name: 'Cedula',
      selector: row => row.card_number,
      sortable: true,
    },
    {
      name: 'Correo',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Telefono',
      selector: row => row.phone_number,
      sortable: true,
    },
    {
      name: 'Usuario',
      selector: row => row.username,
      sortable: true,
    },
    {
      name: 'Contraseña',
      selector: row => row.password,
      sortable: true,
    },
    {
      name: 'Reservas',
      cell: () => (
        <ButtonModal />
      ),
    },
    {
      name: 'Acciones',
      cell: () => (
        <div className="flex justify-center gap-1">
          <Link to='/clients/modify'>
            <button className="bg-blue-500 text-white p-2 rounded"><IconDashboard /></button>
          </Link>
          <button className="bg-red-500 text-white p-2 rounded"><IconDashboard /></button>
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await allClients();
      setData(fetchedData);
      setRecords(fetchedData);
    };
    fetchData();
  }, []);

  function handleRecords(event) {
    const inputValue = event.target.value.toLowerCase();
    const newData = data.filter(row => {
      return Object.values(row).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(inputValue)
      );
    });
    setRecords(newData);
  }

  return (
    <main className='flex flex-col gap-5 w-full'>
        <section className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Administrar clientes</h1>
                <Link to='/clients/create'>
                    <button className="py-2 px-4 bg-[--var-dark-shades] text-white rounded-md">Crear cliente</button>
                </Link>
            </section>
        <section className='text-end'>
          <input
            type="text"
            placeholder="Buscar cliente"
            className="border border-gray-300 p-2 rounded"
            onChange={handleRecords}
          />
        </section>
        <DataTable columns={columns} data={records} pagination />
    </main>
  )
}

export default AdminClients;