import Form from "../components/Admin/Form";

function ModifyClient() {
    return (
        <main className='flex flex-col gap-5 w-full'>
            <h1 className="text-3xl font-semibold">Modificar cliente</h1>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
                <Form />
            </main>
        </main>
    );
}

export default ModifyClient;