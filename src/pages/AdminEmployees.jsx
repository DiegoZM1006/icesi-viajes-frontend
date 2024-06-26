import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import IconEdit from '../components/Icons/Edit';
import { Link } from 'react-router-dom';
import { allEmployees } from '../services/allEmployees';
import DeleteButtonEmployee from '../components/Admin/DeleteButtonEmployee';
import ButtonModalSeller from '../components/Admin/ButtonModalSeller';

function AdminEmployees() {

  const columns = [
    {
      name: 'Codigo',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Rol',
      selector: row => row.role,
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
      name: 'Ventas',
      cell: (row) => (
        <ButtonModalSeller id={row.id} />
      ),
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <div className="flex justify-center gap-1">
          <Link to={'/employees/modify/' + row.id}>
            <button className="bg-blue-500 text-white p-2 rounded"><IconEdit /></button>
          </Link>
          {/* <button className="bg-red-500 text-white p-2 rounded"><IconDashboard /></button> */}
          <DeleteButtonEmployee id={row.id} />
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await allEmployees();
      const filterDataByStatus = fetchedData.filter(row => row.status === 'active');
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
                <h1 className="text-3xl font-semibold">Administrar empleados</h1>
                <Link to='/employees/create'>
                    <button className="py-2 px-4 bg-[--var-dark-shades] text-white rounded-md">Crear empleado</button>
                </Link>
            </section>
        <section className='text-end'>
          <input
            type="text"
            placeholder="Buscar empleado"
            className="border border-gray-300 p-2 rounded"
            onChange={handleRecords}
          />
        </section>
        <section className='w-full'>
          <DataTable columns={columns} data={records} pagination />
        </section>
    </main>
  );
}

export default AdminEmployees;