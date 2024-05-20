import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ButtonModal(props) {
    
  const [showModal, setShowModal] = useState(false);
  let auth = JSON.parse(localStorage.getItem('user') || 'null');

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
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[rgba(0,0,0,0.5)]"
          >
            <div className="relative w-auto my-6 pt-8 mx-auto h-auto">
              {/*content*/}
              <div className="max-w-4xl max-h-screen h-auto overflow-hidden overflow-y-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[--var-white] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between border-b border-solid border-blueGray-200 rounded-t text-white bg-no-repeat bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${props.data.image})` }}>
                  <h3 className="text-3xl font-semibold bg-[--var-dark-75] mt-5 px-5 rounded-r-xl py-1">
                    {props.data.city + ", " + props.data.country + "."}
                  </h3>
                  <article className="w-full max-w-[50%] h-full bg-[--var-dark-75] p-5 flex flex-col gap-3">
                    <h2 className='text-lg font-semibold'>{props.data.name}</h2>
                    <div className="flex gap-3">
                      <span className="text-sm">{props.data.days} Dia(s)</span>
                      <span className="text-sm">{props.data.nights} Noche(s)</span>
                    </div>
                    <p className="text-sm">Alojamiento/Hotel: {props.data.hotel}</p>
                    <p className="text-sm">Tickets de vuelos: {props.data.tickets}</p>
                    <p className="text-sm">{props.data.description}</p>
                    <p className="text-sm">+ Informacion: {props.data.aditional_information}</p>
                    <p className="text-sm">desde <br /> <span className="text-lg">$ {props.data.price} COP/Persona</span></p>
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
                  {
                    auth?.data.role === 'ADMIN' ? 
                    <Link to={`/catalogue/modify/${props.data.id}`}>
                      <button
                        className="bg-[--var-dark-shades] text-white active:bg-[--var-hover-dark-shades] font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                      >
                        Editar
                      </button>
                    </Link> : null
                  }
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

ButtonModal.propTypes = {
    data: PropTypes.object.isRequired
}

export default ButtonModal;