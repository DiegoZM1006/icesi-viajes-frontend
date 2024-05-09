import { Link } from "react-router-dom";

function AdminEmployees() {
  return (
    <main className='flex flex-col gap-5 w-full'>
        <section className="flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Administrar empleados</h1>
                <Link to='/clients/create'>
                    <button className="py-2 px-4 bg-[--var-dark-shades] text-white rounded-md">Crear empleado</button>
                </Link>
            </section>
        <section className='text-end'>
          {/* <input
            type="text"
            placeholder="Buscar cliente"
            className="border border-gray-300 p-2 rounded"
            onChange={handleRecords}
          /> */}
        </section>
        <section className='w-full'>
          {/* <DataTable columns={columns} data={records} pagination /> */}
        </section>
    </main>
  );
}

export default AdminEmployees;