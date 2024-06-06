import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import IconDelete from '../Icons/Delete'
import PropTypes from 'prop-types'
import { deleteClient } from '../../services/deleteClient'

function DeleteButton({ id }) {

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
          deleteClient(id)
              .then(response => {
                  if (response === 'Usuario eliminado con éxito') {
                      Swal.fire(
                          "Eliminado!",
                          "El cliente ha sido eliminado.",
                          "success"
                      );
                      setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                  } else {
                      Swal.showValidationMessage(
                          `Ha surgido un error: ${response}`
                      );
                  }
              })
              .catch(error => {
                  console.error(error);
                  Swal.showValidationMessage(
                      "Ha surgido un error al eliminar el cliente."
                  );
              });
      }
    })
  }

  return (
    <>
      <button className='bg-red-500 text-white p-2 rounded' onClick={showSwal}><IconDelete /></button>
    </>
  )
}

DeleteButton.propTypes = { 
    id: PropTypes.number.isRequired,
    deleteFunction: PropTypes.func
}

export default DeleteButton;
