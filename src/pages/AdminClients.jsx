import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import IconEdit from '../components/Icons/Edit';
import ButtonModal from '../components/Admin/ButtonModal';
import { Link } from 'react-router-dom';
import { allClients } from '../services/allClients';
import DeleteButton from '../components/Admin/DeleteButtonClient';

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
      name: 'Direccion',
      selector: row => row.address,
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
      omit: true,
    },
    {
      name: 'Reservas',
      cell: (row) => (
        <ButtonModal id={row.id} />
      ),
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <div className="flex justify-center gap-1">
          <Link to={'/clients/modify/' + row.id}>
            <button className="bg-blue-500 text-white p-2 rounded"><IconEdit /></button>
          </Link>
          {/* <button className="bg-red-500 text-white p-2 rounded"><IconDashboard /></button> */}
          <DeleteButton id={row.id} />
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await allClients();
      const filterDataByStatus = fetchedData.filter(client => client.status === 'active');
      setData(filterDataByStatus);
      setRecords(filterDataByStatus);
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
        <section className='w-full'>
          <DataTable columns={columns} data={records} pagination />
        </section>
    </main>
  )
}

export default AdminClients;