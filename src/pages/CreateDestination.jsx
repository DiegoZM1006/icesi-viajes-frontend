import { Link } from "react-router-dom";

function CreateDestination() {
    return (
        <main className='flex flex-col gap-5 w-full'>
            <h1 className="text-3xl font-semibold">Crear destino</h1>
            <main className='flex flex-row justify-center items-center h-full min-h-[90vh] w-full'>
                <form className="[box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] h-full bg-[--var-light] flex gap-6 p-5 rounded-lg" action="">
                    <section className="flex flex-col gap-3">
                        <label htmlFor="input-file" id="drop-area" className="flex-grow">
                            <input type="file" id="input-file" name="input-file" accept=".png" hidden />
                                <div className="img-view w-[365px] h-full min-h-[365px] border-2 border-black border-dashed rounded-2xl flex justify-center items-center flex-col gap-3 bg-gray-100 transition-all duration-200 ease-linear"> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" viewBox="0 0 24 24">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.998 14.768H8.895v3.274h-.917v-3.274H6.893V14h3.105v.768zm2.725 3.274-.365-.731c-.15-.282-.246-.492-.359-.726h-.013c-.083.233-.185.443-.312.726l-.335.731h-1.045l1.171-2.045L10.336 14h1.05l.354.738c.121.245.21.443.306.671h.013c.096-.258.174-.438.276-.671l.341-.738h1.043l-1.139 1.973 1.198 2.069h-1.055zm4.384-3.274h-1.104v3.274h-.917v-3.274h-1.085V14h3.105v.768zM14 9h-1V4l5 5h-4z"></path>
                                </svg>
                                <p>Arrastra una imagen</p>
                            </div>
                        </label>
                        <div>
                            <label htmlFor="description">Descripción</label>
                            <textarea type="text" id='description' name='description' placeholder='Escribe una descripción del destino' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div> 
                        <div>
                            <label htmlFor="more-info">+ Informacion</label>
                            <textarea type="text" id='more-info' name='more-info' placeholder='Escribe informacion adicional de lo que tenga el destino' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div> 
                    </section>
                    <section className="flex flex-col gap-2 justify-center">
                        <h2 className="font-medium">Ubicación</h2>
                        <div className='flex flex-row gap-2'>
                            <div className='flex-1'>
                                <label htmlFor="country">País</label>
                                <input type="text" id='country' name='country' placeholder='Escribe el país' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="city">Ciudad</label>
                                <input type="text" id='city' name='city' placeholder='Escribe la ciudad' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            </div>
                        </div>
                        <h2 className="font-medium">Hospedaje</h2>
                        <div className='flex flex-row gap-2'>
                            <div className='flex-1'>
                                <label htmlFor="days">Dia(s)</label>
                                <input type="number" id='days' name='days' placeholder='Escribe los dias de hospedaje' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="nights">Noche(s)</label>
                                <input type="text" id='nights' name='nights' placeholder='Escribe las noches de hospedaje' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            </div>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <div>
                                <label htmlFor="tickets">Tickets de avion</label>
                                <select name="tickets" id="tickets" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                                    <option value="ida-vuelta">Ida y Vuelta</option>
                                    <option value="ida">Solo ida</option>
                                    <option value="none">No incluye</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="price">Precio</label>
                                <input type="number" id='price' name='price' placeholder='Escribe el precio x persona' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name">Nombre destino</label>
                            <input type="text" id='name' name='name' placeholder='Escribe el nombre del destino' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div>
                            <label htmlFor="hotel">Hotel</label>
                            <input type="text" id='hotel' name='hotel' placeholder='Escribe el nombre del hotel' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div className="flex gap-5 w-full mt-5">
                            <Link className="flex flex-grow justify-center px-3 py-2 bg-[--var-danger] text-white rounded-md" to='/catalogue'>
                                Volver
                            </Link>
                            <button type="submit" className="flex-grow px-3 py-2 bg-[--var-success] text-white rounded-md">Crear</button>
                        </div>
                    </section>
                </form>
            </main>
        </main>
    )
}

export default CreateDestination;