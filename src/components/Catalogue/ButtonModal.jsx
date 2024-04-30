import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Comment from "./Comment";
import { Link } from "react-router-dom";

function ButtonModal() {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <button
          className="bg-[--var-dark-shades] text-white active:bg-[--var-hover-dark-shades] font-bold uppercase text-sm px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Ver más
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-4xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[--var-white] outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between border-b border-solid border-blueGray-200 rounded-t text-white bg-[url('/Image-bg.png')] bg-no-repeat bg-fixed bg-contain bg-center">
                    <h3 className="text-3xl font-semibold bg-[--var-dark-75] mt-5 px-5 rounded-r-xl py-1">
                      Modal Title
                    </h3>
                    <article className="w-full max-w-[50%] h-full bg-[--var-dark-75] p-5 flex flex-col gap-3">
                      <h2 className='text-lg font-semibold'>Producto Aviatur - Santo Manglar Cartagena Life Wellness Spa Hotel</h2>
                      <div className="flex gap-3">
                        <span className="text-sm">3 Dia(s)</span>
                        <span className="text-sm">2 Noche(s)</span>
                      </div>
                      <p className="text-sm">Alojamiento/Hotel: Hotel Dorado Plaza Centro Historico</p>
                      <p className="text-sm">Tickets de vuelos: Ida y Vuelta</p>
                      <p className="text-sm">Hotel Dorado Plaza Centro Histórico, es privilegiado en su ubicación enmarcada dentro del contorno histórico del corralito de piedra que colinda con la parte moderna de La Matuna.</p>
                      <p className="text-sm">+ Informacion: Las instalaciones de piscinas son gratuitas, el desayuno y almuerzo esta incluido.</p>
                      <p className="text-sm">desde <br /> <span className="text-lg">$ 3.500.000 COP/Persona</span></p>
                    </article>
                  </div>
                  {/*body*/}
                  <article className="relative flex flex-auto justify-between p-5 gap-5">
                    <div className="flex flex-col gap-3 w-1/3">
                      <h2 className='text-xl font-semibold text-center'>Resumen de opiniones</h2>
                      <div className="flex flex-col w-full justify-center items-center">
                        <p className="text-[64px] font-bold">4.5</p>
                        <Rating size={32} readonly allowFraction initialValue={4.5} />
                      </div>
                    </div>
                    <div className="flex w-2/3 flex-col gap-3 justify-start items-center max-h-[160px] overflow-y-auto">
                      <Comment username={'Diego Mueses'} date={'01/01/2024'} rating={4.5} comment={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci est perferendis itaque.'} />
                      <Comment username={'Diego Mueses'} date={'01/01/2024'} rating={1.5} comment={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci est perferendis itaque.'} />
                      <Comment username={'Diego Mueses'} date={'01/01/2024'} rating={0.5} comment={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci est perferendis itaque.'} />
                    </div>
                  </article>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                    <Link to='/catalogue/modify'>
                      <button
                        className="bg-[--var-dark-shades] text-white active:bg-[--var-hover-dark-shades] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Modificar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
}

export default ButtonModal;