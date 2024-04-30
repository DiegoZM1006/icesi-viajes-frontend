import Form from "../components/Catalogue/Form";

function ModifyDestination() {
    return (
        <main className='flex flex-col gap-5 w-full'>
            <h1 className="text-3xl font-semibold">Modificar destino</h1>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
                <Form />
            </main>
        </main>
    );
}

export default ModifyDestination;