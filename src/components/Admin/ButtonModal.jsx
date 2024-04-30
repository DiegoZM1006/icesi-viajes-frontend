import { useState } from "react";
import IconDashboard from "../Icons/IconDashboard";
import CardCatalogue from "../Sidebar/CardCatalogue";

function ButtonModal() {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <button
          className="bg-emerald-500 text-white p-2 rounded"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <IconDashboard />
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto min-w-[600px] my-6 mx-auto max-w-4xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[--var-white] outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-6 border-b border-solid border-blueGray-200 rounded-b">
                    <h3 className="text-3xl font-semibold">
                      Lista de reservas
                    </h3>
                  </div>
                  {/*body*/}
                  <article className="relative flex flex-col flex-auto items-center p-5 gap-5 max-h-[200px] overflow-y-auto">
                    <CardCatalogue name={'Cartagena, Colombia'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec nunc.'} rating={3.5} />
                  </article>
                  {/*footer*/}
                  <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <div>
                      <p className="text-base">Reservas : 7</p>
                      <p className="text-lg">Valor total reservas: $ 15.567.345,86 COP</p>
                    </div>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
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