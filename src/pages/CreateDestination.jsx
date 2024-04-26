function CreateDestination() {
    return (
        <main>
            <h1 className="text-3xl font-semibold">Crear destino</h1>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
                <form className="[box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] h-full min-h-[405px] bg-[--var-light] flex gap-5 p-5 rounded-lg" action="">
                    <section>
                        <label htmlFor="input-file" id="drop-area">
                            <input type="file" id="input-file" name="input-file" accept=".png" hidden />
                                <div className="img-view w-[365px] h-full border-2 border-black border-dashed rounded-2xl flex justify-center items-center flex-col gap-3 bg-gray-100 transition-all duration-200 ease-linear"> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" viewBox="0 0 24 24">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.998 14.768H8.895v3.274h-.917v-3.274H6.893V14h3.105v.768zm2.725 3.274-.365-.731c-.15-.282-.246-.492-.359-.726h-.013c-.083.233-.185.443-.312.726l-.335.731h-1.045l1.171-2.045L10.336 14h1.05l.354.738c.121.245.21.443.306.671h.013c.096-.258.174-.438.276-.671l.341-.738h1.043l-1.139 1.973 1.198 2.069h-1.055zm4.384-3.274h-1.104v3.274h-.917v-3.274h-1.085V14h3.105v.768zM14 9h-1V4l5 5h-4z"></path>
                                </svg>
                                <p>Arrastra una imagen</p>
                            </div>
                        </label>
                    </section>
                    <section>
                        <div className='flex flex-row gap-2'>
                            <div className='flex-1'>
                                <label htmlFor="name">Nombre(s)</label>
                                <input type="text" id='name' name='name' placeholder='Ingresa su(s) nombre(s)' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="lastname">Apellido(s)</label>
                                <input type="text" id='lastname' name='lastname' placeholder='Ingresa su(s) apellido(s)' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            </div>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <div className='flex-1'>
                                <label htmlFor="name">Nombre(s)</label>
                                <input type="text" id='name' name='name' placeholder='Ingresa su(s) nombre(s)' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="lastname">Apellido(s)</label>
                                <input type="text" id='lastname' name='lastname' placeholder='Ingresa su(s) apellido(s)' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id='email' name='email' placeholder='Ingresa su correo electronico' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id='email' name='email' placeholder='Ingresa su correo electronico' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id='email' name='email' placeholder='Ingresa su correo electronico' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id='email' name='email' placeholder='Ingresa su correo electronico' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id='email' name='email' placeholder='Ingresa su correo electronico' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id='email' name='email' placeholder='Ingresa su correo electronico' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                    </section>
                </form>
            </main>
        </main>
    )
}

export default CreateDestination;