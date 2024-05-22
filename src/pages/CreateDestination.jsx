import Form from "../components/Catalogue/FormCreateDestination";

function CreateDestination() {
    return (
        <main className='flex flex-col gap-5 w-full'>
            <h1 className="text-3xl font-semibold">Crear destino</h1>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
                <Form />
            </main>
        </main>
    )
}

export default CreateDestination;