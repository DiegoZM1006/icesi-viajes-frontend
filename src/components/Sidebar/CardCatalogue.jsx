import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ButtonModal from '../Catalogue/ButtonModal';
import { deleteDestinations } from '../../services/deleteDestinations';
import IconDelete from '../Icons/Delete';

function CardCatalogue(props) {

    const showSwal = () => {
        withReactContent(Swal).fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esta acción!",
            icon: "warning",
            cancelButtonText: "Cancelar",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminarlo!",
            preConfirm: () => {
                deleteDestinations(props.data.id)
                  .then(response => {
                      if (response === 'Destino eliminado con éxito') {
                          Swal.fire(
                              "Eliminado!",
                              "El destino ha sido eliminado.",
                              "success"
                          );
                          const card_catalogue = document.getElementById('card_destination_' + props.data.id);
                          card_catalogue.remove();
                      } else {
                          Swal.showValidationMessage(
                              `Ha surgido un error: ${response}`
                          );
                      }
                  })
                  .catch(error => {
                      console.error(error);
                      Swal.showValidationMessage(
                          "Ha surgido un error al eliminar el destino."
                      );
                  });
          }
        })
      }

    return (
        <section className="w-full max-w-[450px] h-[125px] bg-[--var-light] rounded-lg [box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] flex relative" id={'card_destination_' + props.data.id}>
            <img className='rounded-l-lg' src={props.data.image} alt="" width={130} height={130}/>
            <article className='w-full flex flex-col'>
                <div className='flex-grow py-1 px-2 overflow-hidden'>
                    <h2 className='font-bold text-md'>{props.data.city}, {props.data.country}.</h2>
                    <p className='text-sm'>{props.data.description}</p>
                </div>
                <div className='w-full flex justify-end px-2 py-2 items-center'>
                    {/* <Rating size={32} readonly allowFraction initialValue={props.data.rating ?? 5} /> */}
                    <ButtonModal data={props.data} />
                </div>
                {props.deleteMode && 
                    <button className='absolute w-12 h-12 -mt-5 -mr-5 right-0 top-0 bg-[--var-danger-75] rounded-full flex justify-center items-center' onClick={showSwal}>
                        <IconDelete />
                    </button>
                }
            </article>
        </section>
    );
}

CardCatalogue.propTypes = {
    data: PropTypes.object.isRequired,
    deleteMode: PropTypes.bool
}

export default CardCatalogue;